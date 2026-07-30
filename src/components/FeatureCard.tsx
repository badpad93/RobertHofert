import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function FeatureCard({
  icon: Icon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <div className="card-brand flex h-full flex-col p-6 hover:shadow-card-hover">
      {/* Clean gold-ringed icon circle inspired by the flyer */}
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-burgundy">
        <Icon className="h-7 w-7 text-gold-bright" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-semibold text-burgundy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mediumgray">{children}</p>
    </div>
  );
}
