import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localePath, locales } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { articles, getArticle } from "@/content/articles";
import { getPlatform } from "@/content/platforms";
import { linkifyParagraph } from "@/lib/linkify";
import { PlatformCard } from "@/components/platforms/platform-card";
import { Reveal } from "@/components/motion/reveal";
import { GoldButtonLink } from "@/components/ui/buttons";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title[locale],
    description: article.excerpt[locale],
    keywords: article.keywords,
    alternates: {
      canonical: `/${locale}/news/${article.slug}`,
      languages: { en: `/en/news/${article.slug}`, fr: `/fr/news/${article.slug}` },
    },
    openGraph: {
      type: "article",
      title: article.title[locale],
      description: article.excerpt[locale],
      publishedTime: article.date,
      url: `/${locale}/news/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.relatedPlatformSlugs
    .map((s) => getPlatform(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const author = article.author === "founder" ? dict.news.byFounder : dict.news.byGroup;

  // One shared set so each platform is linked exactly once across the body.
  const linked = new Set<string>();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    datePublished: article.date,
    inLanguage: locale,
    author:
      article.author === "founder"
        ? { "@type": "Person", name: site.founder.shortName, jobTitle: "Founder and Group Chief Executive" }
        : { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/${locale}/news/${article.slug}`,
    keywords: article.keywords.join(", "),
  };

  return (
    <>
      <section className="surface-midnight px-4 pb-14 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href={localePath(locale, "/news")} className="hover:text-gold-bright">
                ← {dict.news.backToNews}
              </Link>
            </nav>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/30 px-3 py-1 font-mono-label text-[0.62rem] text-gold">
                {article.category[locale]}
              </span>
              <time dateTime={article.date} className="font-mono-label text-[0.62rem] text-muted">
                {new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", { dateStyle: "long" }).format(
                  new Date(article.date),
                )}
              </time>
            </div>
            <h1 className="font-display mt-5 text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
              {article.title[locale]}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gold-bright/90">{article.excerpt[locale]}</p>
            <p className="mt-4 text-sm text-muted">{author}</p>
          </Reveal>
        </div>
      </section>

      <article className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-paper/85 sm:text-lg">
              {article.body[locale].map((paragraph, i) => (
                <p key={i}>{linkifyParagraph(paragraph, locale, linked)}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="gold-line mt-14" aria-hidden />
            <div className="mt-10">
              <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.startConversation}</GoldButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          {related.length > 0 ? (
            <Reveal>
              <h2 className="font-mono-label text-xs text-gold">{dict.news.platformsInStory}</h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {related.map((p) => (
                  <li key={p.id}>
                    <PlatformCard platform={p} locale={locale} dict={dict} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={0.1}>
            <h2 className="font-mono-label mt-16 text-xs text-gold">{dict.news.furtherReading}</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-3">
              {otherArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={localePath(locale, `/news/${a.slug}`)}
                    className="card-glass card-glass-hover block h-full rounded-2xl p-6"
                  >
                    <span className="font-mono-label text-[0.6rem] text-gold">{a.category[locale]}</span>
                    <span className="font-display mt-2 block text-lg font-semibold leading-snug text-paper">
                      {a.title[locale]}
                    </span>
                    <span className="mt-3 block text-sm text-muted line-clamp-2">{a.excerpt[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
