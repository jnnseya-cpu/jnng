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
      <h2 className="font-display t-fg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.9rem]">
        {heading}
      </h2>
      {intro ? <p className="t-soft mt-5 text-base leading-relaxed sm:text-lg">{intro}</p> : null}
    </div>
  );
}
