import { NextResponse } from "next/server";
import { contactSchema, contactFieldLabels } from "@/lib/contact-schema";
import { rateLimit, pruneRateLimitBuckets } from "@/lib/rate-limit";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/** Escape HTML special characters to prevent injection in the email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Strip control characters that could enable header injection. */
function sanitize(value: string): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  // Basic rate limiting per IP
  pruneRateLimitBuckets();
  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again later.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept (do not reveal to bots) but do not process.
  if (data.company_website_url && data.company_website_url.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Build a sanitized, ordered field list for the message body.
  const rows: Array<[string, string]> = [
    ["fullName", data.fullName],
    ["businessName", data.businessName],
    ["email", data.email],
    ["phone", data.phone],
    ["propertyType", data.propertyType],
    ["propertyAddress", data.propertyAddress],
    ["city", data.city],
    ["state", data.state],
    ["zip", data.zip],
    ["approxUsers", data.approxUsers],
    ["placementArea", data.placementArea],
    ["website", data.website ?? ""],
    ["operatingHours", data.operatingHours ?? ""],
    ["existingService", data.existingService ?? ""],
    ["bestTime", data.bestTime ?? ""],
    ["referralSource", data.referralSource ?? ""],
    ["message", data.message],
  ]
    .filter(([, value]) => value && value.length > 0)
    .map(([key, value]) => [
      contactFieldLabels[key] ?? key,
      sanitize(value as string),
    ]);

  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlBody = `
    <h2 style="font-family:Arial,sans-serif;color:#4C0F0E;">New property inquiry — ${site.name}</h2>
    <table style="font-family:Arial,sans-serif;border-collapse:collapse;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:bold;color:#310808;">${escapeHtml(
              label,
            )}</td><td style="padding:6px 12px;border:1px solid #eee;color:#18181B;">${escapeHtml(
              value,
            ).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // Development / unconfigured fallback: log server-side, do not claim delivery.
  if (!apiKey || !fromEmail) {
    console.info(
      "[contact] Email delivery not configured (RESEND_API_KEY/CONTACT_FROM_EMAIL missing). " +
        "Logging validated submission server-side only:\n" +
        textBody,
    );
    return NextResponse.json({
      ok: true,
      mode: "logged",
      message:
        "Your inquiry was received. (Email delivery is not configured in this environment; the submission was logged for follow-up.)",
    });
  }

  // Send via Resend.
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `New property inquiry — ${sanitize(data.businessName)}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your message right now. Please try again or call us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, mode: "email" });
  } catch (err) {
    console.error("[contact] Unexpected send error:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your message right now. Please try again or call us directly.",
      },
      { status: 500 },
    );
  }
}
