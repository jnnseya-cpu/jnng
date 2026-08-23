import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { metaDescription } from "@/lib/seo";
import { LegalPage } from "@/components/layout/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.legal.cookies.title, description: metaDescription(dict.legal.cookies.body[0]) };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return <LegalPage title={dict.legal.cookies.title} body={[...dict.legal.cookies.body]} reviewNote={dict.legal.reviewNote} />;
}
