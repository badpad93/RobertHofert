import Link from "next/link";

/**
 * Text-based RVRH brand mark. Recreated in-house — intentionally does NOT
 * reproduce any third-party manufacturer logo from the cooler hardware.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="RVRH Enterprises LLC — home"
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full border-2 border-gold bg-burgundy font-heading font-bold leading-none text-gold transition-transform duration-300 group-hover:scale-105 ${
          compact ? "h-10 w-10 text-base" : "h-12 w-12 text-lg"
        }`}
        aria-hidden="true"
      >
        RVRH
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-semibold uppercase tracking-wide text-burgundy ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          RVRH Enterprises LLC
        </span>
        <span className="font-script text-sm normal-case text-gold">
          Family Owned and Operated
        </span>
      </span>
    </Link>
  );
}
