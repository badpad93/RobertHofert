import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: Crumb[];
}

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-burgundy text-warmwhite">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-2 border-gold/15"
        aria-hidden="true"
      />
      <div className="container-page relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-bright">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-2 text-4xl font-bold leading-[1.05] text-warmwhite sm:text-5xl">
            {title}
          </h1>
          <span className="gold-rule mt-4" aria-hidden="true" />
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-cream/90">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div
        className="h-8 w-full bg-warmwhite [clip-path:polygon(0_100%,100%_0,100%_100%)]"
        aria-hidden="true"
      />
    </section>
  );
}
