import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
}: IndustryCardProps) {
  return (
    <div className="card-brand group flex h-full items-start gap-4 p-5 hover:shadow-card-hover">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-burgundy transition-colors duration-200 group-hover:bg-burgundy group-hover:text-gold-bright">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-burgundy">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-mediumgray">
          {description}
        </p>
      </div>
    </div>
  );
}
