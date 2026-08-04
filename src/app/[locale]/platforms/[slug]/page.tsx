import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getDictionary, isLocale, localePath, locales } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { getPlatform, platforms, relatedPlatforms } from "@/content/platforms";
import { getSector } from "@/content/sectors";
import { Monogram } from "@/components/ui/monogram";
import { StatusBadge } from "@/components/ui/status-badge";
import { PlatformCard } from "@/components/platforms/platform-card";
import { GrowthEngine } from "@/components/platforms/growth-engine";
import { Reveal } from "@/components/motion/reveal";
import { GoldButtonLink, GhostButtonLink } from "@/components/ui/buttons";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => platforms.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const platform = getPlatform(slug);
  if (!platform) return {};
  return {
    title: platform.name,
    description: platform.shortDescription[locale],
    alternates: {
      canonical: `/${locale}${platform.internalPath}`,
      languages: { en: `/en${platform.internalPath}`, fr: `/fr${platform.internalPath}` },
    },
  };
}

export default async function PlatformDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const sector = getSector(platform.sector);
  const related = relatedPlatforms(platform);
  const external = platform.externalLinkEnabled && platform.website;
  const isComingSoon = platform.status === "coming-soon";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: dict.platformsPage.title, item: `${site.url}/${locale}/platforms` },
      { "@type": "ListItem", position: 3, name: platform.name, item: `${site.url}/${locale}${platform.internalPath}` },
    ],
  };

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href={localePath(locale, "/platforms")} className="hover:text-gold-bright">
                ← {dict.common.backToPlatforms}
              </Link>
            </nav>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <Monogram
                initials={platform.monogram}
                colour={platform.brandColour}
                size={88}
                label={platform.logoApproved ? platform.name : `${platform.name} — ${dict.common.logoAwaitingApproval}`}
              />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={platform.status} dict={dict} />
                  <span className="font-mono-label text-[0.62rem] text-muted">{platform.category[locale]}</span>
                </div>
                <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                  {platform.name}
                </h1>
                <p className="mt-3 text-lg font-medium" style={{ color: platform.brandColour }}>
                  {platform.tagline[locale]}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  {platform.shortDescription[locale]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {external ? (
                    <a
                      href={platform.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-bright"
                    >
                      {platform.ctaLabel?.[locale] ?? dict.platformDetail.visit.replace("{name}", platform.name)}
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                      <span className="sr-only"> ({dict.common.externalLinkNote})</span>
                    </a>
                  ) : null}
                  {isComingSoon ? (
                    <>
                      <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.registerInterest}</GoldButtonLink>
                      <GhostButtonLink href={localePath(locale, "/contact")}>{dict.common.partnerCta}</GhostButtonLink>
                      <GhostButtonLink href={localePath(locale, "/contact")}>{dict.common.discussInvestment}</GhostButtonLink>
                    </>
                  ) : (
                    <GhostButtonLink href={localePath(locale, "/contact")}>{dict.platformDetail.partnershipCta}</GhostButtonLink>
                  )}
                </div>
                {!external && platform.website === undefined ? (
                  <p className="mt-4 text-xs italic text-muted/80">{dict.common.internalProfile}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <Reveal>
              <div>
                <h2 className="font-mono-label text-xs text-gold">{dict.platformDetail.aboutPlatform}</h2>
                <p className="mt-5 text-base leading-relaxed text-paper/85 sm:text-lg">
                  {platform.fullDescription[locale]}
                </p>
                <p className="card-glass mt-8 rounded-xl border-l-2 border-l-gold p-5 text-sm italic leading-relaxed text-muted">
                  {dict.platformDetail.strategicNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="card-glass space-y-6 rounded-2xl p-7">
                <div>
                  <dt className="font-mono-label text-[0.62rem] text-gold">{dict.platformDetail.sector}</dt>
                  <dd className="mt-1.5 text-sm text-paper">{sector?.name[locale] ?? platform.category[locale]}</dd>
                </div>
                <div>
                  <dt className="font-mono-label text-[0.62rem] text-gold">{dict.platformDetail.market}</dt>
                  <dd className="mt-1.5 text-sm text-paper">
                    {platform.regions.map((r) => dict.platformsPage.regions[r]).join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-label text-[0.62rem] text-gold">{dict.platformDetail.audiences}</dt>
                  <dd className="mt-1.5">
                    <ul className="flex flex-wrap gap-2">
                      {platform.audiences.map((a) => (
                        <li key={a.en} className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/85">
                          {a[locale]}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-label text-[0.62rem] text-gold">{dict.platformDetail.capabilities}</dt>
                  <dd className="mt-1.5">
                    <ul className="space-y-2">
                      {platform.capabilities.map((c) => (
                        <li key={c.en} className="flex items-start gap-2 text-sm text-paper/85">
                          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {c[locale]}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                {external ? (
                  <div>
                    <dt className="font-mono-label text-[0.62rem] text-gold">{dict.common.website}</dt>
                    <dd className="mt-1.5">
                      <a
                        href={platform.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gold-bright underline-offset-4 hover:underline"
                      >
                        {platform.website?.replace(/^https?:\/\//, "")}
                        <span className="sr-only"> ({dict.common.externalLinkNote})</span>
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <GrowthEngine platform={platform} locale={locale} dict={dict} />
          </Reveal>

          <div className="mt-20">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-paper">{dict.platformDetail.related}</h2>
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((p, i) => (
                <li key={p.id}>
                  <Reveal delay={Math.min(i * 0.08, 0.3)} className="h-full">
                    <PlatformCard platform={p} locale={locale} dict={dict} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
