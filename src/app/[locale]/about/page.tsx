import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldButtonLink } from "@/components/ui/buttons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.about.title, description: metaDescription(dict.about.paragraphs[0]) };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="surface-midnight px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.about.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {dict.about.heading}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-6 text-base leading-relaxed text-paper/85 sm:text-lg">
              {dict.about.paragraphs.map((p, i) => (
                <p key={i} className={i === dict.about.paragraphs.length - 1 ? "font-medium text-gold-bright" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-glass h-full rounded-2xl p-8">
                <h2 className="font-mono-label text-xs text-gold">{dict.about.missionLabel}</h2>
                <p className="font-display mt-4 text-xl font-medium leading-relaxed text-paper">{dict.about.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-glass h-full rounded-2xl p-8">
                <h2 className="font-mono-label text-xs text-gold">{dict.about.visionLabel}</h2>
                <p className="font-display mt-4 text-xl font-medium leading-relaxed text-paper">{dict.about.vision}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionHeading heading={dict.about.valuesLabel} />
            </Reveal>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dict.about.values.map((v, i) => (
                <li key={v.title}>
                  <Reveal delay={Math.min(i * 0.08, 0.4)} className="h-full">
                    <div className="card-glass h-full rounded-2xl p-6">
                      <h3 className="font-display text-lg font-semibold text-gold-bright">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <GoldButtonLink href={localePath(locale, "/platforms")}>{dict.common.explorePlatforms}</GoldButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
