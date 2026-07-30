import Image from "next/image";

/**
 * Product photo of the AI grab-and-go cooler.
 *
 * Source file: public/images/ai-cooler.jpg
 * Uses `fill` + object-contain inside a fixed portrait frame so ANY replacement
 * photo (whatever its exact dimensions) displays fully without cropping — just
 * drop the real photo in at the same path.
 */
export default function CoolerImage({
  className = "",
  sizes = "(max-width: 1024px) 90vw, 420px",
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[2/3] w-full ${className}`}>
      <Image
        src="/images/ai-cooler.jpg"
        alt="AI grab-and-go cooler with a glass door, stocked with snacks and cold beverages and a tap-to-pay reader."
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </div>
  );
}
