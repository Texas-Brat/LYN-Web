import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { pillars } from "@/lib/content/services";

export function Pillars() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Eleven services. Four questions."
          description="Not a menu of SEO deliverables — a sequence. Each pillar answers the question that decides whether AI recommends you."
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {pillars.map((pillar, pIndex) => (
            <div key={pillar.id} id={pillar.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-ink-faint">
                  0{pIndex + 1}
                </span>
                <h3 className="text-2xl font-medium tracking-tight">{pillar.name}</h3>
              </div>
              <p className="mt-1 text-sm text-ink-faint">{pillar.question}</p>

              <ul className="mt-6 space-y-6 border-l border-line pl-6 dark:border-line-dark">
                {pillar.services.map((service) => (
                  <li key={service.slug}>
                    <p className="font-medium">{service.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-faint">
                      {service.oneLiner}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
