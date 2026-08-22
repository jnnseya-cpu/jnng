"use client";

import { useMemo, useRef, useState } from "react";
import { z } from "zod";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { platforms } from "@/content/platforms";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

type FormState = "default" | "submitting" | "success" | "error" | "offline" | "mailto";

/**
 * Frontend-only contact form.
 * - Zod-validated client side, localised error summary (WCAG error summary).
 * - Honeypot field + minimum-fill-time check as spam controls.
 * - POSTs JSON to NEXT_PUBLIC_CONTACT_ENDPOINT; no private keys in frontend.
 * - Duplicate-submission protection while submitting.
 */
export function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.contact.form;
  const [state, setState] = useState<FormState>("default");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mountedAt = useRef(Date.now());
  const summaryRef = useRef<HTMLDivElement>(null);

  const schema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, f.errors.fullName).max(120),
        organisation: z.string().max(160).optional().or(z.literal("")),
        position: z.string().max(120).optional().or(z.literal("")),
        email: z.email(f.errors.email),
        telephone: z.string().max(40).optional().or(z.literal("")),
        country: z.string().min(2, f.errors.country).max(80),
        enquiryType: z.string().min(1, f.errors.enquiryType),
        platform: z.string().optional().or(z.literal("")),
        message: z.string().min(20, f.errors.message).max(5000),
        consent: z.literal(true, { error: f.errors.consent }),
      }),
    [f],
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return; // duplicate-submission protection

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if ((data.get("company_website") as string)?.length) {
      setState("success");
      return;
    }
    // Timing check: a sub-2s fill is almost certainly automated.
    if (Date.now() - mountedAt.current < 2000) {
      setState("success");
      return;
    }

    const values = {
      fullName: (data.get("fullName") as string) ?? "",
      organisation: (data.get("organisation") as string) ?? "",
      position: (data.get("position") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      telephone: (data.get("telephone") as string) ?? "",
      country: (data.get("country") as string) ?? "",
      enquiryType: (data.get("enquiryType") as string) ?? "",
      platform: (data.get("platform") as string) ?? "",
      message: (data.get("message") as string) ?? "",
      consent: data.get("consent") === "on",
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setState("default");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setErrors({});

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setState("offline");
      return;
    }
    // No endpoint configured yet: fall back to a prefilled email so the form
    // remains fully functional from day one (no third-party dependency).
    if (!site.formEndpoint) {
      const d = parsed.data;
      const subject = `[groupejnn.com] ${d.enquiryType}${d.platform ? ` — ${d.platform}` : ""} — ${d.fullName}`;
      const body = [
        `Name: ${d.fullName}`,
        d.organisation ? `Organisation: ${d.organisation}` : "",
        d.position ? `Position: ${d.position}` : "",
        `Email: ${d.email}`,
        d.telephone ? `Telephone: ${d.telephone}` : "",
        `Country: ${d.country}`,
        `Enquiry type: ${d.enquiryType}`,
        d.platform ? `Platform of interest: ${d.platform}` : "",
        "",
        d.message,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setState("mailto");
      track("lead", { method: "mailto", enquiry_type: d.enquiryType });
      return;
    }

    setState("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...parsed.data, locale, source: "groupejnn.com" }),
      });
      if (!res.ok) throw new Error(`Endpoint responded ${res.status}`);
      setState("success");
      track("lead", { method: "form", enquiry_type: parsed.data.enquiryType });
      form.reset();
    } catch {
      setState(typeof navigator !== "undefined" && !navigator.onLine ? "offline" : "error");
    }
  }

  const inputCls =
    "min-h-11 w-full rounded-md border border-paper/15 bg-midnight px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
  const labelCls = "mb-1.5 block text-sm font-medium text-paper/90";
  const errCls = "mt-1 text-xs text-[#ff9d9d]";
  const errorEntries = Object.entries(errors);

  if (state === "success") {
    return (
      <div role="status" className="card-glass rounded-2xl border-live/30 p-8 text-center">
        <p className="font-display text-xl font-semibold text-live">✓</p>
        <p className="mt-3 text-base leading-relaxed text-paper">{f.success}</p>
      </div>
    );
  }

  if (state === "mailto") {
    return (
      <div role="status" className="card-glass rounded-2xl border-gold/30 p-8 text-center">
        <p className="font-display text-xl font-semibold text-gold-bright">✉</p>
        <p className="mt-3 text-base leading-relaxed text-paper">{f.mailtoOpened}</p>
        <p className="mt-3 text-sm text-muted">
          {f.mailtoManual}{" "}
          <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-2">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-glass rounded-2xl p-6 sm:p-8">
      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-md border border-[#ff9d9d]/40 bg-[#ff9d9d]/5 p-4"
        >
          <p className="text-sm font-semibold text-[#ff9d9d]">{f.errorHeading}</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-paper/80">
            {errorEntries.map(([key, msg]) => (
              <li key={key}>{msg}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {state === "error" || state === "offline" ? (
        <div role="alert" className="mb-6 rounded-md border border-soon/40 bg-soon/5 p-4 text-sm text-paper/90">
          {state === "offline" ? (
            f.offline
          ) : (
            <>
              {f.submitError}{" "}
              <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-2">
                {site.email}
              </a>
            </>
          )}
        </div>
      ) : null}

      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelCls}>
            {f.fullName}
          </label>
          <input id="fullName" name="fullName" autoComplete="name" required className={inputCls} aria-invalid={!!errors.fullName} />
          {errors.fullName ? <p className={errCls}>{errors.fullName}</p> : null}
        </div>
        <div>
          <label htmlFor="organisation" className={labelCls}>
            {f.organisation} <span className="text-muted">({f.optional})</span>
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="position" className={labelCls}>
            {f.position} <span className="text-muted">({f.optional})</span>
          </label>
          <input id="position" name="position" autoComplete="organization-title" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {f.email}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputCls} aria-invalid={!!errors.email} />
          {errors.email ? <p className={errCls}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="telephone" className={labelCls}>
            {f.telephone} <span className="text-muted">({f.optional})</span>
          </label>
          <input id="telephone" name="telephone" type="tel" autoComplete="tel" className={inputCls} />
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>
            {f.country}
          </label>
          <input id="country" name="country" autoComplete="country-name" required className={inputCls} aria-invalid={!!errors.country} />
          {errors.country ? <p className={errCls}>{errors.country}</p> : null}
        </div>
        <div>
          <label htmlFor="enquiryType" className={labelCls}>
            {f.enquiryType}
          </label>
          <select id="enquiryType" name="enquiryType" required defaultValue="" className={inputCls} aria-invalid={!!errors.enquiryType}>
            <option value="" disabled>
              {f.selectPlaceholder}
            </option>
            {f.enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.enquiryType ? <p className={errCls}>{errors.enquiryType}</p> : null}
        </div>
        <div>
          <label htmlFor="platform" className={labelCls}>
            {f.platformOfInterest} <span className="text-muted">({f.optional})</span>
          </label>
          <select id="platform" name="platform" defaultValue="" className={inputCls}>
            <option value="">{f.none}</option>
            {platforms.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          className={inputCls}
          aria-invalid={!!errors.message}
          placeholder={dict.contact.partnershipPrompt}
        />
        {errors.message ? <p className={errCls}>{errors.message}</p> : null}
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-paper/85">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#c9a55c]" aria-invalid={!!errors.consent} />
          <span>{f.consent}</span>
        </label>
        {errors.consent ? <p className={errCls}>{errors.consent}</p> : null}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? f.submitting : state === "error" || state === "offline" ? f.retry : f.submit}
      </button>
    </form>
  );
}
