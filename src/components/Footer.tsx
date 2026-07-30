import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import CTAButton from "@/components/CTAButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-gold bg-burgundy-dark text-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-burgundy font-heading text-lg font-bold text-gold">
              RVRH
            </span>
            <p className="mt-4 font-heading text-xl font-semibold uppercase tracking-wide text-warmwhite">
              {site.name}
            </p>
            <p className="font-script text-lg text-gold">{site.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">
              Professionally managed AI cooler placement and grab-and-go service
              for qualifying workplaces and commercial properties.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/85 hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 text-cream/85 hover:text-gold-bright"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2 break-all text-cream/85 hover:text-gold-bright"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <CTAButton href="/contact" variant="onDark" size="md">
                Request an AI Cooler
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-gold/25 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-cream/70">
            AI cooler placement is subject to property review, service-area
            availability, expected usage, and final approval. Product selection
            and service terms may vary by location.
          </p>
          <p className="mt-4 text-xs text-cream/60">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
