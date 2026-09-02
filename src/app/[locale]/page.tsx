import Link from "next/link";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { comingSoonPlatforms, featuredPlatforms, operatingPlatforms } from "@/content/platforms";
import { sectors } from "@/content/sectors";
import { Hero } from "@/components/hero/hero";
import { LiveProof } from "@/components/platforms/live-proof";
import { Reveal, KineticWords } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlatformCard } from "@/components/platforms/platform-card";
import { GhostButtonLink, GoldButtonLink, TextLink } from "@/components/ui/buttons";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  // Homepage display rule: feature 6–8 priority platforms only.
  const homeFeatured = [
    ...featuredPlatforms,
    ...operatingPlatforms.filter((p) => !p.featured),
  ].slice(0, 6);
  const homeComingSoon = [...comingSoonPlatforms]
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.displayOrder - b.displayOrder)
    .slice(0, 6);

  return (
    <>
      <Hero locale={locale} dict={dict} />

      {/* Live proof — evidence before claims */}
      <LiveProof locale={locale} dict={dict} />

      {/* Brand manifesto */}
      <section className="surface-midnight py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading heading={dict.manifesto.heading} intro={dict.manifesto.body} />
            <p className="mt-6 max-w-3xl text-base font-medium text-gold">{dict.manifesto.support}</p>
          </Reveal>
          <div className="mt-14">
            <KineticWords words={[...dict.manifesto.words]} />
          </div>
        </div>
      </section>

      {/* Live ecosystem */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading label={dict.live.label} heading={dict.live.heading} intro={dict.live.intro} />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {homeFeatured.map((p, i) => (
              <li key={p.id}>
                <Reveal delay={Math.min(i * 0.08, 0.4)} className="h-full">
                  <PlatformCard platform={p} locale={locale} dict={dict} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <GoldButtonLink href={localePath(locale, "/platforms")}>{dict.live.viewPortfolio}</GoldButtonLink>
          </div>
        </div>
      </section>

      {/* Ecosystem — sector rail */}
      <section className="surface-midnight py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading heading={dict.ecosystem.heading} intro={dict.ecosystem.body} />
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-12 flex snap-x gap-3 overflow-x-auto pb-4">
              {sectors.map((s) => (
                <li key={s.id} className="snap-start">
                  <Link
                    href={localePath(locale, `/platforms?sector=${s.id}`)}
                    className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-[color:var(--rule)] bg-[color:var(--card-bg)] px-5 py-2.5 text-sm t-fg transition-colors hover:border-gold/60 hover:text-gold-bright"
                  >
                    {s.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm italic t-soft">{dict.ecosystem.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading label={dict.comingSoon.label} heading={dict.comingSoon.heading} intro={dict.comingSoon.intro} />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {homeComingSoon.map((p, i) => (
              <li key={p.id}>
                <Reveal delay={Math.min(i * 0.08, 0.4)} className="h-full">
                  <PlatformCard platform={p} locale={locale} dict={dict} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <TextLink href={localePath(locale, "/platforms?status=coming-soon")}>{dict.footer.comingSoon}</TextLink>
          </div>
        </div>
      </section>

      {/* Venture-building process */}
      <section className="surface-midnight py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading heading={dict.process.heading} />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {dict.process.steps.map((step, i) => (
              <li key={step.num}>
                <Reveal delay={Math.min(i * 0.1, 0.5)} className="h-full">
                  <div className="card-glass h-full rounded-2xl p-6">
                    <p className="font-mono-label text-xs text-gold">{step.num}</p>
                    <h3 className="font-display mt-3 text-lg font-semibold t-fg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed t-soft">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-base font-medium t-fg">{dict.process.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* Two doors — route the customer and the investor to different places */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.twoDoors.label}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="card-glass flex h-full flex-col rounded-2xl p-8">
                <h3 className="font-display t-fg text-2xl font-semibold">{dict.twoDoors.customerTitle}</h3>
                <p className="t-soft mt-3 flex-1 text-base leading-relaxed">{dict.twoDoors.customerBody}</p>
                <div className="mt-6">
                  <GoldButtonLink href={localePath(locale, "/platforms?status=live")}>{dict.twoDoors.customerCta}</GoldButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <div className="card-glass flex h-full flex-col rounded-2xl p-8">
                <h3 className="font-display t-fg text-2xl font-semibold">{dict.twoDoors.investorTitle}</h3>
                <p className="t-soft mt-3 flex-1 text-base leading-relaxed">{dict.twoDoors.investorBody}</p>
                <div className="mt-6">
                  <GhostButtonLink href={localePath(locale, "/about")}>{dict.twoDoors.investorCta}</GhostButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder introduction */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="card-glass rounded-3xl p-8 sm:p-12">
              <SectionHeading heading={dict.founderTeaser.heading} intro={dict.founderTeaser.body} />
              <div className="mt-8">
                <GhostButtonLink href={localePath(locale, "/founder")}>{dict.founderTeaser.cta}</GhostButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final conversion */}
      <section className="surface-midnight py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading align="center" heading={dict.partnership.homeHeading} intro={dict.partnership.homeBody} />
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.startConversation}</GoldButtonLink>
              <GhostButtonLink href={localePath(locale, "/contact")}>{dict.common.submitOpportunity}</GhostButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
