import type { Metadata } from "next";
import {
  Target,
  Compass,
  ShieldCheck,
  MessageSquare,
  HeartHandshake,
  Repeat,
  Home as HomeIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Family-Owned Service, Modern Convenience",
  description:
    "RVRH Enterprises LLC is a family-owned and operated company bringing professionally managed AI cooler placement to qualifying workplaces and commercial properties.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Reliability", body: "We focus on consistent, dependable service at the properties we serve." },
  { icon: Compass, title: "Professionalism", body: "Clean, well-presented equipment and a respectful, business-like approach." },
  { icon: MessageSquare, title: "Clear Communication", body: "We aim to keep property contacts informed and easy to reach." },
  { icon: HeartHandshake, title: "Long-Term Relationships", body: "We value ongoing partnerships with the properties we work with." },
  { icon: Repeat, title: "Consistent Service", body: "Routine stocking and service designed around each location's needs." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RVRH"
        title={
          <>
            Family-Owned Service.{" "}
            <span className="text-gold-bright">Modern Convenience.</span>
          </>
        }
        description="A family-owned and operated company focused on convenient, professionally managed refreshment for the properties we serve."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-charcoal sm:text-xl">
              RVRH Enterprises LLC is a family-owned and operated company focused
              on bringing convenient, professionally managed refreshment options
              to qualifying workplaces and commercial properties. Our approach
              combines modern AI cooler technology with responsive,
              relationship-driven service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-brand bg-white p-8 shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                  <Target className="h-7 w-7 text-gold-bright" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-burgundy">Our Mission</h2>
                <span className="gold-rule mt-3" aria-hidden="true" />
                <p className="mt-4 text-base leading-relaxed text-mediumgray">
                  To make everyday convenience easier for the people who live,
                  work, visit, and gather at the properties we serve.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-brand bg-white p-8 shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                  <Compass className="h-7 w-7 text-gold-bright" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-burgundy">Our Approach</h2>
                <span className="gold-rule mt-3" aria-hidden="true" />
                <p className="mt-4 text-base leading-relaxed text-mediumgray">
                  We evaluate each property individually, communicate clearly,
                  and focus on maintaining a clean, convenient, and dependable
                  experience.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What matters to us */}
      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Our Values"
            title={
              <>
                What <span className="text-highlight">Matters</span> to Us
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-brand bg-white p-6 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                    <v.icon className="h-6 w-6 text-gold-bright" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-burgundy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mediumgray">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why family-owned matters */}
      <section className="bg-burgundy">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                onDark
                eyebrow="Why It Matters"
                title={
                  <>
                    Why <span className="text-gold-bright">Family-Owned</span>{" "}
                    Matters
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-cream/90">
                <p className="leading-relaxed">
                  As a family-owned and operated business, the reputation of{" "}
                  {site.name} is tied directly to the experience at every
                  property we serve. That means we care about doing the work
                  well and standing behind it.
                </p>
                <p className="leading-relaxed">
                  We aim to be approachable and accountable — the kind of company
                  that answers questions, follows through, and treats each
                  property relationship as a long-term one.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </CTAButton>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-3xl border-2 border-gold/40 bg-burgundy-dark/50 p-10 text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                  <HomeIcon className="h-10 w-10 text-gold-bright" aria-hidden="true" />
                </span>
                <p className="mt-6 font-script text-3xl text-gold-bright">
                  {site.tagline}
                </p>
                <p className="mt-2 font-heading text-lg font-semibold uppercase tracking-wide text-warmwhite">
                  {site.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
