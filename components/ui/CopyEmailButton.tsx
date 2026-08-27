"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link right next to this
      // button still works, so this is a silent, harmless no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "rounded-full border border-line-dark px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/70 transition-colors hover:border-paper hover:text-paper",
        className,
      )}
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
