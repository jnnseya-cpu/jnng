import { Reveal } from "@/components/motion/reveal";

export function LegalPage({
  title,
  body,
  reviewNote,
}: {
  title: string;
  body: string[];
  reviewNote: string;
}) {
  return (
    <section className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">{title}</h1>
          <p className="card-glass mt-6 rounded-xl border-soon/40 p-4 text-xs italic text-soon">{reviewNote}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/85">
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
