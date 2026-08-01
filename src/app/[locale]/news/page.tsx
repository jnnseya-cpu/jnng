import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { news } from "@/content/news";
import { getPlatform } from "@/content/platforms";
import { Reveal } from "@/components/motion/reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.news.title, description: dict.news.intro };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.news.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {dict.news.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{dict.news.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="space-y-6">
            {sorted.map((item, i) => {
              const platform = item.platformSlug ? getPlatform(item.platformSlug) : undefined;
              return (
                <li key={item.id}>
                  <Reveal delay={Math.min(i * 0.08, 0.3)}>
                    <article className="card-glass rounded-2xl p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <time dateTime={item.date} className="font-mono-label text-[0.62rem] text-muted">
                          {new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
                            dateStyle: "long",
                          }).format(new Date(item.date))}
                        </time>
                        <span className="rounded-full border border-gold/30 px-2.5 py-0.5 font-mono-label text-[0.6rem] text-gold">
                          {item.category[locale]}
                        </span>
                      </div>
                      <h2 className="font-display mt-3 text-xl font-semibold leading-snug text-paper">
                        {item.title[locale]}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.excerpt[locale]}</p>
                      {platform ? (
                        <p className="mt-4">
                          <Link
                            href={localePath(locale, platform.internalPath)}
                            className="text-sm font-medium text-gold hover:text-gold-bright"
                          >
                            {platform.name} →
                          </Link>
                        </p>
                      ) : null}
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
          <p className="mt-10 text-xs italic text-muted/70">{dict.news.editorialNote}</p>
        </div>
      </section>
    </>
  );
}
