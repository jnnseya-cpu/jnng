import type { Metadata } from "next";
import Link from "next/link";
import { metaDescription } from "@/lib/seo";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { sectors } from "@/content/sectors";
import { platforms } from "@/content/platforms";
import { Reveal } from "@/components/motion/reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.sectorsPage.title, description: metaDescription(dict.sectorsPage.intro) };
}

export default async function SectorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.sectorsPage.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {dict.sectorsPage.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{dict.sectorsPage.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 md:grid-cols-2">
            {sectors.map((sector, i) => {
              const inSector = platforms.filter(
                (p) => p.sector === sector.id || (p.secondarySectors ?? []).includes(sector.id),
              );
              return (
                <li key={sector.id}>
                  <Reveal delay={Math.min((i % 4) * 0.07, 0.3)} className="h-full">
                    <article className="card-glass card-glass-hover flex h-full flex-col rounded-2xl p-8">
                      <h2 className="font-display text-2xl font-semibold text-paper">{sector.name[locale]}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{sector.description[locale]}</p>
                      {inSector.length > 0 ? (
                        <div className="mt-auto pt-6">
                          <p className="font-mono-label text-[0.62rem] text-gold">{dict.sectorsPage.platformsIn}</p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {inSector.map((p) => (
                              <li key={p.id}>
                                <Link
                                  href={localePath(locale, p.internalPath)}
                                  className="inline-flex min-h-8 items-center rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/85 transition-colors hover:border-gold/60 hover:text-gold-bright"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
