import type { Metadata } from "next";
import Script from "next/script";
import {
  MapPin,
  Plug,
  DoorOpen,
  MessageCircle,
  Handshake,
  UserCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProcessStep from "@/components/ProcessStep";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import QualificationCallout from "@/components/QualificationCallout";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works — A Simple Placement Process",
  description:
    "From submitting your property to ongoing stocking and service, here is how RVRH Enterprises LLC approaches AI cooler placement — plus answers to common questions.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  { title: "Submit your property", description: "Complete the brief property qualification form." },
  { title: "Initial conversation", description: "RVRH contacts you to learn about the property, expected usage, access, and placement area." },
  { title: "Property review", description: "We evaluate whether the location is a practical fit for an AI cooler." },
  { title: "Placement approval", description: "Approved properties receive proposed placement and service details." },
  { title: "Delivery and setup", description: "We coordinate the equipment delivery and initial setup." },
  { title: "Stocking and ongoing service", description: "RVRH manages routine stocking and service after launch." },
];

const requirements = [
  { icon: MapPin, text: "A safe and accessible indoor placement area" },
  { icon: Plug, text: "An appropriate electrical outlet" },
  { icon: DoorOpen, text: "Reasonable service access" },
  { icon: MessageCircle, text: "Prompt communication if an obvious equipment issue occurs" },
  { icon: Handshake, text: "Cooperation during delivery and setup" },
  { icon: UserCheck, text: "A point of contact for the property" },
];

const faqs: FAQItem[] = [
  {
    question: "Is the AI cooler really free?",
    answer:
      "Approved properties are not required to purchase the equipment. Placement remains subject to qualification, service availability, and the final written placement terms.",
  },
  {
    question: "Who owns the equipment?",
    answer:
      "The equipment remains the property of RVRH Enterprises LLC or its applicable equipment partner unless a separate written agreement states otherwise.",
  },
  {
    question: "Who stocks the cooler?",
    answer:
      "RVRH manages product stocking as part of the service, restocking the cooler during routine service visits based on usage at the property.",
  },
  {
    question: "What products will be available?",
    answer:
      "A mix of snacks and cold beverages, with better-for-you options where appropriate. The specific selection can vary based on the property, demand, feedback, and supplier availability.",
  },
  {
    question: "Does every property qualify?",
    answer:
      "No. Every property is reviewed individually. Suitability depends on factors such as traffic, access, power, security, and the placement area. Not every location will be a practical fit.",
  },
  {
    question: "How much space is required?",
    answer:
      "The cooler needs a safe, accessible indoor area near an appropriate electrical outlet. We confirm the specific placement area and fit during the property review.",
  },
  {
    question: "What happens if the cooler has an issue?",
    answer:
      "Let us know promptly if you notice an obvious equipment issue. RVRH responds to reported operational issues as part of routine service.",
  },
  {
    question: "Can the product selection change?",
    answer:
      "Yes. The product mix can be adjusted over time based on demand, property feedback, and supplier availability.",
  },
  {
    question: "How long does approval take?",
    answer:
      "It depends on the property details and our review. After you submit your property, we follow up to discuss the location and next steps. Contact RVRH to confirm timing for your area.",
  },
];

export default function HowItWorksPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A Simple Placement Process"
        description="A clear, step-by-step path from your first inquiry to a stocked, serviced AI cooler at your property."
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      />

      {/* Steps */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <ProcessStep step={i + 1} title={s.title} description={s.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we need from the property */}
      <section className="bg-burgundy">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            onDark
            eyebrow="A Simple Partnership"
            title={
              <>
                What We Need From the{" "}
                <span className="text-gold-bright">Property</span>
              </>
            }
            description="A successful placement is a partnership. Here is what we ask of the properties we serve."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r) => (
              <li
                key={r.text}
                className="flex items-start gap-4 rounded-2xl border border-gold/25 bg-burgundy-dark/50 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                  <r.icon className="h-5 w-5 text-gold-bright" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-cream/90">
                  {r.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Common Questions"
            title={
              <>
                Frequently Asked <span className="text-highlight">Questions</span>
              </>
            }
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
            <p className="mt-6 text-center text-sm text-mediumgray">
              Have a question we did not cover?{" "}
              <a href={site.phoneHref} className="font-semibold text-burgundy link-underline">
                Call {site.phone}
              </a>{" "}
              or reach out on our contact page.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <QualificationCallout />
        </div>
      </section>

      <CTABanner />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
