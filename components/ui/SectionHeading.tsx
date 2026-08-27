import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-faint">{description}</p>
      ) : null}
    </div>
  );
}
