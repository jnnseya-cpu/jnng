import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Sora, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { metaDescription } from "@/lib/seo";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tracking } from "@/components/analytics/tracking";
import type { Locale } from "@/types/content";
import splashScreens from "@/lib/splash-screens.json";
import "../globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.homeTitle, template: `%s | ${site.name}` },
    description: metaDescription(dict.meta.homeDescription),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", fr: "/fr", "x-default": "/en" },
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.homeTitle,
      description: metaDescription(dict.meta.homeDescription),
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: metaDescription(dict.meta.homeDescription),
    },
    robots: { index: true, follow: true },
    // Do not set metadata.icons here — it would override the file-convention
    // icons (src/app/icon.svg + apple-icon.png) and drop the favicon link.
    // iOS ignores the web manifest for splash screens — it needs explicit
    // apple-touch-startup-image links per device, generated together with the
    // images by scripts/generate-pwa-assets.mjs.
    appleWebApp: {
      capable: true,
      title: site.name,
      statusBarStyle: "black-translucent",
      startupImage: splashScreens,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        founder: {
          "@type": "Person",
          name: site.founder.shortName,
          jobTitle: "Founder and Group Chief Executive",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.street}, ${site.address.district}`,
          addressLocality: site.address.city,
          addressCountry: "CD",
        },
        contactPoint: [
          { "@type": "ContactPoint", telephone: "+44 7493 216101", contactType: "customer service", areaServed: "GB" },
          { "@type": "ContactPoint", telephone: "+243 818 112309", contactType: "customer service", areaServed: "CD" },
        ],
        sameAs: site.socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: [locale === "fr" ? "fr" : "en"],
      },
    ],
  };

  return (
    <html lang={locale} className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          {dict.nav.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} dict={dict} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Cookieless, consent-free visitor analytics (activates once enabled
            in the Vercel dashboard). The script endpoint only exists on Vercel,
            so render it there only — local/self-hosted runs stay clean. */}
        {process.env.VERCEL ? <Analytics /> : null}
        {/* Meta Pixel + Google tag: consent-gated, active only when
            NEXT_PUBLIC_META_PIXEL_ID / NEXT_PUBLIC_GA_ID are configured. */}
        <Tracking locale={locale} dict={dict} />
      </body>
    </html>
  );
}
