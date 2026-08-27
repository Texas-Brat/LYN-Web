"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

/**
 * Explicit light/dark switch — the site otherwise only reacts to OS
 * preference (next-themes' `system` default), and the brief calls for a
 * visible, user-triggered transition between the two, not just an ambient
 * one.
 *
 * next-themes resolves the real theme via a blocking inline script that
 * runs *before* hydration (that's how it avoids a flash of the wrong
 * theme), so `resolvedTheme` is already concrete on the client's very
 * first render — while the server, which has no access to localStorage
 * or matchMedia, can only ever render the "unknown" state. Deriving the
 * icon straight from `resolvedTheme` therefore mismatches at hydration.
 * The standard fix is this mounted-gate: render the neutral fallback
 * until an effect confirms we're past hydration, then swap to the real
 * icon. That's a deliberate one-time sync with an external system
 * (the DOM's post-hydration state), which is exactly what effects are
 * for — not the "derive state from props" anti-pattern the lint rule
 * otherwise guards against.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- required: see comment above
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink dark:border-line-dark dark:text-paper dark:hover:border-paper"
    >
      <svg
        viewBox="0 0 20 20"
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "scale-50 opacity-0" : "scale-100 opacity-100",
        )}
        aria-hidden
      >
        <circle cx="10" cy="10" r="4.2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M10 1.5v2.2M10 16.3v2.2M18.5 10h-2.2M3.7 10H1.5M15.9 4.1l-1.55 1.55M5.66 14.34l-1.55 1.55M15.9 15.9l-1.55-1.55M5.66 5.66 4.1 4.1" />
        </g>
      </svg>
      <svg
        viewBox="0 0 20 20"
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "scale-100 opacity-100" : "scale-50 opacity-0",
        )}
        aria-hidden
      >
        <path
          d="M17.2 12.1A7.6 7.6 0 0 1 7.9 2.8a7.6 7.6 0 1 0 9.3 9.3Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
