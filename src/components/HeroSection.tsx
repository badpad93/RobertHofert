import { Phone, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CoolerIllustration from "@/components/CoolerIllustration";
import { site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-burgundy text-warmwhite">
      {/* subtle gold arc echoing the flyer */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-2 border-gold/20"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="font-script text-2xl text-gold-bright sm:text-3xl">
              {site.tagline}
            </span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.03] text-warmwhite sm:text-5xl lg:text-6xl">
              Bring Modern{" "}
              <span className="text-gold-bright">Grab-and-Go</span> Convenience
              to Your Property
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
              {site.name} provides professionally managed AI cooler placement
              for qualifying workplaces, residential communities, hotels, gyms,
              and other commercial properties.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/contact" variant="secondary" size="lg">
                See If Your Property Qualifies
              </CTAButton>
              <CTAButton
                href={site.phoneHref}
                variant="outline"
                size="lg"
                icon={Phone}
                className="border-gold text-warmwhite hover:bg-gold hover:text-burgundy-dark"
              >
                Call {site.phone}
              </CTAButton>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-cream/75">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-bright"
                aria-hidden="true"
              />
              <span>
                No equipment purchase required for approved placements. Placement
                is subject to qualification and service availability.
              </span>
            </p>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl border-2 border-gold/40 bg-burgundy-dark/60 p-6 shadow-card-hover sm:p-8">
              <CoolerIllustration className="mx-auto h-auto w-full max-w-[320px]" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-burgundy px-5 py-2 text-center font-heading text-sm font-semibold uppercase tracking-wide text-gold-bright shadow-card">
              Get Your Free AI Cooler
            </div>
          </div>
        </div>
      </div>

      {/* angled separator into the next (light) section */}
      <div
        className="h-10 w-full bg-warmwhite [clip-path:polygon(0_100%,100%_0,100%_100%)]"
        aria-hidden="true"
      />
    </section>
  );
}
