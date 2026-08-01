/**
 * Temporary premium monogram tile, rendered inline as SVG so every platform
 * has a consistent visual frame until its approved logo is supplied.
 * Mirrors the static placeholder assets in /public/logos/placeholders.
 */
export function Monogram({
  initials,
  colour,
  size = 56,
  label,
}: {
  initials: string;
  colour: string;
  size?: number;
  label?: string;
}) {
  const id = `mg-${initials.replace(/[^a-z0-9]/gi, "")}-${colour.replace("#", "")}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={label ?? `${initials} monogram`}
      className="shrink-0 rounded-xl"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1826" />
          <stop offset="100%" stopColor="#050709" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill={`url(#${id})`} />
      <rect x="0.5" y="0.5" width="63" height="63" rx="11.5" fill="none" stroke={colour} strokeOpacity="0.55" />
      <path d="M8 52 L56 52" stroke={colour} strokeOpacity="0.35" strokeWidth="1" />
      <text
        x="32"
        y="36"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-display)"
        fontWeight="600"
        fontSize={initials.length > 2 ? 17 : 22}
        letterSpacing="1"
        fill={colour}
      >
        {initials}
      </text>
    </svg>
  );
}
