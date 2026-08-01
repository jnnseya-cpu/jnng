import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Secure external link: new tab, rel="noopener noreferrer", and a
 * screen-reader note that the link opens an external website.
 */
export function ExternalLink({
  href,
  children,
  className,
  srNote,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  srNote: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight aria-hidden className="external-icon ml-1 inline h-4 w-4" />
      <span className="sr-only"> ({srNote})</span>
    </a>
  );
}
