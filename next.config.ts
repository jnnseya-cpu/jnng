import type { NextConfig } from "next";

/**
 * Content-Security-Policy — the injection seal (GN-FIN-01 posture: the site
 * is the trusted front door to the payment platforms, so no script may ever
 * run or exfiltrate from an origin we did not name).
 * - script/connect/img allow-lists cover exactly: self, the consent-gated
 *   tags (Google tag, Meta Pixel), the GoatCounter view counter, and the
 *   form/newsletter endpoint origins derived from env at build time.
 * - 'unsafe-inline' for scripts is required by Next's hydration bootstrap
 *   and the JSON-LD blocks; everything else stays locked down.
 */
const endpointOrigins = [
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT,
  process.env.NEXT_PUBLIC_FORM_ENDPOINT,
  process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT,
]
  .filter((u): u is string => Boolean(u))
  .map((u) => {
    try {
      return new URL(u).origin;
    } catch {
      return "";
    }
  })
  .filter(Boolean);

const goatOrigin = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE
  ? `https://${process.env.NEXT_PUBLIC_GOATCOUNTER_CODE}.goatcounter.com`
  : "";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://www.facebook.com https://www.googletagmanager.com ${goatOrigin}`,
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://www.facebook.com https://connect.facebook.net ${goatOrigin} ${endpointOrigins.join(" ")}`,
  "font-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
]
  .map((d) => d.replace(/\s+/g, " ").trim())
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
