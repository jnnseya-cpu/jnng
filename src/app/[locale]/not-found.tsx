import Link from "next/link";

// Locale params are not available in not-found; show both languages.
export default function NotFound() {
  return (
    <section className="hero-canvas flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono-label text-xs text-gold">404</p>
      <h1 className="font-display mt-4 text-4xl font-semibold t-fg sm:text-5xl">
        Page not found · Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed t-soft">
        The page you are looking for does not exist or has moved. · La page que vous recherchez n&apos;existe pas ou a
        été déplacée.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/en"
          className="inline-flex min-h-11 items-center rounded-md bg-gold-bright px-6 py-3 text-sm font-semibold text-obsidian hover:bg-gold-bright"
        >
          English homepage
        </Link>
        <Link
          href="/fr"
          className="inline-flex min-h-11 items-center rounded-md border border-[color:var(--rule)] px-6 py-3 text-sm font-semibold t-fg hover:border-gold/60"
        >
          Accueil français
        </Link>
      </div>
    </section>
  );
}
