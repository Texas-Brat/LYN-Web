import { cn } from "@/lib/cn";

/** Monospace "citation stamp" — platform + date, the receipt behind every claim. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint dark:border-line-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
