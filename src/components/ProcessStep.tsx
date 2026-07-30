interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  step,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="card-brand relative flex h-full flex-col p-6 pt-8 hover:shadow-card-hover">
      <span
        className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-burgundy font-heading text-lg font-bold text-gold-bright"
        aria-hidden="true"
      >
        {step}
      </span>
      <h3 className="text-lg font-semibold text-burgundy">
        <span className="sr-only">Step {step}: </span>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mediumgray">
        {description}
      </p>
    </div>
  );
}
