import type { PlatformStatus } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";

const styles: Record<Exclude<PlatformStatus, "internal">, { dot: string; text: string; border: string }> = {
  live: { dot: "bg-live text-live", text: "text-live", border: "border-live/30" },
  launching: { dot: "bg-launching text-launching", text: "text-launching", border: "border-launching/30" },
  "coming-soon": { dot: "bg-soon text-soon", text: "text-soon", border: "border-soon/30" },
};

/** Accessible status label — never relies on colour alone. */
export function StatusBadge({ status, dict }: { status: PlatformStatus; dict: Dictionary }) {
  if (status === "internal") return null;
  const s = styles[status];
  const label =
    status === "live" ? dict.status.live : status === "launching" ? dict.status.launching : dict.status.comingSoon;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${s.border} bg-paper/[0.03] px-3 py-1 font-mono-label text-[0.62rem] ${s.text}`}
    >
      <span aria-hidden className={`status-dot h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {label}
    </span>
  );
}
