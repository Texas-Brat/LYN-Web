"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const oldLinks = [
  "borntoeat.com/double-roti",
  "zomato.com/chennai/double-roti",
  "tripadvisor.in/...anna-nagar",
  "yelp.com/biz/double-roti",
  "facebook.com/doubleroti",
  "..."
];

export function TheShift() {
  return (
    <Section id="shift">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
              The shift
            </p>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Search gave you ten links to compete with.
              <br />
              <span className="text-ink-faint">AI gives one answer to win.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-faint">
              A search results page has room for everyone — you just needed to rank. An AI
              answer names one, maybe three, brands and stops. There is no page two. Being
              slightly worse than the leading answer costs you the entire recommendation, not
              a rank.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line p-6 dark:border-line-dark">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Before</p>
              <p className="mt-1 mb-4 text-sm text-ink-faint">10 blue links, you pick</p>
              <ul className="space-y-2.5">
                {oldLinks.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="truncate font-mono text-xs text-ink-faint"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-signal bg-signal/10 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">After</p>
              <p className="mt-1 mb-4 text-sm text-ink-faint">One name, the model decides</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-2xl font-medium leading-snug"
              >
                &ldquo;Double Roti — best gourmet burger in Chennai.&rdquo;
              </motion.p>
              <p className="mt-4 text-xs text-ink-faint">— ChatGPT, verbatim, 19 Jun 2026</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
