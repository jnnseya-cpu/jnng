"use client";

import { useEffect, useRef, useState } from "react";

// GoatCounter site code (public, not a secret). Cookieless, no personal data,
// no cross-site tracking — so it runs without the consent banner (it is the
// privacy-friendly counter class the ICO/GDPR guidance treats as exempt-able,
// unlike Meta Pixel / GA which stay consent-gated in tracking.tsx).
const CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE ?? "";

/**
 * Public per-page view counter for articles.
 * On mount: records one view (image beacon) and fetches the running total for
 * this path from GoatCounter's public counter API. Renders nothing until the
 * count is known — and nothing at all while NEXT_PUBLIC_GOATCOUNTER_CODE is
 * unset or the network is unavailable, so it can never break the page.
 */
export function ViewCounter({ path, label }: { path: string; label: string }) {
  const [count, setCount] = useState<string | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (!CODE || fired.current) return;
    if (typeof window === "undefined" || window.location.hostname === "localhost") return;
    fired.current = true;

    const beacon = new Image();
    beacon.src = `https://${CODE}.goatcounter.com/count?p=${encodeURIComponent(path)}`;

    fetch(`https://${CODE}.goatcounter.com/counter/${encodeURIComponent(path)}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { count?: string } | null) => {
        if (d?.count) setCount(String(d.count).trim());
      })
      .catch(() => {
        /* counter unavailable — show nothing rather than a broken number */
      });
  }, [path]);

  if (!count) return null;
  return (
    <span className="font-mono-label text-[0.62rem] text-muted" aria-label={`${count} ${label}`}>
      {count} {label}
    </span>
  );
}
