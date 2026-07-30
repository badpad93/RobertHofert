"use client";

import { useRef, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { contactSchema } from "@/lib/contact-schema";
import { propertyTypes } from "@/lib/site";

type FieldErrors = Record<string, string>;
type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  propertyType: "",
  propertyAddress: "",
  city: "",
  state: "",
  zip: "",
  approxUsers: "",
  placementArea: "",
  website: "",
  operatingHours: "",
  existingService: "",
  bestTime: "",
  referralSource: "",
  message: "",
  consent: false,
  company_website_url: "",
};

type Values = typeof initialValues;

const inputClass =
  "w-full rounded-lg border border-brand bg-white px-3.5 py-2.5 text-charcoal shadow-sm outline-none transition-colors placeholder:text-mediumgray/60 focus:border-gold focus:ring-2 focus:ring-gold/40 aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-600/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-charcoal";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const statusRef = useRef<HTMLDivElement>(null);

  const update = (name: keyof Values, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage("");

    // Client-side validation with the same Zod schema used on the server.
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Please correct the highlighted fields.");
      // Move focus to first invalid field
      const firstKey = Object.keys(fieldErrors)[0];
      if (firstKey) {
        document.getElementById(firstKey)?.focus();
      }
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        setServerMessage(
          data.message ??
            "Thank you. Your property inquiry has been received — we will be in touch.",
        );
        setValues(initialValues);
        statusRef.current?.focus();
      } else {
        setStatus("error");
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setServerMessage(
          data.error ??
            "Something went wrong. Please try again or call us directly.",
        );
        statusRef.current?.focus();
      }
    } catch {
      // Network error — preserve entered values so the user can retry.
      setStatus("error");
      setServerMessage(
        "We could not reach the server. Please check your connection and try again, or call us directly.",
      );
      statusRef.current?.focus();
    }
  };

  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-sm text-red-700" role="alert">
        {errors[name]}
      </p>
    ) : null;

  const aria = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Live status region */}
      <div
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        className="outline-none"
      >
        {status === "success" ? (
          <div className="flex items-start gap-3 rounded-lg border border-green-600/30 bg-green-50 p-4 text-green-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm">{serverMessage}</p>
          </div>
        ) : null}
        {status === "error" && serverMessage ? (
          <div className="flex items-start gap-3 rounded-lg border border-red-600/30 bg-red-50 p-4 text-red-800">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm">{serverMessage}</p>
          </div>
        ) : null}
      </div>

      {/* Honeypot — visually hidden, ignored by real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_url">Leave this field blank</label>
        <input
          id="company_website_url"
          name="company_website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company_website_url}
          onChange={(e) => update("company_website_url", e.target.value)}
        />
      </div>

      {/* Required — Contact details */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-semibold uppercase tracking-wide text-burgundy">
          Your Details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full name <span className="text-red-700">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
              value={values.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              {...aria("fullName")}
            />
            {err("fullName")}
          </div>
          <div>
            <label htmlFor="businessName" className={labelClass}>
              Business or property name <span className="text-red-700">*</span>
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              required
              className={inputClass}
              value={values.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              {...aria("businessName")}
            />
            {err("businessName")}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-red-700">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              {...aria("email")}
            />
            {err("email")}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className="text-red-700">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={inputClass}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              {...aria("phone")}
            />
            {err("phone")}
          </div>
        </div>
      </fieldset>

      {/* Required — Property details */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-semibold uppercase tracking-wide text-burgundy">
          Property Details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="propertyType" className={labelClass}>
              Property type <span className="text-red-700">*</span>
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              className={inputClass}
              value={values.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              {...aria("propertyType")}
            >
              <option value="">Select a property type…</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {err("propertyType")}
          </div>
          <div>
            <label htmlFor="approxUsers" className={labelClass}>
              Approx. employees, residents, guests, or daily users{" "}
              <span className="text-red-700">*</span>
            </label>
            <input
              id="approxUsers"
              name="approxUsers"
              type="text"
              inputMode="numeric"
              required
              placeholder="e.g. 75"
              className={inputClass}
              value={values.approxUsers}
              onChange={(e) => update("approxUsers", e.target.value)}
              {...aria("approxUsers")}
            />
            {err("approxUsers")}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="propertyAddress" className={labelClass}>
              Property address <span className="text-red-700">*</span>
            </label>
            <input
              id="propertyAddress"
              name="propertyAddress"
              type="text"
              autoComplete="street-address"
              required
              className={inputClass}
              value={values.propertyAddress}
              onChange={(e) => update("propertyAddress", e.target.value)}
              {...aria("propertyAddress")}
            />
            {err("propertyAddress")}
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              City <span className="text-red-700">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              className={inputClass}
              value={values.city}
              onChange={(e) => update("city", e.target.value)}
              {...aria("city")}
            />
            {err("city")}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="state" className={labelClass}>
                State <span className="text-red-700">*</span>
              </label>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="address-level1"
                required
                className={inputClass}
                value={values.state}
                onChange={(e) => update("state", e.target.value)}
                {...aria("state")}
              />
              {err("state")}
            </div>
            <div>
              <label htmlFor="zip" className={labelClass}>
                ZIP code <span className="text-red-700">*</span>
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                required
                className={inputClass}
                value={values.zip}
                onChange={(e) => update("zip", e.target.value)}
                {...aria("zip")}
              />
              {err("zip")}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="placementArea" className={labelClass}>
              Preferred placement area <span className="text-red-700">*</span>
            </label>
            <input
              id="placementArea"
              name="placementArea"
              type="text"
              required
              placeholder="e.g. Breakroom, lobby, common area"
              className={inputClass}
              value={values.placementArea}
              onChange={(e) => update("placementArea", e.target.value)}
              {...aria("placementArea")}
            />
            {err("placementArea")}
          </div>
        </div>
      </fieldset>

      {/* Optional details */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-semibold uppercase tracking-wide text-burgundy">
          Optional Details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="website" className={labelClass}>
              Property website
            </label>
            <input
              id="website"
              name="website"
              type="text"
              inputMode="url"
              placeholder="https://"
              className={inputClass}
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="operatingHours" className={labelClass}>
              Operating hours
            </label>
            <input
              id="operatingHours"
              name="operatingHours"
              type="text"
              placeholder="e.g. Mon–Fri, 8am–6pm"
              className={inputClass}
              value={values.operatingHours}
              onChange={(e) => update("operatingHours", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="existingService" className={labelClass}>
              Existing vending or food service
            </label>
            <input
              id="existingService"
              name="existingService"
              type="text"
              className={inputClass}
              value={values.existingService}
              onChange={(e) => update("existingService", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bestTime" className={labelClass}>
              Best time to contact
            </label>
            <input
              id="bestTime"
              name="bestTime"
              type="text"
              placeholder="e.g. Weekday mornings"
              className={inputClass}
              value={values.bestTime}
              onChange={(e) => update("bestTime", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="referralSource" className={labelClass}>
              How did you hear about RVRH?
            </label>
            <input
              id="referralSource"
              name="referralSource"
              type="text"
              className={inputClass}
              value={values.referralSource}
              onChange={(e) => update("referralSource", e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a little about your property and what you are looking for."
          className={inputClass}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          {...aria("message")}
        />
        {err("message")}
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 shrink-0 rounded border-brand text-burgundy focus:ring-2 focus:ring-gold/40"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            {...aria("consent")}
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-charcoal">
            I agree that RVRH Enterprises LLC may contact me about this property
            inquiry. Submitting this form does not guarantee placement approval.{" "}
            <span className="text-red-700">*</span>
          </label>
        </div>
        {err("consent")}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border-2 border-transparent bg-burgundy px-7 py-3.5 font-heading font-semibold uppercase tracking-wide text-warmwhite shadow-card transition-all hover:border-gold hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              Submit Property Inquiry
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-mediumgray">
          Fields marked <span className="text-red-700">*</span> are required.
        </p>
      </div>
    </form>
  );
}
