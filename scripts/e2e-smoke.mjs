/**
 * Groupe Nseya — production smoke & accessibility suite.
 * Usage: npm run build && npm start -- -p 3100   (or set E2E_BASE_URL)
 *        CHROME_PATH=/path/to/chromium node scripts/e2e-smoke.mjs
 * Covers: full route sweep (status/h1/title/console/asset errors), metadata
 * routes, locale detection, language switching, directory filters + search +
 * URL sync, external-link security, mobile menu, contact-form states,
 * 404, security headers, axe-core WCAG 2.2 AA scan.
 */
import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";

const BASE = process.env.E2E_BASE_URL ?? "http://localhost:3100";
const axeSource = readFileSync(new URL("../node_modules/axe-core/axe.min.js", import.meta.url), "utf8");

const platformSlugs = [
  "groupe-jnn","3jn-travel","studyear","nseya-x-execute","tunakula-cd","veryx","marketwar","buzz-pro",
  "openn-job-global","joshrix","jess-move","niche-finder","virvoo","axionos","jnseya-construction","jnn-estate",
  "rakapay","parksmart","bitripay","ticketroyality","vibr","health360-rdc","gov360","congo-voice-ai",
  "snel-link","c-recycle","energy-industrial-drc","3jn-vendor-partners",
];
const staticPaths = ["","/about","/platforms","/sectors","/founder","/impact","/news","/contact","/privacy","/cookies","/terms","/accessibility"];
const allPaths = [];
for (const l of ["en","fr"]) {
  for (const p of staticPaths) allPaths.push(`/${l}${p}`);
  for (const s of platformSlugs) allPaths.push(`/${l}/platforms/${s}`);
}

const failures = [];
const warn = [];
const ok = (label) => process.stdout.write(`PASS ${label}\n`);
const fail = (label, detail) => { failures.push(`${label}: ${detail}`); process.stdout.write(`FAIL ${label}: ${detail}\n`); };

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });

// ---------- 1. FULL ROUTE SWEEP: status, h1, title, console/page/request errors ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const pageIssues = [];
  page.on("console", (m) => { if (m.type() === "error") pageIssues.push(`console: ${m.text().slice(0,160)}`); });
  page.on("pageerror", (e) => pageIssues.push(`pageerror: ${String(e).slice(0,160)}`));
  page.on("requestfailed", (r) => {
    // Ignore aborted RSC/Link prefetches cancelled by test navigation.
    if (r.url().includes("_rsc=") || r.failure()?.errorText === "net::ERR_ABORTED") return;
    pageIssues.push(`reqfail: ${r.url().slice(0,120)}`);
  });
  page.on("response", (r) => { if (r.status() >= 400) pageIssues.push(`http${r.status()}: ${r.url().slice(0,120)}`); });

  let swept = 0;
  for (const path of allPaths) {
    pageIssues.length = 0;
    const res = await page.goto(BASE + path, { waitUntil: "load", timeout: 20000 });
    const status = res?.status();
    if (status !== 200) { fail(`route ${path}`, `status ${status}`); continue; }
    const h1 = await page.locator("h1").count();
    const title = await page.title();
    if (h1 < 1) fail(`route ${path}`, "missing h1");
    if (!title || title.length < 5) fail(`route ${path}`, `bad title "${title}"`);
    if (pageIssues.length) fail(`route ${path}`, pageIssues.slice(0,3).join(" | "));
    swept++;
  }
  ok(`route sweep: ${swept}/${allPaths.length} pages clean`);
  await ctx.close();
}

// ---------- 2. METADATA ROUTES ----------
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  for (const p of ["/sitemap.xml","/robots.txt","/manifest.webmanifest","/en/opengraph-image","/fr/opengraph-image","/icon.svg"]) {
    const res = await page.goto(BASE + p, { timeout: 15000 });
    if (res?.status() !== 200) fail(`meta ${p}`, `status ${res?.status()}`); else ok(`meta ${p}`);
  }
  await ctx.close();
}

// ---------- 3. LOCALE DETECTION ----------
{
  const ctx = await browser.newContext({ locale: "fr-FR", extraHTTPHeaders: { "accept-language": "fr-FR,fr;q=0.9" } });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "load" });
  if (page.url().includes("/fr")) ok("locale detection: fr browser -> /fr"); else fail("locale detection", `landed on ${page.url()}`);
  await ctx.close();
}

// ---------- 4. LANGUAGE SWITCHER ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/en/founder", { waitUntil: "load" });
  await page.click('nav[aria-label="Language"] a:has-text("FR")');
  await page.waitForURL("**/fr/founder", { timeout: 10000 });
  const h1 = await page.locator("h1").innerText();
  if (h1.includes("bâtisseur")) ok("language switch preserves page (founder EN->FR)"); else fail("language switch", `h1="${h1}"`);
  await ctx.close();
}

// ---------- 5. PLATFORM DIRECTORY: filters, search, URL sync ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/en/platforms", { waitUntil: "networkidle" });
  const cards = () => page.locator("article").count();
  if ((await cards()) === 28) ok("directory shows all 28 platforms"); else fail("directory count", `${await cards()}`);

  await page.click('button[role="radio"]:has-text("Coming Soon")');
  await page.waitForTimeout(400);
  if ((await cards()) === 12) ok("status filter: coming-soon = 12"); else fail("status filter", `${await cards()}`);
  if (page.url().includes("status=coming-soon")) ok("URL sync: ?status=coming-soon"); else fail("URL sync", page.url());

  await page.click('button:has-text("Clear filters")');
  await page.waitForTimeout(300);
  await page.fill('input[type="search"]', "StudYear");
  await page.waitForTimeout(400);
  if ((await cards()) === 1) ok("search 'StudYear' = 1 result"); else fail("search", `${await cards()} results`);

  await page.fill('input[type="search"]', "zzz-no-match");
  await page.waitForTimeout(400);
  const empty = await page.locator("text=No platforms match").count();
  if (empty) ok("empty state renders"); else fail("empty state", "missing");

  // deep-link with query params
  await page.goto(BASE + "/en/platforms?status=live&sector=education", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const deepCount = await cards();
  if (deepCount === 1) ok("deep-link ?status=live&sector=education = 1 (StudYear)"); else fail("deep-link filters", `${deepCount}`);
  await ctx.close();
}

