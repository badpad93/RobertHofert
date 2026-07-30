import { site } from "@/lib/site";

/**
 * Organization JSON-LD. Uses only verified details (name, phone, email, url).
 * No physical address or service area is asserted because none is provided.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    slogan: site.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
    },
  };
}
