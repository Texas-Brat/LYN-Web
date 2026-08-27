"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import { featuredCases } from "@/lib/content/audit";

export function LiveAnswerDemo() {
  const [activeId, setActiveId] = useState(featuredCases[0].id);
  const active = featuredCases.find((c) => c.id === activeId) ?? featuredCases[0];

  return (
    <Section id="demo">
      <Container>
        <SectionHeading
          eyebrow="Real transcripts, not mockups"
          title="This is what AI already says about brands like yours."
          description="Every quote below is verbatim from a live session — platform and date stamped. No proxy tools, no simulated answers."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
            {featuredCases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                aria-pressed={c.id === activeId}
                className={cn(
                  "shrink-0 rounded-xl border p-4 text-left transition-colors lg:shrink",
                  c.id === activeId
                    ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                    : "border-line hover:border-ink dark:border-line-dark dark:hover:border-paper",
                )}
              >
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide",
                    c.id === activeId ? "text-paper dark:text-ink" : "text-ink-faint",
                  )}
                >
                  {c.kind === "win" ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  ) : null}
                  {c.kind === "win" ? "Win" : "Gap"}
                </span>
                <p className="mt-1 text-sm font-medium leading-snug">{c.brand}</p>
                <p
                  className={cn(
                    "mt-1 text-xs leading-snug",
                    c.id === activeId ? "opacity-70" : "text-ink-faint",
                  )}
                >
                  {c.query}
                </p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line p-8 dark:border-line-dark"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Tag>{active.platform}</Tag>
                <Tag>{active.date}</Tag>
                <Tag className={active.kind === "win" ? "border-signal" : undefined}>
                  {active.kind === "win" ? "Cross-platform win" : "Visibility gap"}
                </Tag>
              </div>
              <p className="mt-6 text-sm uppercase tracking-wide text-ink-faint">
                Query: &ldquo;{active.query}&rdquo;
              </p>
              <blockquote className="mt-4 border-l-2 border-signal pl-5 text-xl leading-relaxed">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-lg font-medium">{active.headline}</p>
              <p className="mt-3 leading-relaxed text-ink-faint">{active.explanation}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
