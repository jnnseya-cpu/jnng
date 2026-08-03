import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { platforms } from "@/content/platforms";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/platforms",
    "/sectors",
    "/founder",
    "/impact",
    "/news",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/accessibility",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${site.url}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/platforms" ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
        },
      });
    }
    for (const platform of platforms) {
      entries.push({
        url: `${site.url}/${locale}${platform.internalPath}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${platform.internalPath}`])),
        },
      });
    }
    for (const article of articles) {
      entries.push({
        url: `${site.url}/${locale}/news/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}/news/${article.slug}`])),
        },
      });
    }
  }

  return entries;
}
