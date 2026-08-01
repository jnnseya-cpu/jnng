# Groupe Nseya — Premium Corporate & Venture Portfolio Website

Frontend-only, CMS-ready corporate website for **Groupe Nseya / JNN Global Ltd**
(`groupejnn.com`). Cinematic dark-mode experience presenting the group's 28
platform records across Live, Launching and Coming-Soon status, in English and
French.

## Stack

- **Next.js 16** (App Router, static generation, Turbopack)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS 4** (`@tailwindcss/postcss`)
- **Motion for React** (reduced-motion aware)
- **Zod 4** (contact-form validation)
- **Lucide** icons, `next/font` (Sora / Inter / IBM Plex Mono)

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000 → redirects to /en or /fr
```

Production build: `npm run build && npm start`.

A **zero-dependency visual preview** lives at [`preview/index.html`](preview/index.html) —
open it directly in a browser, no build required.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used by SEO metadata, sitemap and robots (default `https://groupejnn.com`). |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | URL the contact form POSTs JSON to (Formspree, Resend route, Firebase Function, CRM…). The form shows a graceful "not configured" state when empty. Never place private API keys in frontend variables. |
| `NEXT_PUBLIC_NOINDEX` | Set `true` on staging to serve a disallow-all robots.txt (previews on Vercel are blocked automatically via `VERCEL_ENV`). |

## Content architecture (CMS-ready)

All content lives in typed TypeScript files — components never hard-code
platform data, statuses or copy:

| File | Contents |
| --- | --- |
| `src/content/platforms.ts` | **The single source of truth** for all 28 platform records: name, slug, status, sector, regions, bilingual copy, CTA, brand colour, governance flags (`logoApproved`, `domainConfirmed`, `public`, `contentApproved`, `lastReviewedAt`). |
| `src/content/sectors.ts` | Sector taxonomy (17 sectors) used for filtering and the Sectors page. |
| `src/content/translations/en.ts`, `fr.ts` | Full page copy in both languages (`fr` is type-checked against `en`). |
| `src/content/news.ts` | News/announcement records (editorial placeholders — confirm before launch). |
| `src/content/impact.ts` | Impact metrics. **Only `verified: true` metrics ever render** — no invented figures. |
| `src/lib/site.ts` | Contact details, address, founder identity, social links. |

### Status governance

`live` · `launching` · `coming-soon` · `internal` (never rendered). Statuses are
controlled only in `platforms.ts`. Platforms whose operational status awaits
internal confirmation are held at **launching** — promote to **live** in one
place once confirmed. Currently live: Groupe JNN, 3JN Travel, StudYear,
Tunakula CD, JNseya Construction, JNN Estate Agency.

### Adding a platform

Add one record to `src/content/platforms.ts`, drop a placeholder monogram in
`public/logos/placeholders/platform-placeholder-<slug>.svg` (copy an existing
one and change initials/colour) — the directory, homepage, sitemap, detail
page, filters and search pick it up automatically.

## Key features

- **EN/FR internationalisation** — `/en/...` and `/fr/...` routes, browser
  language detection with a persisted user choice (`src/proxy.ts`), localised
  metadata, hreflang alternates and a language switcher.
- **Platform directory** (`/platforms`) — instant client-side filtering by
  status/sector/region, free-text search across name, tagline, description,
  audience, capability and domain, with URL query sync
  (`/en/platforms?status=live&sector=education`).
- **Cinematic homepage** — sub-2.5s opening sequence (gold sweep, staggered
  reveal), kinetic manifesto words, 6-platform featured grid, sector rail,
  coming-soon showcase, 5-stage venture process, founder introduction and
  conversion sections. All motion honours `prefers-reduced-motion`.
- **Contact form** — Zod-validated with localised error summary, honeypot +
  minimum-fill-time spam controls, duplicate-submission protection and
  default/submitting/success/error/offline/not-configured states.
- **SEO** — per-page metadata, Open Graph/Twitter cards, `sitemap.xml` with
  hreflang alternates, `robots.txt` with staging no-index, web manifest, and
  JSON-LD (Organization, WebSite, Person, BreadcrumbList, ItemList).
- **Accessibility (WCAG 2.2 AA target)** — skip link, visible focus, focus-trapped
  mobile menu with Escape/scroll-lock, aria-live result announcements,
  44px touch targets, descriptive external links (`rel="noopener noreferrer"`,
  new-tab announcement), status badges that don't rely on colour alone.

## Deployment (recommended)

1. Push to GitHub; import the repo into **Vercel** (framework auto-detected).
2. Set the environment variables above for Production; leave
   `NEXT_PUBLIC_CONTACT_ENDPOINT` empty until the endpoint exists.
3. Point **Cloudflare DNS** for `groupejnn.com` at Vercel; enforce HTTPS.
4. Enable PR preview deployments — previews are automatically no-indexed.

## Pre-launch checklist

- [ ] Replace temporary monograms in `public/logos/placeholders/` with approved
      logos and set `logoApproved: true` (see `public/logos/README.md`).
- [ ] Insert approved founder photography on `/founder`.
- [ ] Confirm Live vs Launching status for every "subject to confirmation"
      platform (VERYX, MarketWar OS, Buzz Pro, Openn Job Global, Joshrix,
      Jess Move, Niche Finder, Virvoo, AxionOS).
- [ ] Confirm the MarketWar OS domain (must not reuse the VERYX domain unless
      intentionally one product family) and the AxionOS/Evandeli brand-domain
      relationship (`domainConfirmed`).
- [ ] Select the primary public name: CIVIX-INTEL or GOV360.
- [ ] Connect `NEXT_PUBLIC_CONTACT_ENDPOINT` and test all form states.
- [ ] Replace legal-page placeholder copy with reviewed legal content.
- [ ] Confirm the Kinshasa address locality spelling ("Brikin") and the footer
      corporate-relationship wording against the legal structure.
- [ ] Add approved social profiles to `src/lib/site.ts` (`sameAs` structured data).
- [ ] Review `src/content/news.ts` dates/items against the real calendar.
- [ ] Add independently verified impact metrics (`verified: true`) when available.
- [ ] Choose analytics + cookie-consent tooling (none shipped by default — only
      strictly necessary cookies are used, matching the cookie policy).
