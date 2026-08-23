import type { Metadata } from "next";
import { Suspense } from "react";
import { metaDescription } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { platforms } from "@/content/platforms";
import { PlatformDirectory } from "@/components/platforms/platform-directory";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.platformsPage.title, description: metaDescription(dict.platformsPage.intro) };
}

export default async function PlatformsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dict.platformsPage.title,
    itemListElement: platforms.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.website ?? `${site.url}/${locale}${p.internalPath}`,
    })),
  };

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.platformsPage.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {dict.platformsPage.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{dict.platformsPage.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense>
            <PlatformDirectory platforms={platforms} locale={locale} dict={dict} />
          </Suspense>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    </>
  );
}
