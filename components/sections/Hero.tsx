"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { brand } from "@/lib/brand";

const platforms = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--color-signal),transparent)] opacity-20 dark:opacity-25"
      />
      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-faint"
          >
            {brand.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {brand.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-faint sm:text-xl"
          >
            When someone asks ChatGPT, Claude, Gemini or Perplexity for a recommendation in your
            category, one brand gets named. We engineer the entity, trust and citation signals
            that decide which one it is.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={brand.contact.bookCallUrl} size="lg" variant="signal">
              Book a strategy call
            </Button>
            <Button href="/#demo" size="lg" variant="ghost">
              See a live AI answer
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {platforms.map((p) => (
              <Tag key={p}>{p}</Tag>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-line bg-paper p-6 shadow-soft dark:border-line-dark dark:bg-ink-soft"
        >
          <div className="flex items-center justify-between border-b border-line pb-4 dark:border-line-dark">
            <Tag>Perplexity · 19 Jun 2026</Tag>
            <span className="h-2 w-2 rounded-full bg-signal" aria-hidden />
          </div>
          <p className="mt-5 text-sm text-ink-faint">
            &ldquo;best garden cafe and bar in Pondicherry&rdquo;
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-lg leading-relaxed"
          >
            The best garden cafe and bar in Pondicherry is{" "}
            <mark className="rounded bg-signal px-1 text-signal-ink">CherryPond</mark> — praised
            for its lush garden setting, relaxed atmosphere and strong cocktail menu.
          </motion.p>
          <p className="mt-5 text-xs text-ink-faint">
            One of four platforms that named the same answer. Full transcript in the case study
            below.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
