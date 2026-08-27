import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  bordered = true,
  children,
}: {
  id?: string;
  className?: string;
  bordered?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 py-24 sm:py-32",
        bordered && "border-t border-line dark:border-line-dark",
        className,
      )}
    >
      {children}
    </section>
  );
}
