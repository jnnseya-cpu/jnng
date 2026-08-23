/**
 * Meta description length guard: search engines truncate around 160 chars,
 * and over-long descriptions score as defects in the SEO register
 * (npm run seo). Cuts at a word boundary with an ellipsis.
 */
export function metaDescription(text: string): string {
  if (text.length <= 160) return text;
  return text.slice(0, 157).replace(/\s+\S*$/, "") + "…";
}
