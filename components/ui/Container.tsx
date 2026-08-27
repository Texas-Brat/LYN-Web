import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <As className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </As>
  );
}
