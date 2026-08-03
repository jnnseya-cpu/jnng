import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS feed of Insights articles — enables syndication and discovery. */
export function GET() {
  const items = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (a) => `    <item>
      <title>${escape(a.title.en)}</title>
      <link>${site.url}/en/news/${a.slug}</link>
      <guid isPermaLink="true">${site.url}/en/news/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${escape(a.excerpt.en)}</description>
      <category>${escape(a.category.en)}</category>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Groupe Nseya — Insights</title>
    <link>${site.url}</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Strategy, markets and venture-building insights from Groupe Nseya — technology, investment and project development across Africa and global markets.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
