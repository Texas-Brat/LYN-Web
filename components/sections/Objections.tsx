import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/lib/content/faq";

/**
 * Native <details>/<summary> — keyboard- and screen-reader-accessible by
 * default, no client JS required. FAQPage JSON-LD for this content is
 * emitted separately on the page via lib/seo/schema.faqPageSchema.
 */
export function Objections() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeading
          eyebrow="Before you ask"
          title="The objections we hear most, answered plainly."
          description="No hedging. If an answer doesn't hold up, we'd rather you find out now than three months into a retainer."
        />

        <div className="mt-12 divide-y divide-line dark:divide-line-dark">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {faq.question}
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-faint">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
