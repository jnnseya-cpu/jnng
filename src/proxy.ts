import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr"];
const defaultLocale = "en";

/** Browser-language suggestion: prefer a stored choice, else Accept-Language. */
function detectLocale(request: NextRequest): string {
  const stored = request.cookies.get("nseya-locale")?.value;
  if (stored && locales.includes(stored)) return stored;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.split(";")[0]?.trim().slice(0, 2).toLowerCase();
    if (code && locales.includes(code)) return code;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) {
    // Persist the user-controlled selection.
    const active = pathname.split("/")[1];
    const response = NextResponse.next();
    response.cookies.set("nseya-locale", active, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static assets, metadata routes and files with extensions.
  matcher: ["/((?!_next|api|logos|images|icons|video|posters|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|.*\\..*).*)"],
};
