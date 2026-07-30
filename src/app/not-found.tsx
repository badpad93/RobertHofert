import type { Metadata } from "next";
import Link from "next/link";
import { Home, Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { nav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-burgundy">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-heading text-7xl font-bold text-gold-bright sm:text-8xl">
          404
        </span>
        <h1 className="mt-4 text-3xl font-bold text-warmwhite sm:text-4xl">
          Page Not Found
        </h1>
        <span className="gold-rule mx-auto mt-4" aria-hidden="true" />
        <p className="mt-5 max-w-md text-cream/85">
          The page you are looking for may have moved or no longer exists. Let us
          help you find your way back.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/" variant="secondary" size="lg" icon={Home}>
            Back to Home
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

        <nav aria-label="Helpful links" className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-cream/80 hover:text-gold-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
