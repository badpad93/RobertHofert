import { Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/site";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTABanner({
  heading = "Ask Us How to Qualify Today",
  subheading = "Tell us about your property and we will let you know whether an AI cooler placement is a practical fit.",
  primaryLabel = "Request a Cooler",
  primaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-warmwhite">
      <div className="container-page py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-burgundy px-6 py-12 text-center shadow-card-hover sm:px-12">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gold"
            aria-hidden="true"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-warmwhite sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/85">
            {subheading}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={primaryHref} variant="secondary" size="lg">
              {primaryLabel}
            </CTAButton>
            <CTAButton
              href={site.phoneHref}
              variant="outline"
              size="lg"
              icon={Phone}
              className="border-gold text-warmwhite hover:bg-gold hover:text-burgundy-dark"
            >
              Call Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
