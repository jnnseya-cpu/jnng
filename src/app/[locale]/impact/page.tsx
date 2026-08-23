import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { verifiedMetrics } from "@/content/impact";
import { Reveal } from "@/components/motion/reveal";
import { GoldButtonLink } from "@/components/ui/buttons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.impact.title, description: metaDescription(dict.impact.intro) };
}

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.impact.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {dict.impact.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{dict.impact.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Only independently verified metrics are ever rendered. */}
          {verifiedMetrics.length > 0 ? (
            <ul className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {verifiedMetrics.map((m) => (
                <li key={m.label.en} className="card-glass rounded-2xl p-8">
                  <p className="font-display text-4xl font-semibold text-gold-bright">{m.value}</p>
                  <p className="mt-2 text-sm text-paper">{m.label[locale]}</p>
                  {m.description ? <p className="mt-2 text-xs text-muted">{m.description[locale]}</p> : null}
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.impact.statements.map((statement, i) => (
              <li key={statement}>
                <Reveal delay={Math.min(i * 0.08, 0.4)} className="h-full">
                  <div className="card-glass h-full rounded-2xl border-l-2 border-l-gold p-7">
                    <p className="font-display text-lg font-medium leading-relaxed text-paper">{statement}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <p className="mt-10 text-sm italic text-muted">{dict.impact.futureNote}</p>
            <div className="mt-10">
              <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.startConversation}</GoldButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
