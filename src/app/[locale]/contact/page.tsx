import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : "en");
  return { title: dict.contact.title, description: metaDescription(dict.contact.intro) };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="surface-midnight px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-label text-xs text-gold">{dict.contact.title}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight t-fg sm:text-5xl">
              {dict.contact.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed t-soft sm:text-lg">{dict.contact.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <Reveal>
              <div className="space-y-8">
                <div className="card-glass rounded-2xl p-7">
                  <h2 className="font-mono-label text-xs text-gold">{dict.contact.office}</h2>
                  <address className="mt-4 text-sm not-italic leading-relaxed t-fg">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.district}
                    <br />
                    {site.address.city}, {site.address.country[locale]}
                  </address>
                </div>
                <div className="card-glass rounded-2xl p-7">
                  <h2 className="font-mono-label text-xs text-gold">{dict.contact.emailLabel}</h2>
                  <p className="mt-4">
                    <a href={`mailto:${site.email}`} className="text-sm text-gold underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  </p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="t-soft">{dict.contact.ukPhone}</dt>
                      <dd>
                        <a href="tel:+447493216101" className="t-fg hover:text-gold-bright">
                          {site.phoneUK}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="t-soft">{dict.contact.drcPhone}</dt>
                      <dd>
                        <a href="tel:+243818112309" className="t-fg hover:text-gold-bright">
                          {site.phoneDRC}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <p className="text-sm italic leading-relaxed t-soft">{dict.contact.partnershipPrompt}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm locale={locale} dict={dict} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
