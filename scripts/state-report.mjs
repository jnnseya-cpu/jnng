/**
 * State register generator — the single source of truth for "what is on this site".
 * Derives everything from the content files (never from memory or docs that can
 * drift) and writes STATUS.md. Run: npm run state
 */
import { readFileSync, writeFileSync } from "node:fs";

const platformsSrc = readFileSync(new URL("../src/content/platforms.ts", import.meta.url), "utf8");
const articlesSrc = readFileSync(new URL("../src/content/articles.ts", import.meta.url), "utf8");

const records = [...platformsSrc.matchAll(/\n  \{\n(.*?)\n  \},/gs)].map((m) => m[1]);
const platforms = records
  .map((r) => ({
    name: r.match(/name: "(.*?)"/)?.[1],
    status: r.match(/status: "(.*?)"/)?.[1],
    website: r.match(/website: "(.*?)"/)?.[1] ?? null,
    slug: r.match(/slug: "(.*?)"/)?.[1],
  }))
  .filter((p) => p.name && p.status);

const articles = [...articlesSrc.matchAll(/\{\s*\n\s*slug: "(.*?)",\s*\n\s*date: "(.*?)",\s*\n\s*category: \{ en: "(.*?)"/g)].map(
  (m) => ({ slug: m[1], date: m[2], category: m[3] }),
);

const byStatus = (s) => platforms.filter((p) => p.status === s);
const line = (p) => `| ${p.name} | ${p.website ? `[${p.website.replace(/^https?:\/\/(www\.)?/, "")}](${p.website})` : "internal profile"} | \`/platforms/${p.slug}\` |`;

const md = `# Site State Register — generated from content files
> Regenerate with \`npm run state\`. Do not edit by hand — this file is derived,
> so it cannot drift from what the site actually serves.

Generated from: \`src/content/platforms.ts\`, \`src/content/articles.ts\`

## Portfolio: ${platforms.length} platforms — ${byStatus("live").length} Live · ${byStatus("launching").length} Launching · ${byStatus("coming-soon").length} Coming Soon

### Live (${byStatus("live").length})
| Platform | Website | Profile |
|---|---|---|
${byStatus("live").map(line).join("\n")}

### Launching (${byStatus("launching").length})
| Platform | Website | Profile |
|---|---|---|
${byStatus("launching").map(line).join("\n")}

### Coming Soon (${byStatus("coming-soon").length})
| Platform | Website | Profile |
|---|---|---|
${byStatus("coming-soon").map(line).join("\n")}

## Insights articles: ${articles.length} (× EN + FR pages)
| Date | Category | Slug |
|---|---|---|
${articles.map((a) => `| ${a.date} | ${a.category} | \`/news/${a.slug}\` |`).join("\n")}

## Standing user actions (not automatable)
- [ ] Google Search Console: verify domain, submit /sitemap.xml, remove stale /products/* and /author/* URLs
- [ ] Enable Web Analytics in the Vercel dashboard
- [ ] Native-speaker review of Lingala/Swahili community summaries
- [ ] Set NEXT_PUBLIC_CONTACT_ENDPOINT (form currently falls back to prefilled email)
- [ ] Set NEXT_PUBLIC_NEWSLETTER_ENDPOINT + Brevo secrets (BREVO_API_KEY, NEWSLETTER_LIST_ID_EN/FR, NEWSLETTER_SENDER_EMAIL) to activate weekly newsletter sending
- [ ] Set NEXT_PUBLIC_META_PIXEL_ID + NEXT_PUBLIC_GA_ID in Vercel to activate Meta Pixel / Google tag (consent-gated banner appears once set)
- [ ] Create free GoatCounter site + set NEXT_PUBLIC_GOATCOUNTER_CODE in Vercel to activate the public article view counter
- [ ] Distribute GN-FIN-01 (revenue-integrity standard) to every platform team; enforce its launch gate + quarterly §8 red-team replays
- [ ] Backlink footers ("A Groupe Nseya venture") on live platform sites
`;

writeFileSync(new URL("../STATUS.md", import.meta.url), md);
console.log(`STATUS.md written: ${platforms.length} platforms (${byStatus("live").length}L/${byStatus("launching").length}La/${byStatus("coming-soon").length}CS), ${articles.length} articles`);
