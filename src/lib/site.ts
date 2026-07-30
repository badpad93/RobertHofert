/**
 * Central site configuration. Keep contact details and nav in one place so
 * they are always consistent across the site.
 */

export const site = {
  name: "RVRH Enterprises LLC",
  shortName: "RVRH Enterprises",
  tagline: "Family Owned and Operated",
  phone: "(940) 391-0102",
  phoneHref: "tel:+19403910102",
  email: "rhofert@yahoo.com",
  emailHref: "mailto:rhofert@yahoo.com",
  description:
    "Family-owned AI cooler placement and managed grab-and-go service for qualifying workplaces and commercial properties.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products-services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const propertyTypes = [
  "Office",
  "Apartment community",
  "Hotel",
  "Gym",
  "Warehouse",
  "Healthcare facility",
  "School or educational property",
  "Retail or customer-facing business",
  "Other",
] as const;
