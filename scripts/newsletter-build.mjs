/**
 * Weekly newsletter generator.
 * Builds the feature-selling email (EN + FR HTML and plain text) from the
 * single sources of truth — platforms.ts and articles.ts — so it can never
 * contradict the site. Content per issue:
 *   - platform of the week (rotates by ISO week over live platforms):
 *     tagline, description, capabilities, profile + external links
 *   - 3 latest articles with links
 *   - live portfolio link strip (every live platform hyperlinked)
 * Output: newsletter/issue-<year>-W<week>.<en|fr>.html + .txt
 * Sending is handled by .github/workflows/newsletter.yml (ESP secrets are
 * repository secrets — never frontend env vars).
 * Run: npm run newsletter
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SITE = "https://www.groupejnn.com";
const GOLD = "#C9A55C";
const OBSIDIAN = "#050709";
const MIDNIGHT = "#081421";
const PAPER = "#F7F8FA";
const MUTED = "#A9B1BC";

const platformsSrc = readFileSync(new URL("../src/content/platforms.ts", import.meta.url), "utf8");
const articlesSrc = readFileSync(new URL("../src/content/articles.ts", import.meta.url), "utf8");

const loc = (block, field) => {
  const m = block.match(new RegExp(`${field}: \\{\\s*\\n?\\s*en: "((?:[^"\\\\]|\\\\.)*)",\\s*\\n?\\s*fr: "((?:[^"\\\\]|\\\\.)*)",`, "s")) ??
            block.match(new RegExp(`${field}: \\{ en: "((?:[^"\\\\]|\\\\.)*)", fr: "((?:[^"\\\\]|\\\\.)*)" \\}`));
  return m ? { en: m[1], fr: m[2] } : null;
};

const platforms = [...platformsSrc.matchAll(/\n  \{\n(.*?)\n  \},/gs)]
  .map((m) => m[1])
  .map((r) => ({
    name: r.match(/name: "(.*?)"/)?.[1],
    slug: r.match(/slug: "(.*?)"/)?.[1],
    status: r.match(/status: "(.*?)"/)?.[1],
    website: r.match(/website: "(.*?)"/)?.[1] ?? null,
    tagline: loc(r, "tagline"),
    shortDescription: loc(r, "shortDescription"),
    // Scope pair-extraction to the capabilities array only — the record also
    // contains category/audiences/ctaLabel pairs that must not leak in.
    capabilities: [...(r.match(/capabilities: \[([\s\S]*?)\n    \]/)?.[1] ?? "")
      .matchAll(/\{ en: "((?:[^"\\]|\\.)*)", fr: "((?:[^"\\]|\\.)*)" \}/g)].map((c) => ({ en: c[1], fr: c[2] })),
  }))
  .filter((p) => p.name && p.status);

const live = platforms.filter((p) => p.status === "live");

const articles = [...articlesSrc.matchAll(/\{\s*\n\s*slug: "(.*?)",\s*\n\s*date: "(.*?)",\s*\n\s*category: \{ en: "(.*?)", fr: "(.*?)" \},\s*\n\s*title: \{\s*\n\s*en: "((?:[^"\\]|\\.)*)",\s*\n\s*fr: "((?:[^"\\]|\\.)*)",/g)]
  .map((m) => ({ slug: m[1], date: m[2], title: { en: m[5], fr: m[6] } }))
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

// ISO-8601 week for deterministic rotation + issue naming: shift to the
// Thursday of the current week, then count weeks from that year's Jan 1.
const now = new Date();
const thu = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
thu.setUTCDate(thu.getUTCDate() + 4 - (thu.getUTCDay() || 7));
const week = Math.ceil((((thu - new Date(Date.UTC(thu.getUTCFullYear(), 0, 1))) / 86400000) + 1) / 7);
const isoYear = thu.getUTCFullYear();
const featured = live[week % live.length];

const t = {
  en: {
    subject: `This week inside Groupe Nseya: ${featured.name}`,
    preheader: featured.tagline?.en ?? "",
    hello: "The Weekly Brief",
    featuredLabel: "PLATFORM OF THE WEEK",
    capLabel: "What it gives you",
    visit: `Explore ${featured.name}`,
    profile: "Read the full profile",
    readingLabel: "FROM THE INSIGHTS DESK",
    portfolioLabel: "THE LIVE ECOSYSTEM",
    portfolioIntro: "Every platform, one standard of execution:",
    cta: "Partner with Groupe Nseya",
    footer: "You receive this because you subscribed at groupejnn.com.",
    unsubscribe: "Unsubscribe",
    locale: "en",
  },
  fr: {
    subject: `Cette semaine chez Groupe Nseya : ${featured.name}`,
    preheader: featured.tagline?.fr ?? "",
    hello: "Le Brief Hebdo",
    featuredLabel: "PLATEFORME DE LA SEMAINE",
    capLabel: "Ce qu'elle vous apporte",
    visit: `Explorer ${featured.name}`,
    profile: "Lire le profil complet",
    readingLabel: "DU CÔTÉ DES ANALYSES",
    portfolioLabel: "L'ÉCOSYSTÈME EN LIGNE",
    portfolioIntro: "Chaque plateforme, un seul standard d'exécution :",
    cta: "Devenir partenaire du Groupe Nseya",
    footer: "Vous recevez cet email car vous êtes abonné sur groupejnn.com.",
    unsubscribe: "Se désabonner",
    locale: "fr",
  },
};

const a = (href, text) => `<a href="${href}" style="color:${GOLD};text-decoration:underline;">${text}</a>`;

function buildHtml(lang) {
  const L = t[lang];
  const caps = (featured.capabilities ?? []).slice(0, 4)
    .map((c) => `<li style="margin:6px 0;color:${PAPER};font-size:14px;line-height:1.5;">${c[lang]}</li>`).join("");
  const arts = articles
    .map((ar) => `<p style="margin:10px 0;font-size:15px;line-height:1.5;">→ ${a(`${SITE}/${lang}/news/${ar.slug}`, ar.title[lang])}</p>`).join("");
  const strip = live
    .map((p) => a(p.website ?? `${SITE}/${lang}/platforms/${p.slug}`, p.name)).join(" · ");

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${L.subject}</title></head>
<body style="margin:0;padding:0;background:${OBSIDIAN};font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;max-height:0;overflow:hidden;">${L.preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${OBSIDIAN};"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding-bottom:24px;">
    <span style="font-size:14px;letter-spacing:3px;color:${PAPER};font-weight:bold;">GROUPE <span style="color:${GOLD};">NSEYA</span></span>
    <span style="float:right;font-size:11px;letter-spacing:2px;color:${MUTED};">${L.hello} · W${week}</span>
  </td></tr>
  <tr><td style="height:1px;background:${GOLD};opacity:.5;"></td></tr>

  <tr><td style="padding:28px 0 8px;"><span style="font-size:11px;letter-spacing:2px;color:${GOLD};">${L.featuredLabel}</span></td></tr>
  <tr><td style="background:${MIDNIGHT};border:1px solid rgba(201,165,92,.35);border-radius:12px;padding:24px;">
    <h1 style="margin:0;font-size:24px;color:${PAPER};">${featured.name}</h1>
    <p style="margin:8px 0 0;font-size:16px;color:${GOLD};font-style:italic;">${featured.tagline?.[lang] ?? ""}</p>
    <p style="margin:14px 0 0;font-size:14px;line-height:1.6;color:${MUTED};">${featured.shortDescription?.[lang] ?? ""}</p>
    <p style="margin:16px 0 4px;font-size:11px;letter-spacing:2px;color:${GOLD};">${L.capLabel}</p>
    <ul style="margin:0;padding-left:18px;">${caps}</ul>
    <p style="margin:20px 0 0;">
      ${featured.website ? `<a href="${featured.website}" style="display:inline-block;background:${GOLD};color:${OBSIDIAN};font-weight:bold;font-size:14px;padding:10px 22px;border-radius:6px;text-decoration:none;">${L.visit}</a>&nbsp;&nbsp;` : ""}
      ${a(`${SITE}/${lang}/platforms/${featured.slug}`, L.profile)}
    </p>
  </td></tr>

  <tr><td style="padding:28px 0 4px;"><span style="font-size:11px;letter-spacing:2px;color:${GOLD};">${L.readingLabel}</span></td></tr>
  <tr><td>${arts}</td></tr>

  <tr><td style="padding:28px 0 4px;"><span style="font-size:11px;letter-spacing:2px;color:${GOLD};">${L.portfolioLabel}</span></td></tr>
  <tr><td style="font-size:13px;line-height:1.9;color:${MUTED};">${L.portfolioIntro}<br>${strip}</td></tr>

  <tr><td align="center" style="padding:32px 0;">
    <a href="${SITE}/${lang}/contact" style="display:inline-block;background:${GOLD};color:${OBSIDIAN};font-weight:bold;font-size:14px;padding:12px 28px;border-radius:6px;text-decoration:none;">${L.cta}</a>
  </td></tr>

  <tr><td style="height:1px;background:rgba(247,248,250,.15);"></td></tr>
  <tr><td style="padding:16px 0;font-size:11px;line-height:1.6;color:${MUTED};">
    ${L.footer} ${a("{{unsubscribe}}", L.unsubscribe)}<br>
    Groupe Nseya · Av. de la Révolution 22Bis, Brikin/Ngaliema, Kinshasa · ${a(SITE, "groupejnn.com")}
  </td></tr>
</table></td></tr></table></body></html>`;
}

function buildText(lang) {
  const L = t[lang];
  return [
    `GROUPE NSEYA — ${L.hello} (W${week})`,
    "",
    `${L.featuredLabel}: ${featured.name} — ${featured.tagline?.[lang] ?? ""}`,
    featured.shortDescription?.[lang] ?? "",
    featured.website ? `${L.visit}: ${featured.website}` : "",
    `${L.profile}: ${SITE}/${lang}/platforms/${featured.slug}`,
    "",
    L.readingLabel + ":",
    ...articles.map((ar) => `- ${ar.title[lang]}: ${SITE}/${lang}/news/${ar.slug}`),
    "",
    `${L.cta}: ${SITE}/${lang}/contact`,
    "",
    `${L.footer} ${L.unsubscribe}: {{unsubscribe}}`,
  ].filter(Boolean).join("\n");
}

mkdirSync(new URL("../newsletter/", import.meta.url), { recursive: true });
const issue = `issue-${isoYear}-W${String(week).padStart(2, "0")}`;
for (const lang of ["en", "fr"]) {
  writeFileSync(new URL(`../newsletter/${issue}.${lang}.html`, import.meta.url), buildHtml(lang));
  writeFileSync(new URL(`../newsletter/${issue}.${lang}.txt`, import.meta.url), buildText(lang));
}
console.log(JSON.stringify({ issue, featured: featured.name, subjects: { en: t.en.subject, fr: t.fr.subject }, articles: articles.map((x) => x.slug) }, null, 2));
