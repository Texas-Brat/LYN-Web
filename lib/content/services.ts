/**
 * The 11 services, grouped into four pillars a founder can hold in their
 * head at once. Every description states the mechanism, not an adjective —
 * per lib/brand.ts voice rules.
 */

export interface Service {
  slug: string;
  name: string;
  oneLiner: string;
  mechanism: string;
}

export interface Pillar {
  id: string;
  name: string;
  question: string;
  services: Service[];
}

export const pillars: Pillar[] = [
  {
    id: "understand",
    name: "Understand",
    question: "Does AI know what you actually are?",
    services: [
      {
        slug: "ai-visibility-audit",
        name: "AI Visibility Audit",
        oneLiner: "We run your real customer queries against every major AI platform and score what comes back.",
        mechanism:
          "Live sessions against ChatGPT, Claude, Gemini and Perplexity — not a keyword tool proxying search results. You see exactly what today's buyer sees.",
      },
      {
        slug: "entity-optimization",
        name: "Entity Optimization",
        oneLiner: "We make sure every platform resolves your brand to one unambiguous entity.",
        mechanism:
          "Consistent name, category and identifiers across every surface an AI model cross-references — so \"Double Roti\" never gets split into three half-known things.",
      },
      {
        slug: "knowledge-graph-engineering",
        name: "Knowledge Graph Engineering",
        oneLiner: "We wire your brand into the graph AI models actually consult.",
        mechanism:
          "sameAs links, structured relationships, and disambiguation signals that connect your entity to the reviews, citations and profiles that already exist about you.",
      },
    ],
  },
  {
    id: "trust",
    name: "Trust",
    question: "Does AI believe what you say about yourself?",
    services: [
      {
        slug: "structured-data-engineering",
        name: "Structured Data Engineering",
        oneLiner: "Full schema.org coverage, not the FAQ snippet your last agency shipped.",
        mechanism:
          "Organization, Service, Review, FAQ, Breadcrumb and Speakable markup on every page — machine-readable proof of what you claim in prose.",
      },
      {
        slug: "citation-architecture",
        name: "Citation Architecture",
        oneLiner: "We build the third-party mentions AI platforms trust more than your own website.",
        mechanism:
          "Targeted placement in the directories, listicles and local press that Claude's strictest passes count — and your own site's claims don't.",
      },
      {
        slug: "review-intelligence",
        name: "Review Intelligence",
        oneLiner: "We turn scattered reviews into a coherent trust signal.",
        mechanism:
          "Consistency and volume across Google, Maps and category platforms, structured so review sentiment reinforces the entity — not just your star rating.",
      },
    ],
  },
  {
    id: "recommend",
    name: "Recommend",
    question: "Does AI put you forward, unprompted?",
    services: [
      {
        slug: "ai-website-engineering",
        name: "AI Website Engineering",
        oneLiner: "A site built so a language model can read it as cleanly as a person can.",
        mechanism:
          "Definition-first content, explicit entity relationships, and an llms.txt file — the same practices this site itself runs on.",
      },
      {
        slug: "authority-content",
        name: "Authority Content",
        oneLiner: "Content built to answer the exact question your buyer is asking an AI.",
        mechanism:
          "Written to be extracted and cited, not just ranked — the format AI answer engines quote from directly.",
      },
      {
        slug: "local-authority-building",
        name: "Local Authority Building",
        oneLiner: "We close the gap between neighbourhood visibility and city-wide authority.",
        mechanism:
          "The exact gap our own audit found: a brand can rank #1 locally and be invisible city-wide. We build the signals that compound one into the other.",
      },
    ],
  },
  {
    id: "monitor",
    name: "Monitor",
    question: "Will you know the moment it changes?",
    services: [
      {
        slug: "ai-recommendation-monitoring",
        name: "AI Recommendation Monitoring",
        oneLiner: "Scheduled re-runs of your query set, so a lost recommendation is caught in days, not discovered by accident.",
        mechanism:
          "The same live-platform method as the audit, run on a cadence, tracked against your baseline.",
      },
      {
        slug: "monthly-ai-visibility-growth",
        name: "Monthly AI Visibility Growth",
        oneLiner: "Ongoing execution against the audit's findings, one fixable gap at a time.",
        mechanism:
          "Prioritised by what's actually costing you recommendations, re-measured every cycle — not a retainer of generic activity.",
      },
    ],
  },
];

export const allServices: Service[] = pillars.flatMap((p) => p.services);
