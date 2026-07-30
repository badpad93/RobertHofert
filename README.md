# RVRH Enterprises LLC — Marketing Website

A polished, production-ready marketing website for **RVRH Enterprises LLC**, a
family-owned company providing professionally managed **AI cooler placement**
and grab-and-go service for qualifying workplaces and commercial properties.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Lucide** icons. Fully responsive, accessible (targeting WCAG 2.1 AA), and
SEO-ready.

---

## Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 15 (App Router)                 |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS 3                          |
| Icons       | lucide-react                            |
| Images      | next/image                              |
| Fonts       | next/font — Oswald, Inter, Dancing Script |
| Validation  | Zod (shared client + server)            |
| Email       | Resend (with a documented dev fallback) |

---

## Getting started (local development)

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local
# (edit .env.local as needed — see "Contact form configuration" below)

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

### Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

---

## Project structure

```
public/
  images/
    rvrh-ai-cooler-flyer.jpg   # promotional flyer (see "Images & assets")
  icons/                       # (reserved for future static icons)
src/
  app/
    layout.tsx                 # root layout, fonts, global metadata, Org JSON-LD
    page.tsx                   # Home
    products-services/page.tsx
    how-it-works/page.tsx      # includes FAQ + FAQ JSON-LD
    about/page.tsx
    contact/page.tsx           # contact + property qualification form
    api/contact/route.ts       # form handler (Zod + Resend / dev fallback)
    not-found.tsx              # custom 404
    robots.ts                  # /robots.txt
    sitemap.ts                 # /sitemap.xml
    icon.svg                   # favicon (RVRH monogram)
    globals.css
  components/                  # reusable UI components
  lib/
    site.ts                    # central site config (contact info, nav)
    contact-schema.ts          # Zod schema shared by client + server
    rate-limit.ts              # basic in-memory rate limiter
    jsonld.ts                  # Organization structured data
```

### Reusable components

`Header`, `MobileNavigation`, `Footer`, `HeroSection`, `PageHero`,
`SectionHeading`, `CTAButton`, `CTABanner`, `FeatureCard`, `IndustryCard`,
`ProcessStep`, `ContactForm`, `FAQAccordion`, `QualificationCallout`,
`Breadcrumbs`, `Logo`, `CoolerIllustration`, `Reveal`.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need.

| Variable               | Required | Purpose                                                    |
| ---------------------- | -------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Prod     | Canonical URLs, sitemap, robots, Open Graph. No trailing `/`. |
| `RESEND_API_KEY`       | Prod\*   | Resend API key for sending form emails.                    |
| `CONTACT_TO_EMAIL`     | Prod\*   | Where inquiries are delivered (default `rhofert@yahoo.com`). |
| `CONTACT_FROM_EMAIL`   | Prod\*   | Verified Resend sender, e.g. `RVRH <inquiries@yourdomain.com>`. |

\* If `RESEND_API_KEY` **or** `CONTACT_FROM_EMAIL` is missing, the contact form
runs in **development fallback mode** (see below).

---

## Contact form configuration

The contact form (`/contact`) posts to the API route `POST /api/contact`.

**Validation & security**

- Validated on the **client and server** with the same Zod schema.
- Submitted values are **sanitized** (control characters stripped, HTML escaped
  in the email body).
- A hidden **honeypot** field silently drops bot submissions.
- **Basic rate limiting** (5 requests/hour per IP) via an in-memory store.
  For serverless / multi-instance hosting, swap `src/lib/rate-limit.ts` for a
  shared store such as Upstash Redis.
- Secret keys are **server-only** and never shipped to the browser.

**Email delivery (Resend)**

1. Create an account at [resend.com](https://resend.com) and verify a sending
   domain.
2. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified sender), and
   `CONTACT_TO_EMAIL` in your environment.
3. Submissions are emailed to `CONTACT_TO_EMAIL` with **Reply-To** set to the
   visitor's email. If delivery fails, the form shows an error — it never
   silently claims success.

**Development fallback**

If email credentials are not configured, the route validates the submission and
**logs it to the server console** (never exposing it publicly), returning a
clear message that email delivery is not configured. This lets you develop and
test the full flow without Resend.

---

## Images & assets

- `public/images/rvrh-ai-cooler-flyer.jpg` — **placeholder recreation** of the
  brand flyer, generated on-brand (burgundy/gold) and adapted to the AI cooler
  offer. **Replace this file** with the owner's final high-resolution flyer
  (keep the same filename/path). It is used in the homepage promotional section
  and as the Open Graph / Twitter share image.
- The hero and product **cooler graphic** is an original inline SVG
  (`src/components/CoolerIllustration.tsx`) — not a manufacturer photo. If a
  real, cleanly-backgrounded product photo becomes available, drop it into
  `public/images/` and swap it into `HeroSection` / product sections.
- `src/app/icon.svg` — an in-house **RVRH monogram** favicon. No third-party
  manufacturer logo is used anywhere as RVRH branding.

> **Placeholder assets are clearly marked above.** Everything else is final copy.

---

## SEO

- Unique `<title>` and description metadata on every page.
- Open Graph + Twitter card metadata.
- Canonical URLs derived from `NEXT_PUBLIC_SITE_URL`.
- `robots.txt` and `sitemap.xml` generated at build time.
- **Organization** JSON-LD (site-wide) and **FAQ** JSON-LD (How It Works).
- No physical address or service area is asserted (none was provided).
  `LocalBusiness` JSON-LD is intentionally omitted until a verified address or
  service area exists — see "Before launch."

---

## Accessibility

Semantic HTML and correct heading order, visible keyboard focus states, an
accessible mobile menu (focus management + `Escape` to close), labeled form
fields with inline validation messaging, sufficient color contrast, descriptive
alt text, comfortable mobile tap targets, and `prefers-reduced-motion` support.

---

## Deployment

The site is a standard Next.js app and deploys cleanly to **Vercel** (or any
Node host):

1. Push the repository to your Git provider.
2. Import the project into Vercel.
3. Add the environment variables from the table above (at minimum
   `NEXT_PUBLIC_SITE_URL`; add the Resend variables to enable live email).
4. Deploy. Vercel runs `npm run build` automatically.

For other hosts: `npm run build` then `npm run start` behind your process
manager / reverse proxy.

---

## Before launch — owner to provide

The following would strengthen the site and unlock optional features. None is
required for the site to run:

1. **Final flyer image** — high-resolution version to replace the placeholder
   at `public/images/rvrh-ai-cooler-flyer.jpg`.
2. **Product photo(s)** — a real, cleanly-backgrounded AI cooler image for the
   hero/product sections (optional; an original illustration is used today).
3. **Resend credentials** — API key, verified sending domain, and confirmed
   `CONTACT_TO_EMAIL` to enable live email delivery.
4. **Production domain** — to set `NEXT_PUBLIC_SITE_URL` for canonical URLs and
   sharing images.
5. **Business address and/or verified service area** — if RVRH wants
   `LocalBusiness` structured data and local-SEO signals. (Deliberately omitted
   until provided to avoid inventing location data.)
6. **Business hours** — to display concrete hours on the Contact page.
7. **Any approved brand/supplier assets** — if specific consumer product brands
   should ever be named or shown (none are used today without authorization).
8. **Social media profiles** — if/when they exist, to add footer links.

---

© RVRH Enterprises LLC. All rights reserved.
