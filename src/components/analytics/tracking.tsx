"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { track } from "@/lib/analytics";

// Public measurement IDs (never secrets). Both are optional; nothing renders
// or loads until at least one is configured AND the visitor has accepted.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

const CONSENT_KEY = "nseya-consent";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function loadMetaPixel(id: string) {
  if (window.fbq) return;
  const fbq: ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: unknown; loaded?: boolean; version?: string } = (
    ...args: unknown[]
  ) => {
    (fbq.queue as unknown[]).push(args);
  };
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq("init", id);
  window.fbq("track", "PageView");
}

function loadGoogleTag(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

/**
 * Consent-gated Meta Pixel + Google tag for the whole site.
 * - Banner shows only when an ID is configured and no choice is stored.
 * - Scripts load only after "Accept" (UK GDPR / PECR: no prior tracking).
 * - Tracks SPA route changes as page views, and every outbound click to a
 *   platform dashboard or external site (delegated listener — covers every
 *   external link on every page without touching the components).
 */
export function Tracking({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const enabled = Boolean(META_PIXEL_ID || GA_ID);
  const [consent, setConsent] = useState<Consent>("denied");
  const loadedRef = useRef(false);
  const pathname = usePathname();
  const firstPath = useRef(true);

  useEffect(() => {
    if (enabled) setConsent(readConsent());
  }, [enabled]);

  // Load both tags once consent is granted.
  useEffect(() => {
    if (!enabled || consent !== "granted" || loadedRef.current) return;
    loadedRef.current = true;
    if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID);
    if (GA_ID) loadGoogleTag(GA_ID);
  }, [enabled, consent]);

  // SPA navigations → page_view in both tags (initial load is tracked by the
  // loaders themselves, so skip the first pathname value).
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    track("page_view", { page_path: pathname });
  }, [pathname]);

  // Every outbound click, site-wide, via one delegated listener.
  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='http']") as HTMLAnchorElement | null;
      if (!a) return;
      try {
        const url = new URL(a.href);
        if (url.hostname === window.location.hostname) return;
        track("outbound_click", { domain: url.hostname.replace(/^www\./, ""), page_path: window.location.pathname });
      } catch {
        /* unparseable href — nothing to track */
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [enabled]);

  function choose(value: Exclude<Consent, null>) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* private mode — choice lives for this page only */
    }
    setConsent(value);
  }

  if (!enabled || consent !== null) return null;

  const c = dict.consent;
  return (
    <div
      role="region"
      aria-label={c.ariaLabel}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-xl border border-gold/40 bg-panel/95 p-4 shadow-2xl backdrop-blur sm:inset-x-auto sm:right-6 sm:left-auto"
    >
      <p className="text-sm leading-relaxed t-fg">
        {c.message}{" "}
        <Link href={localePath(locale, "/cookies")} className="text-gold underline underline-offset-2">
          {c.policy}
        </Link>
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-md bg-gold-bright px-4 py-2 text-sm font-semibold text-obsidian transition hover:brightness-110"
        >
          {c.accept}
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-md border border-[color:var(--rule)] px-4 py-2 text-sm font-medium t-fg transition hover:border-[color:var(--rule)]"
        >
          {c.decline}
        </button>
      </div>
    </div>
  );
}
