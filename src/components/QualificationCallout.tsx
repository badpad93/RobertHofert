import { BadgeCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";

interface QualificationCalloutProps {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function QualificationCallout({
  heading = "Is Your Property a Good Fit?",
  body = "The best placements generally have consistent daily traffic, convenient access, suitable electrical service, and a secure indoor location. Every property is reviewed individually.",
  ctaLabel = "Submit Your Property",
  ctaHref = "/contact",
}: QualificationCalloutProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-gold bg-cream p-8 shadow-card sm:p-10">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
              <BadgeCheck className="h-6 w-6 text-gold-bright" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold text-burgundy sm:text-3xl">
              {heading}
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-mediumgray">
            {body}
          </p>
        </div>
        <div className="shrink-0">
          <CTAButton href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
