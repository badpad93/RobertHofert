"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import Logo from "@/components/Logo";
import CTAButton from "@/components/CTAButton";
import MobileNavigation from "@/components/MobileNavigation";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-brand bg-warmwhite/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-2 shadow-header" : "py-3"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Logo compact={scrolled} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-md px-3 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-colors hover:text-burgundy ${
                      active ? "text-burgundy" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold transition-transform duration-200 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-heading text-sm font-semibold text-burgundy hover:text-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{site.phone}</span>
          </a>
          <CTAButton href="/contact" variant="primary" size="md">
            Request an AI Cooler
          </CTAButton>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
