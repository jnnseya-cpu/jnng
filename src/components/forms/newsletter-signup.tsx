"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { site } from "@/lib/site";

type State = "default" | "submitting" | "success" | "error" | "mailto";

/**
 * Newsletter subscription capture — same frontend-only pattern as the contact
 * form: honeypot + timing check, POSTs to NEXT_PUBLIC_NEWSLETTER_ENDPOINT,
 * prefilled-email fallback while no endpoint is configured. Consent is
 * explicit (UK GDPR/PECR: the list is built opt-in, never assumed).
 */
export function NewsletterSignup({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const n = dict.footer.newsletter;
  const [state, setState] = useState<State>("default");
  const mountedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;
    const data = new FormData(e.currentTarget);
    if ((data.get("company_website") as string)?.length || Date.now() - mountedAt.current < 1500) {
      setState("success"); // silently absorb bot-speed submissions
      return;
    }
    const email = (data.get("newsletter-email") as string)?.trim();
    if (!email || !/.+@.+\..+/.test(email)) return;

    if (!site.newsletterEndpoint) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(
        `Please subscribe this address to the weekly Groupe Nseya newsletter: ${email} (language: ${locale})`,
      )}`;
      setState("mailto");
      return;
    }
    setState("submitting");
    try {
      const res = await fetch(site.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, locale, consent: true, source: "groupejnn.com" }),
      });
      if (!res.ok) throw new Error(`Endpoint responded ${res.status}`);
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success" || state === "mailto") {
    return (
      <p role="status" className="mt-4 text-sm leading-relaxed text-live">
        {state === "success" ? n.success : n.mailtoOpened}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <label htmlFor="newsletter-email" className="font-mono-label text-xs text-gold">
        {n.heading}
      </label>
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-3 flex max-w-xs gap-2">
        <input
          id="newsletter-email"
          name="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder={n.placeholder}
          className="min-h-11 w-full rounded-md border border-paper/15 bg-midnight px-3 py-2 text-sm text-paper placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-sheen inline-flex min-h-11 shrink-0 items-center rounded-md px-4 text-sm font-semibold text-obsidian disabled:opacity-60"
        >
          {state === "submitting" ? "…" : n.button}
        </button>
      </div>
      {state === "error" ? <p className="mt-2 text-xs text-soon">{n.error}</p> : null}
      <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted/70">{n.consent}</p>
    </form>
  );
}
