/**
 * SEO score register — audits every page of the built site and writes
 * SEO-SCORES.md (derived, like STATUS.md: regenerate, never edit).
 * Each page is scored /100 against 12 concrete on-page checks (title, meta
 * description, single H1, canonical, hreflang, Open Graph, Twitter card,
 * JSON-LD, lang attribute, internal links, image alts).
 * Run with the production server up:  npm run build && npm start -- -p 3100
 * then:  npm run seo   (BASE overrides the target, default localhost:3100)
 */
import { readFileSync, writeFileSync } from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:3100";

const platformsSrc = readFileSync(new URL("../src/content/platforms.ts", import.meta.url), "utf8");
const articlesSrc = readFileSync(new URL("../src/content/articles.ts", import.meta.url), "utf8");
const platformSlugs = [...platformsSrc.matchAll(/\n    slug: "(.*?)",/g)].map((m) => m[1]);
const articleSlugs = [...articlesSrc.matchAll(/\n    slug: "(.*?)",/g)].map((m) => m[1]);

const staticPaths = ["", "/about", "/platforms", "/sectors", "/founder", "/impact", "/news", "/contact", "/privacy", "/cookies", "/terms", "/accessibility"];
const routes = [];
for (const l of ["en", "fr"]) {
  for (const p of staticPaths) routes.push({ path: `/${l}${p}`, locale: l, kind: "static" });
  for (const s of platformSlugs) routes.push({ path: `/${l}/platforms/${s}`, locale: l, kind: "platform" });
  for (const s of articleSlugs) routes.push({ path: `/${l}/news/${s}`, locale: l, kind: "article" });
}

const CHECKS = [
  { id: "title", label: "Title tag 10–70 chars", weight: 10,
    test: (h) => { const t = h.match(/<title>(.*?)<\/title>/s)?.[1] ?? ""; return t.length >= 10 && t.length <= 70; } },
  { id: "description", label: "Meta description 50–165 chars", weight: 10,
    test: (h) => { const d = h.match(/<meta name="description" content="(.*?)"/)?.[1] ?? ""; return d.length >= 50 && d.length <= 165; } },
  { id: "h1", label: "Exactly one H1", weight: 10,
    test: (h) => (h.match(/<h1[\s>]/g) ?? []).length === 1 },
  { id: "canonical", label: "Canonical link", weight: 10,
    test: (h) => /<link rel="canonical"/.test(h) },
  // React renders the attribute as hrefLang — match case-insensitively.
  { id: "hreflang", label: "hreflang en + fr + x-default", weight: 10,
    test: (h) => ["en", "fr", "x-default"].every((l) => new RegExp(`hreflang="${l}"`, "i").test(h)) },
  { id: "og", label: "Open Graph title + description", weight: 10,
    test: (h) => /<meta property="og:title"/.test(h) && /<meta property="og:description"/.test(h) },
  { id: "ogimage", label: "Open Graph image", weight: 5,
    test: (h) => /<meta property="og:image"/.test(h) },
  { id: "twitter", label: "Twitter card", weight: 5,
    test: (h) => /<meta name="twitter:card"/.test(h) },
  { id: "jsonld", label: "JSON-LD structured data", weight: 10,
    test: (h) => /application\/ld\+json/.test(h) },
  { id: "lang", label: "html lang matches locale", weight: 5,
    test: (h, r) => new RegExp(`<html[^>]*lang="${r.locale}"`).test(h) },
  { id: "links", label: "≥ 5 internal links", weight: 10,
    test: (h) => (h.match(/href="\/(en|fr)(\/|")/g) ?? []).length >= 5 },
  { id: "alts", label: "All images have alt text", weight: 5,
    test: (h) => (h.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length === 0 },
];

const wordCount = (h) => {
  const body = h.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ");
  return body.split(/\s+/).filter(Boolean).length;
};

const results = [];
for (const r of routes) {
  const res = await fetch(BASE + r.path);
  if (!res.ok) { results.push({ ...r, score: 0, failed: [`HTTP ${res.status}`], words: 0 }); continue; }
  const html = await res.text();
  let score = 0;
  const failed = [];
  for (const c of CHECKS) (c.test(html, r) ? (score += c.weight) : failed.push(c.label));
  results.push({ ...r, score, failed, words: wordCount(html) });
}

const avg = (xs) => (xs.reduce((a, b) => a + b.score, 0) / xs.length).toFixed(1);
const byKind = (k) => results.filter((r) => r.kind === k);
const below = results.filter((r) => r.score < 100);
const min = Math.min(...results.map((r) => r.score));

const md = `# SEO Score Register — generated from the built site
> Regenerate with \`npm run seo\` (server on :3100). Do not edit by hand —
> this file is derived from the HTML the site actually serves.

Audited: **${results.length} pages** against 12 on-page checks (title, description, H1, canonical, hreflang, Open Graph, Twitter card, JSON-LD, lang, internal links, image alts).

## Scores
| Group | Pages | Average /100 |
|---|---|---|
| Static pages | ${byKind("static").length} | ${avg(byKind("static"))} |
| Platform profiles | ${byKind("platform").length} | ${avg(byKind("platform"))} |
| Articles | ${byKind("article").length} | ${avg(byKind("article"))} |
| **All** | **${results.length}** | **${avg(results)}** |

Minimum page score: **${min}/100** · Pages below 100: **${below.length}**

${below.length === 0 ? "Every page passes every check." : `## Pages below 100
| Page | Score | Failing checks |
|---|---|---|
${below.map((r) => `| \`${r.path}\` | ${r.score} | ${r.failed.join("; ")} |`).join("\n")}`}

## Article word counts (thin-content watch, < 300 words flagged)
| Article (EN) | Words |
|---|---|
${byKind("article").filter((r) => r.locale === "en").map((r) => `| \`${r.path}\` | ${r.words}${r.words < 300 ? " ⚠️" : ""} |`).join("\n")}
`;

writeFileSync(new URL("../SEO-SCORES.md", import.meta.url), md);
console.log(`SEO-SCORES.md written: ${results.length} pages, average ${avg(results)}/100, min ${min}, below-100: ${below.length}`);