// ---------- 6. EXTERNAL LINK SECURITY ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/en/platforms", { waitUntil: "networkidle" });
  const bad = await page.$$eval('a[href^="http"]:not([href*="localhost"])', (links) =>
    links.filter((a) => a.target !== "_blank" || !/noopener/.test(a.rel) || !/noreferrer/.test(a.rel)).map((a) => a.href),
  );
  if (bad.length === 0) ok("all external links: _blank + noopener noreferrer"); else fail("external links", bad.slice(0,3).join(", "));
  const domains = await page.$$eval('a[href^="http"]:not([href*="localhost"])', (l) => [...new Set(l.map((a) => new URL(a.href).hostname))]);
  console.log("  external domains referenced:", domains.join(", "));
  await ctx.close();
}

// ---------- 7. MOBILE MENU: open/trap/escape ----------
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/en", { waitUntil: "load" });
  await page.click('button[aria-controls="mobile-menu"]');
  if (await page.locator("#mobile-menu").isVisible()) ok("mobile menu opens"); else fail("mobile menu", "did not open");
  const overflow = await page.evaluate(() => document.body.style.overflow);
  if (overflow === "hidden") ok("mobile menu locks body scroll"); else fail("scroll lock", `overflow=${overflow}`);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  if (!(await page.locator("#mobile-menu").isVisible().catch(() => false))) ok("Escape closes mobile menu"); else fail("escape close", "still open");
  await ctx.close();
}

// ---------- 8. CONTACT FORM: validation, mailto fallback, honeypot ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/en/contact", { waitUntil: "networkidle" });
  // The form sits inside a scroll-reveal; bring it into view first.
  await page.locator("#fullName").scrollIntoViewIfNeeded();
  await page.locator('button[type="submit"]').scrollIntoViewIfNeeded();
  // Wait past the anti-bot minimum-fill-time check (2s) like a human would.
  await page.waitForTimeout(2400);

  // invalid submit -> zod error summary (form is noValidate by design)
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(500);
  const alert = await page.locator('[role="alert"]').count();
  if (alert >= 1) ok("contact: error summary on invalid submit"); else fail("contact error summary", "not shown");

  // valid submit (endpoint unset -> mailto fallback). Wait past the 2s timing check.
  await page.fill("#fullName", "Test Person");
  await page.fill("#email", "test@example.com");
  await page.fill("#country", "United Kingdom");
  await page.selectOption("#enquiryType", { index: 1 });
  await page.fill("#message", "This is a serious partnership enquiry with more than twenty characters.");
  await page.check('input[name="consent"]');
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(800);
  const mailtoMsg = await page.locator("text=email app has opened").count();
  if (mailtoMsg) ok("contact: mailto fallback fires when endpoint unset"); else fail("contact mailto fallback", "message not shown");
  await ctx.close();
}

// ---------- 9. 404 ----------
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const res = await page.goto(BASE + "/en/platforms/does-not-exist", { waitUntil: "load" });
  if (res?.status() === 404) ok("unknown platform -> 404 status"); else fail("404 status", `${res?.status()}`);
  const nf = await page.locator("text=Page not found").count();
  if (nf) ok("404 page renders branded content"); else fail("404 content", "missing");
  await ctx.close();
}

// ---------- 10. SECURITY HEADERS ----------
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const res = await page.goto(BASE + "/en", { waitUntil: "load" });
  const h = res?.headers() ?? {};
  for (const [k, want] of [["x-content-type-options","nosniff"],["x-frame-options","DENY"],["referrer-policy","strict-origin-when-cross-origin"],["strict-transport-security","max-age"]]) {
    if ((h[k] ?? "").includes(want)) ok(`header ${k}`); else fail(`header ${k}`, h[k] ?? "missing");
  }
  await ctx.close();
}

// ---------- 11. AXE ACCESSIBILITY SCAN ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  for (const path of ["/en","/en/platforms","/en/platforms/studyear","/en/founder","/en/contact","/fr"]) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.evaluate(async () => { const step = innerHeight; for (let y=0;y<document.body.scrollHeight;y+=step){scrollTo(0,y);await new Promise(r=>setTimeout(r,80));} scrollTo(0,0); });
    // Let reveal animations settle so axe measures final colours, not mid-fade.
    await page.waitForTimeout(1800);
    await page.addScriptTag({ content: axeSource });
    const result = await page.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a","wcag2aa","wcag21aa","wcag22aa"] } });
      return r.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }));
    });
    if (result.length === 0) ok(`axe ${path}: 0 violations`);
    else for (const v of result) fail(`axe ${path}`, `${v.id} (${v.impact}, ${v.nodes} nodes) — ${v.help}`);
  }
  await ctx.close();
}

await browser.close();
console.log("\n==============================");
console.log(failures.length === 0 ? "ALL CHECKS PASSED" : `${failures.length} FAILURES:`);
failures.forEach((f) => console.log(" - " + f));
process.exit(failures.length ? 1 : 0);
