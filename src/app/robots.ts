import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Staging/preview no-index: set NEXT_PUBLIC_NOINDEX=true (or rely on
// VERCEL_ENV=preview) to keep non-production deployments out of search.
const isPreview =
  process.env.NEXT_PUBLIC_NOINDEX === "true" || process.env.VERCEL_ENV === "preview";

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
