import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "onDark";
type Size = "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-heading font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-gold min-h-[44px]";

const variants: Record<Variant, string> = {
  // Burgundy button with gold hover accent
  primary:
    "bg-burgundy text-warmwhite hover:bg-burgundy-dark border-2 border-transparent hover:border-gold shadow-card",
  secondary:
    "bg-gold text-burgundy-dark hover:bg-gold-bright border-2 border-transparent",
  outline:
    "bg-transparent text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-warmwhite",
  // For use on dark burgundy sections
  onDark:
    "bg-gold text-burgundy-dark hover:bg-gold-bright border-2 border-transparent shadow-card",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}
