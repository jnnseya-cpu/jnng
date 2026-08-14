# Groupe Nseya website — agent operating instructions

**Binding rule:** follow `docs/ENGINEERING-DIRECTIVE.md` (owner-issued Senior
Engineering Operating Directive) for all work in this repository.
UNDERSTAND → INSPECT → REUSE → PLAN → IMPLEMENT → VERIFY → STABILISE → MOVE FORWARD.

## Platform memory (do not rediscover)

- **What this is:** frontend-only, statically generated corporate/portfolio site
  for Groupe Nseya (groupejnn.com). No backend, no database, no auth, no
  payments — by design. Product dashboards live on external platform domains.
- **Stack:** Next.js 16 App Router (`src/app/[locale]/…`), React 19, TypeScript
  strict, Tailwind CSS 4 (`src/app/globals.css` theme), Motion for React,
  Zod 4 (contact form), Lucide, next/font (Sora/Inter/IBM Plex Mono),
  @vercel/analytics (renders only when `process.env.VERCEL`).
- **i18n:** locales `en`/`fr` via `src/proxy.ts` (browser detect + cookie) and
  `src/lib/i18n.ts`; `fr` dictionary is type-checked against `en`.
- **Deploy:** Vercel builds `main`. Workflow: work on branch
  `claude/groupe-nseya-website-rq5gt1` → PR → merge to `main` → auto-deploy.
  After merge, reset the branch onto `origin/main`.

## Single sources of truth (never duplicate, never hard-code elsewhere)

| Truth | File |
|---|---|
| Platform records, statuses, links, growth tools | `src/content/platforms.ts` |
| Articles/insights (the SEO autopilot drop-zone) | `src/content/articles.ts` |
| All page copy EN/FR | `src/content/translations/{en,fr}.ts` |
| Sectors taxonomy | `src/content/sectors.ts` |
| Growth-tool catalogue | `src/content/growth-tools.ts` |
| Contact details, founder, canonical URL | `src/lib/site.ts` |
| Impact metrics (only `verified: true` ever renders) | `src/content/impact.ts` |

Statuses (`live`/`launching`/`coming-soon`/`internal`) are set ONLY in
`platforms.ts`. No invented statistics anywhere, ever.

## Verification standard (run before declaring done)

```bash
npm run build        # must pass, all routes static
npm start -- -p 3100 # then, in another step:
npm run test:e2e     # full sweep + functional + axe (CHROME_PATH=/opt/pw-browsers/chromium)
npm run state        # regenerate STATUS.md after ANY content change
```

`STATUS.md` is the derived state register — regenerate it, never edit it, never
contradict it from memory. E2E platform/article slug lists and counts in
`scripts/e2e-smoke.mjs` must be updated in the same commit as content changes.

## Done and stable — do not rebuild (Directive §1, §4)

Locale routing/proxy · hero + landing sections · platform directory
(filter/search/URL sync) · platform profiles + Growth Engine + ACU strip ·
founder page (portrait via `public/images/founder/justin-nseya.jpg`) · contact
form (Zod, honeypot, timing check, mailto fallback via
`NEXT_PUBLIC_CONTACT_ENDPOINT`) · insights engine + linkify auto-linker + RSS ·
sitemap/robots/manifest/OG images · security headers · error boundaries ·
monogram placeholder system (`public/logos/placeholders/`, see its README).

## Session communication rules (owner-mandated)

- One change per request; nothing speculative.
- Report only the delta; no re-summarising completed work.
- Read state from files (`npm run state`), never from memory.
- No new content rounds unless explicitly requested.
