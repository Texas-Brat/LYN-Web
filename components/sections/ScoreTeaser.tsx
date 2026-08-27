"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { scoreDimensions } from "@/lib/content/scoreDimensions";
import { brand } from "@/lib/brand";

export function ScoreTeaser() {
  const overall = Math.round(
    scoreDimensions.reduce((sum, d) => sum + d.sampleValue, 0) / scoreDimensions.length,
  );

  return (
    <Section id="score">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="The AI Visibility Score"
              title="Ten dimensions. One number. Every gap explained."
              description="The same ten signals behind the BORN audit above, scored for any brand — entity completeness through local authority."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-faint">
              The interactive self-assessment ships next in our own build loop. Until then,
              book a strategy call and we&rsquo;ll run the real audit method — live sessions
              against ChatGPT, Claude, Gemini and Perplexity — on your brand directly.
            </p>
            <Button href={brand.contact.bookCallUrl} className="mt-8" size="lg">
              Get your real score
            </Button>
          </div>

          <div className="rounded-2xl border border-line p-6 dark:border-line-dark sm:p-8">
            <div className="flex items-center justify-between">
              <Tag>Sample report — illustrative</Tag>
              <p className="font-mono text-2xl font-medium">{overall}</p>
            </div>
            <div className="mt-8 space-y-5">
              {scoreDimensions.map((d, i) => (
                <div key={d.key}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium">{d.label}</p>
                    <p className="font-mono text-xs text-ink-faint">{d.sampleValue}</p>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-dim dark:bg-ink-soft">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.sampleValue}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-signal"
                    />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">{d.explainer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
