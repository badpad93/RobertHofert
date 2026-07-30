interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Heading = "h2",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span
          className={`mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] ${
            onDark ? "text-gold-bright" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <Heading
        id={id}
        className={`text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl ${
          onDark ? "text-warmwhite" : "text-burgundy"
        }`}
      >
        {title}
      </Heading>
      <span
        className={`gold-rule mt-4 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            onDark ? "text-cream/90" : "text-mediumgray"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
