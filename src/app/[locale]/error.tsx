"use client";

import { useParams } from "next/navigation";

// Locale-level error boundary: keeps header/footer chrome working while the
// failed segment shows a recoverable message.
export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ locale: string }>();
  const fr = params?.locale === "fr";
  return (
    <section className="hero-canvas flex min-h-[70svh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="font-mono-label text-xs text-gold">Groupe Nseya</p>
      <h1 className="font-display mt-4 text-3xl font-semibold text-paper sm:text-4xl">
        {fr ? "Une erreur est survenue" : "Something went wrong"}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        {fr
          ? "Veuillez réessayer. Si le problème persiste, contactez-nous à contact@groupejnn.com."
          : "Please try again. If the problem continues, contact us at contact@groupejnn.com."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-obsidian hover:bg-gold-bright"
      >
        {fr ? "Réessayer" : "Try again"}
      </button>
    </section>
  );
}
