import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqPageSchema, speakableSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { brand } from "@/lib/brand";
import { faqs } from "@/lib/content/faq";

import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Objections } from "@/components/sections/Objections";
import { BookCall } from "@/components/sections/BookCall";

// Everything below the fold is framer-motion-driven ("use client") and not
// needed for LCP, so it's split into its own chunk instead of shipping in
// the initial bundle alongside Hero. SSR stays on (the default) — this is
// pure code-splitting, not client-only rendering — so the audit data and
// case-study text these sections render are still in the initial HTML for
// crawlers and AI answer engines to read.
const LiveAnswerDemo = dynamic(() =>
  import("@/components/sections/LiveAnswerDemo").then((m) => m.LiveAnswerDemo),
);
const TheShift = dynamic(() => import("@/components/sections/TheShift").then((m) => m.TheShift));
const KnowledgeGraphSection = dynamic(() =>
  import("@/components/sections/KnowledgeGraphSection").then((m) => m.KnowledgeGraphSection),
);
const ProofBorn = dynamic(() => import("@/components/sections/ProofBorn").then((m) => m.ProofBorn));
const ScoreTeaser = dynamic(() =>
  import("@/components/sections/ScoreTeaser").then((m) => m.ScoreTeaser),
);

export const metadata: Metadata = buildMetadata({
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  path: "/",
  isHome: true,
});

export default function HomePage() {
  return (
    <>
      {/* Per-service Service schema ships once /services/[slug] pages exist
          (next loop iteration) — emitting it now would point url at a 404. */}
      <JsonLd data={[faqPageSchema(faqs), speakableSchema(["h1", "#proof h2"])]} />
      <Hero />
      <LiveAnswerDemo />
      <TheShift />
      <KnowledgeGraphSection />
      <Pillars />
      <ProofBorn />
      <ScoreTeaser />
      <Objections />
      <BookCall />
    </>
  );
}
