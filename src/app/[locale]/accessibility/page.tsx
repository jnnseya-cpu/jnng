import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/layout/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.legal.accessibility.title };
}

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return (
    <LegalPage
      title={dict.legal.accessibility.title}
      body={[...dict.legal.accessibility.body]}
      reviewNote={dict.legal.reviewNote}
    />
  );
}
