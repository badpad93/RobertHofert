"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll, handle Escape, and move focus into the panel when open
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand text-burgundy"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/50"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-warmwhite shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-brand px-5 py-4">
              <span className="font-heading text-lg font-semibold uppercase text-burgundy">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand text-burgundy"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
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
                        className={`block rounded-lg px-4 py-3 font-heading text-base font-medium uppercase tracking-wide ${
                          active
                            ? "bg-burgundy text-warmwhite"
                            : "text-charcoal hover:bg-cream"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-brand px-5 py-5">
              <Link
                href="/contact"
                className="mb-4 flex min-h-[48px] items-center justify-center rounded-lg border-2 border-transparent bg-burgundy px-5 py-3 font-heading font-semibold uppercase tracking-wide text-warmwhite hover:border-gold hover:bg-burgundy-dark"
              >
                Request an AI Cooler
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 py-2 font-semibold text-burgundy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2 py-2 text-mediumgray"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
