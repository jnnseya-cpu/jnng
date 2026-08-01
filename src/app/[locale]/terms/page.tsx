import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/layout/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.legal.terms.title };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return <LegalPage title={dict.legal.terms.title} body={[...dict.legal.terms.body]} reviewNote={dict.legal.reviewNote} />;
}
