import type { Metadata } from "next";
import { Phone, Mail, Clock3, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — See If Your Property Qualifies",
  description:
    "Contact RVRH Enterprises LLC about AI cooler placement. Submit your property details for an individual review. Call (940) 391-0102 or email rhofert@yahoo.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="See If Your Property Qualifies"
        description="Tell us about your property and we will follow up to discuss whether an AI cooler placement is a practical fit. Every property is reviewed individually."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-warmwhite">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact details */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-brand bg-white p-6 shadow-card">
                  <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-burgundy">
                    Talk to RVRH
                  </h2>
                  <span className="gold-rule mt-3" aria-hidden="true" />
                  <ul className="mt-5 space-y-4">
                    <li>
                      <a
                        href={site.phoneHref}
                        className="group flex items-center gap-3"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                          <Phone className="h-5 w-5 text-gold-bright" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wide text-mediumgray">
                            Phone
                          </span>
                          <span className="font-heading text-lg font-semibold text-burgundy group-hover:text-gold">
                            {site.phone}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.emailHref}
                        className="group flex items-center gap-3"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
                          <Mail className="h-5 w-5 text-gold-bright" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-wide text-mediumgray">
                            Email
                          </span>
                          <span className="block break-all font-semibold text-burgundy group-hover:text-gold">
                            {site.email}
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-brand bg-cream p-6">
                  <p className="flex items-start gap-3 text-sm text-charcoal">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      Prefer to talk it through? Call during business hours and
                      we will walk you through the qualification process.
                    </span>
                  </p>
                  <p className="mt-4 flex items-start gap-3 text-sm text-charcoal">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      Contact RVRH to confirm service availability in your area.
                    </span>
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-brand bg-white p-6 shadow-card sm:p-8">
                <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-burgundy">
                  Property Qualification Form
                </h2>
                <p className="mt-2 text-sm text-mediumgray">
                  Share a few details about your property. This helps us prepare
                  for a productive first conversation.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
