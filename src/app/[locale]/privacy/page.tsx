import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/layout/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.legal.privacy.title };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return <LegalPage title={dict.legal.privacy.title} body={[...dict.legal.privacy.body]} reviewNote={dict.legal.reviewNote} />;
}
