import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { KnowledgeGraph } from "@/components/viz/KnowledgeGraph";

export function KnowledgeGraphSection() {
  return (
    <Section id="graph">
      <Container>
        <SectionHeading
          eyebrow="How AI decides"
          title="A brand, to an AI model, is a graph — not a homepage."
          description="Six categories of signal feed the entity a model builds about you before it ever answers a question. Weak or missing signals are why good businesses get skipped."
        />
        <div className="mt-14">
          <KnowledgeGraph />
        </div>
      </Container>
    </Section>
  );
}
