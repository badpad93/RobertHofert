import type { Metadata } from "next";
import {
  Refrigerator,
  ScanLine,
  Boxes,
  Wrench,
  ClipboardCheck,
  Check,
  X,
  Snowflake,
  Truck,
  Coffee,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import QualificationCallout from "@/components/QualificationCallout";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import CoolerIllustration from "@/components/CoolerIllustration";

export const metadata: Metadata = {
  title: "AI Cooler Products & Managed Services",
  description:
    "RVRH Enterprises LLC offers managed AI cooler placement, product stocking, routine service, and property consultation for qualifying commercial properties.",
  alternates: { canonical: "/products-services" },
};

const services = [
  {
    icon: Refrigerator,
    title: "AI Cooler Placement",
    intro:
      "A modern, managed unattended-retail solution — not simply a refrigerator drop-off.",
    points: [
      "Modern refrigerated grab-and-go equipment",
      "Smart self-checkout experience",
      "Flexible product assortment",
      "Suitable for qualifying commercial properties",
      "Professional installation coordination",
      "No equipment purchase required for approved placements",
    ],
  },
  {
    icon: Boxes,
    title: "Product Stocking",
    intro:
      "We keep the cooler stocked with a mix suited to the property and its users.",
    points: [
      "Snacks",
      "Cold beverages",
      "Better-for-you options where appropriate",
      "Product mix adjusted according to demand and property feedback",
      "Availability depends on supplier inventory and local service capabilities",
    ],
  },
  {
    icon: Wrench,
    title: "Routine Service",
    intro:
      "Ongoing attention that keeps the experience clean, stocked, and dependable.",
    points: [
      "Restocking",
      "Basic equipment monitoring",
      "Merchandising",
      "Cleaning of customer-facing equipment surfaces during service visits",
      "Response to reported operational issues",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Property Consultation",
    intro:
      "Before placement, we review the factors that make a location a practical fit.",
    points: [
      "Approximate population",
      "Daily traffic",
      "Operating hours",
      "Property access",
      "Power availability",
      "Security",
      "Placement area",
      "Existing food and beverage options",
      "Service-route feasibility",
    ],
  },
];

const comparison = [
  { factor: "Shopping experience", vending: "Fixed selection behind glass", cooler: "Open grab-and-go with smart self-checkout" },
  { factor: "Product variety", vending: "Limited to machine columns", cooler: "Flexible assortment of snacks and cold beverages" },
  { factor: "Fresh & chilled options", vending: "Often limited", cooler: "Refrigerated selection suited to the property" },
  { factor: "Equipment purchase", vending: "Varies", cooler: "Not required for approved placements" },
  { factor: "Service & stocking", vending: "Varies by provider", cooler: "Professionally managed by RVRH" },
  { factor: "Presentation", vending: "Traditional machine footprint", cooler: "Modern, open merchandising" },
];

export default function ProductsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="AI Cooler Products and Managed Services"
        description="RVRH Enterprises LLC offers a managed unattended-retail solution — modern equipment, professional stocking, and ongoing service — rather than simply selling a refrigerator."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products & Services" },
        ]}
      />

      {/* Service sections */}
      <section className="bg-warmwhite">
        <div className="container-page space-y-16 py-16 sm:py-20">
          {services.map((s, index) => (
            <Reveal key={s.title}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
                id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")}
              >
                <div>
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                    <s.icon className="h-7 w-7 text-gold-bright" aria-hidden="true" />
                  </span>
                  <h2 className="text-2xl font-bold text-burgundy sm:text-3xl">
                    {s.title}
                  </h2>
                  <span className="gold-rule mt-4" aria-hidden="true" />
                  <p className="mt-5 text-base leading-relaxed text-mediumgray">
                    {s.intro}
                  </p>
                </div>
                <ul className="grid gap-3 rounded-2xl border border-brand bg-white p-6 shadow-card sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-charcoal">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="A Modern Alternative"
            title={
              <>
                Traditional Vending vs.{" "}
                <span className="text-highlight">AI Cooler</span> Convenience
              </>
            }
            description="A general, factual comparison of the two approaches to on-site refreshment."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-brand bg-white shadow-card">
              <caption className="sr-only">
                Comparison of traditional vending machines and AI cooler
                convenience across several factors.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="bg-cream px-5 py-4 text-left font-heading text-sm font-semibold uppercase tracking-wide text-burgundy"
                  >
                    Factor
                  </th>
                  <th
                    scope="col"
                    className="border-l border-brand bg-cream px-5 py-4 text-left font-heading text-sm font-semibold uppercase tracking-wide text-mediumgray"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Coffee className="h-4 w-4" aria-hidden="true" />
                      Traditional Vending
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="border-l border-brand bg-burgundy px-5 py-4 text-left font-heading text-sm font-semibold uppercase tracking-wide text-gold-bright"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Snowflake className="h-4 w-4" aria-hidden="true" />
                      AI Cooler
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.factor} className={i % 2 ? "bg-cream/40" : ""}>
                    <th
                      scope="row"
                      className="border-t border-brand px-5 py-4 text-left text-sm font-semibold text-burgundy"
                    >
                      {row.factor}
                    </th>
                    <td className="border-l border-t border-brand px-5 py-4 text-sm text-mediumgray">
                      <span className="inline-flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-mediumgray/60" aria-hidden="true" />
                        {row.vending}
                      </span>
                    </td>
                    <td className="border-l border-t border-brand px-5 py-4 text-sm text-charcoal">
                      <span className="inline-flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        {row.cooler}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-mediumgray">
            Comparison is general and for illustration. Actual experience,
            product availability, and service depend on the property and local
            conditions.
          </p>
        </div>
      </section>

      {/* Qualification callout */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <QualificationCallout />
            </div>
            <div className="mx-auto hidden w-full max-w-[280px] lg:block">
              <div className="rounded-3xl border-2 border-gold/40 bg-burgundy p-6">
                <CoolerIllustration className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Explore a Placement?"
        primaryLabel="Submit Your Property"
      />
    </>
  );
}
