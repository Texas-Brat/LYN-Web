import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { brand } from "@/lib/brand";

export function BookCall() {
  return (
    <section id="contact" className="scroll-mt-16 bg-ink py-24 text-paper sm:py-32">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">
          Get started
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Let&rsquo;s find out what AI is saying about you right now.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-paper/70">
          A 30-minute call. We&rsquo;ll run two or three of your real customer queries live,
          on the spot, against ChatGPT and Claude — no deck, no pitch, just the transcripts.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`mailto:${brand.contact.email}?subject=${encodeURIComponent(
              "AI visibility strategy call",
            )}`}
            size="lg"
            variant="signal"
          >
            Book a strategy call
          </Button>
          <CopyEmailButton email={brand.contact.email} />
        </div>
      </Container>
    </section>
  );
}
