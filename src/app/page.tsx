import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  ScanLine,
  PackageCheck,
  Gift,
  Building2,
  Home as HomeIcon,
  Hotel,
  Dumbbell,
  Warehouse,
  Stethoscope,
  MessageSquare,
  MapPin,
  Presentation,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import IndustryCard from "@/components/IndustryCard";
import ProcessStep from "@/components/ProcessStep";
import CTABanner from "@/components/CTABanner";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "RVRH Enterprises LLC | AI Cooler Placement" },
  description: site.description,
  alternates: { canonical: "/" },
};

const benefits = [
  {
    icon: Clock,
    title: "Available 24/7",
    body: "Give employees, residents, guests, or customers convenient access to snacks and beverages throughout the day.",
  },
  {
    icon: ScanLine,
    title: "Smart Self-Checkout",
    body: "A streamlined shopping experience designed around modern grab-and-go convenience.",
  },
  {
    icon: PackageCheck,
    title: "Professionally Stocked",
    body: "RVRH manages product stocking and ongoing service according to the needs of the property.",
  },
  {
    icon: Gift,
    title: "No Upfront Equipment Purchase",
    body: "Qualifying properties can receive an AI cooler without purchasing the equipment.",
  },
];

const properties = [
  {
    icon: Building2,
    title: "Offices & Workplaces",
    description: "Convenient refreshment for teams, breakrooms, and lobbies.",
  },
  {
    icon: HomeIcon,
    title: "Apartment Communities",
    description: "A modern amenity for residents in shared common areas.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Grab-and-go options for guests around the clock.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness Centers",
    description: "Beverages and better-for-you options for members.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Industrial",
    description: "Reliable access for shifts and on-site staff.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Professional",
    description: "Convenient refreshment for staff, patients, and visitors.",
  },
];

const steps = [
  { title: "Tell us about your property", description: "Share a few details about your location, access, and expected usage." },
  { title: "We evaluate placement suitability", description: "We review whether an AI cooler is a practical fit for the location." },
  { title: "We coordinate installation", description: "For approved properties, we handle delivery and initial setup." },
  { title: "We stock and service the cooler", description: "RVRH manages routine stocking and ongoing service after launch." },
];

const reasons = [
  { icon: MessageSquare, title: "Responsive Communication", body: "We aim to keep property contacts informed and respond to questions and reported issues." },
  { icon: MapPin, title: "Local Accountability", body: "As a family-owned company, we take direct ownership of the properties we serve." },
  { icon: Presentation, title: "Professional Presentation", body: "Clean, well-merchandised equipment that reflects well on your property." },
  { icon: Sparkles, title: "Dependable Stocking", body: "Product stocking managed around the needs and feedback of each location." },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* A. Benefits */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Modern Convenience"
            title={
              <>
                Convenience Without the Traditional{" "}
                <span className="text-highlight">Vending</span> Experience
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <FeatureCard icon={b.icon} title={b.title}>
                  {b.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* B. Property types */}
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Flexible Placements"
            title={
              <>
                A Flexible Solution for Many{" "}
                <span className="text-highlight">Property Types</span>
              </>
            }
            description="AI cooler placement can work across a wide range of commercial settings. Every property is reviewed individually — not every location will qualify."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <IndustryCard
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. How it works preview */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Simple Process"
            title={
              <>
                How It <span className="text-highlight">Works</span>
              </>
            }
            description="A straightforward path from first conversation to a stocked, serviced cooler."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <ProcessStep step={i + 1} title={s.title} description={s.description} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-burgundy link-underline hover:text-gold"
            >
              See the full process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* D. Why RVRH */}
      <section className="bg-burgundy">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                onDark
                eyebrow="Why RVRH"
                title={
                  <>
                    Family-Owned Service You Can{" "}
                    <span className="text-gold-bright">Rely On</span>
                  </>
                }
                description="We combine modern AI cooler technology with the accountability and personal attention of a family-owned business."
              />
              <div className="mt-8">
                <CTAButton href="/about" variant="secondary" size="lg">
                  Learn About RVRH
                </CTAButton>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-gold/25 bg-burgundy-dark/50 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                    <r.icon className="h-6 w-6 text-gold-bright" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-warmwhite">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotional flyer feature */}
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Offer"
                title={
                  <>
                    Get Your <span className="text-highlight">Free</span> AI
                    Cooler
                  </>
                }
                description="Bring modern grab-and-go convenience to your workplace or property. Approved placements do not require an equipment purchase — ask us how to qualify."
              />
              <ul className="mt-6 space-y-3 text-mediumgray">
                {[
                  "Professionally managed placement and service",
                  "Smart self-checkout for a modern experience",
                  "Product mix adjusted to your property",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/contact" variant="primary" size="lg">
                  See If Your Property Qualifies
                </CTAButton>
                <CTAButton href="/products-services" variant="outline" size="lg">
                  Explore Products & Services
                </CTAButton>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border-2 border-gold bg-white p-3 shadow-card-hover">
                <Image
                  src="/images/rvrh-ai-cooler-flyer.jpg"
                  alt="RVRH Enterprises LLC promotional flyer: Get your free AI cooler placement — family owned and operated."
                  width={1080}
                  height={1440}
                  className="h-auto w-full rounded-2xl"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. Main CTA banner */}
      <CTABanner />
    </>
  );
}
