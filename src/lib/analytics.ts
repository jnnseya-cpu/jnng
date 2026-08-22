/**
 * Unified event tracking — fires the same business event into both Meta Pixel
 * (fbq) and Google tag (gtag). Every call is a safe no-op until the visitor
 * has accepted tracking and the scripts are loaded (see
 * components/analytics/tracking.tsx), so callers never need to check consent.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type TrackEvent = "lead" | "subscribe" | "outbound_click" | "page_view";

type Params = Record<string, string | number | undefined>;

/** Meta standard events where one exists; custom events otherwise. */
const META_EVENT: Record<TrackEvent, { name: string; custom: boolean }> = {
  lead: { name: "Lead", custom: false },
  subscribe: { name: "Subscribe", custom: false },
  outbound_click: { name: "OutboundClick", custom: true },
  page_view: { name: "PageView", custom: false },
};

const GOOGLE_EVENT: Record<TrackEvent, string> = {
  lead: "generate_lead",
  subscribe: "sign_up",
  outbound_click: "outbound_click",
  page_view: "page_view",
};

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const meta = META_EVENT[event];
  window.fbq?.(meta.custom ? "trackCustom" : "track", meta.name, params);
  window.gtag?.("event", GOOGLE_EVENT[event], params);
}
