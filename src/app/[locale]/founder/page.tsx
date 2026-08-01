import type { Metadata } from "next";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { GoldButtonLink, GhostButtonLink } from "@/components/ui/buttons";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: `${dict.founder.name} — ${dict.founder.title}`, description: dict.founder.bio[0] };
}

export default async function FounderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.shortName,
    honorificSuffix: "MCIOB",
    jobTitle: dict.founder.role,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/${locale}/founder`,
  };

  return (
    <>
      <section className="surface-midnight px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.founder.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {dict.founder.pageTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <Reveal>
              <div>
                {/* Editorial portrait slot — dark architectural backdrop with
                    gold rim lighting; replace with the approved photograph. */}
                <div className="portrait-reveal relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-gold/25 bg-midnight">
                  <div aria-hidden className="hero-canvas absolute inset-0 opacity-80" />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-obsidian to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-2xl font-semibold text-paper">{dict.founder.name}</p>
                    <p className="mt-1 text-sm text-gold-bright">{dict.founder.role}</p>
                    <p className="font-mono-label mt-3 text-[0.6rem] leading-relaxed text-muted">
                      {dict.founder.supportingTitle}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs italic text-muted/70">{dict.founder.portraitNote}</p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="space-y-5 text-base leading-relaxed text-paper/85">
                  {dict.founder.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <blockquote className="card-glass mt-10 rounded-2xl border-l-2 border-l-gold p-8">
                  <p className="font-display text-xl font-medium italic leading-relaxed text-gold-bright">
                    “{dict.founder.quote}”
                  </p>
                  <footer className="mt-4 text-sm text-muted">— {dict.founder.name}</footer>
                </blockquote>
              </Reveal>

              <Reveal delay={0.15}>
                <h2 className="font-mono-label mt-12 text-xs text-gold">{dict.founder.credentialsLabel}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {dict.founder.credentials.map((c) => (
                    <li key={c} className="card-glass rounded-xl px-4 py-3.5 text-sm text-paper/90">
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                  <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.discussPartnership}</GoldButtonLink>
                  <GhostButtonLink href={localePath(locale, "/platforms")}>{dict.common.explorePlatforms}</GhostButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </>
  );
}
