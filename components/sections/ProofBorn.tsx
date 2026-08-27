"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import {
  auditMeta,
  brandStandings,
  keyInsights,
  platformResults,
  type BrandStanding,
} from "@/lib/content/audit";

const statusStyles: Record<BrandStanding["status"], string> = {
  bulletproof: "border-signal bg-signal/10",
  strong: "border-ink dark:border-paper",
  fragile: "border-line dark:border-line-dark",
  gap: "border-dashed border-line dark:border-line-dark",
};

const statusLabels: Record<BrandStanding["status"], string> = {
  bulletproof: "Bulletproof",
  strong: "Strong",
  fragile: "Fragile",
  gap: "Gap",
};

export function ProofBorn() {
  return (
    <Section id="proof">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading
            eyebrow="Proof of work — our own portfolio"
            title="We ran this audit on our own restaurant group. Here's every result, including the misses."
            description={`${auditMeta.subjectName}: ${auditMeta.subjectDescription} This is our own portfolio, not an arm's-length client — disclosed everywhere it's cited.`}
          />
          <Tag className="shrink-0">{auditMeta.totalQueriesRun} queries · 4 platforms</Tag>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-faint">
          <strong className="text-ink dark:text-paper">Method:</strong> {auditMeta.method}{" "}
          Window: {auditMeta.dateRange}.
        </p>

        {/* Platform hit-rate bars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformResults.map((result, i) => (
            <div key={result.platform}>
              <div className="flex items-baseline justify-between">
                <p className="font-medium">{result.platform}</p>
                <p className="font-mono text-sm text-ink-faint">
                  {result.hits}/{result.total}
                </p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-paper-dim dark:bg-ink-soft">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${result.hitRate * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-signal"
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-faint">{result.note}</p>
            </div>
          ))}
        </div>

        {/* Brand standings */}
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            Brand-by-brand standing
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandStandings.map((b) => (
              <div
                key={b.brand}
                className={cn("rounded-xl border p-5", statusStyles[b.status])}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{b.brand}</p>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                    {statusLabels[b.status]}
                  </span>
                </div>
                <p className="mt-2 font-mono text-sm text-ink-faint">
                  {b.platformsWon}/{b.platformsTested} platforms
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-faint">
                  Owns: &ldquo;{b.ownedQuery}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key insights */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {keyInsights.map((insight, i) => (
            <div key={insight.title} className="flex gap-4">
              <span className="font-mono text-sm text-ink-faint">0{i + 1}</span>
              <div>
                <p className="font-medium">{insight.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{insight.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
