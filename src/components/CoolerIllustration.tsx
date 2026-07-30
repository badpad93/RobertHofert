/**
 * In-house illustration of a modern AI grab-and-go cooler. This is an original
 * brand illustration — it does not reproduce any manufacturer's product or logo.
 * Used as the hero/product visual until a real product photo is supplied.
 */
export default function CoolerIllustration({
  className = "",
  title = "Illustration of a modern AI grab-and-go cooler stocked with snacks and beverages",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 460"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cool-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b2b30" />
          <stop offset="1" stopColor="#3a3a42" />
        </linearGradient>
      </defs>

      {/* floor shadow */}
      <ellipse cx="180" cy="440" rx="150" ry="16" fill="#4C0F0E" opacity="0.12" />

      {/* body */}
      <rect x="40" y="10" width="280" height="430" rx="20" fill="#18181B" />
      <rect x="40" y="10" width="280" height="430" rx="20" fill="none" stroke="#E39B13" strokeWidth="2" opacity="0.5" />

      {/* glass door */}
      <rect x="58" y="28" width="244" height="330" rx="12" fill="#310808" />
      <rect x="70" y="40" width="220" height="306" rx="8" fill="url(#cool-glass)" />

      {/* shelves + products */}
      {[52, 150, 248].map((y) => (
        <rect key={y} x="82" y={y} width="196" height="86" rx="4" fill="#43434c" />
      ))}
      {[
        { y: 64, colors: ["#E39B13", "#FFB515", "#8a1f1c", "#E39B13", "#FAF9F7"] },
        { y: 162, colors: ["#8a1f1c", "#FFB515", "#FAF9F7", "#E39B13", "#8a1f1c"] },
        { y: 260, colors: ["#FAF9F7", "#E39B13", "#8a1f1c", "#FFB515", "#E39B13"] },
      ].map((row) =>
        row.colors.map((c, i) => (
          <rect
            key={`${row.y}-${i}`}
            x={92 + i * 38}
            y={row.y}
            width="28"
            height="60"
            rx="4"
            fill={c}
          />
        )),
      )}

      {/* smart reader / checkout panel */}
      <rect x="58" y="370" width="244" height="56" rx="10" fill="#4C0F0E" />
      <circle cx="96" cy="398" r="15" fill="#E39B13" />
      <path
        d="M90 398 l4 4 l9 -9"
        stroke="#4C0F0E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="128" y="388" width="150" height="9" rx="4" fill="#E39B13" opacity="0.85" />
      <rect x="128" y="404" width="96" height="7" rx="3" fill="#E39B13" opacity="0.5" />
    </svg>
  );
}
