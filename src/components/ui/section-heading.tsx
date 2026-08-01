export function SectionHeading({
  label,
  heading,
  intro,
  align = "left",
}: {
  label?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {label ? <p className="font-mono-label mb-4 text-xs text-gold">{label}</p> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {intro ? <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </div>
  );
}
