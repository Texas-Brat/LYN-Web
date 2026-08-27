/**
 * BORN Hospitality AI-visibility audit — our proof-of-work case study.
 *
 * Source: born_ai_visibility_audit.md (Browser-MCP driving live Perplexity,
 * ChatGPT, Gemini and Claude.ai; logged-out where the platform allows it).
 * BORN is our own eight-outlet, six-brand restaurant group in Chennai and
 * Pondicherry — portfolio work, not an arm's-length client, and labelled
 * as such everywhere it appears.
 *
 * Every quote below is verbatim from that audit and stamped with its
 * platform and date. Nothing here is invented, and the misses are kept
 * alongside the wins on purpose — an agency that only shows wins is asking
 * to be disbelieved.
 */

export type Platform = "Perplexity" | "ChatGPT" | "Gemini" | "Claude";

export const auditMeta = {
  subjectName: "BORN Hospitality",
  subjectDescription:
    "8 outlets, 6 restaurant and café brands, across Chennai and Pondicherry — our own portfolio.",
  method:
    "Browser-MCP driving live Chrome sessions against each platform's actual consumer product (not an API proxy), logged out where the platform permits it.",
  platformsTested: ["Perplexity", "ChatGPT", "Gemini", "Claude"] as Platform[],
  totalQueriesRun: 57,
  dateRange: "19 Jun 2026 – 1 Jul 2026",
} as const;

export interface PlatformResult {
  platform: Platform;
  hits: number;
  total: number;
  hitRate: number; // 0–1
  note: string;
}

/** Final hit rates, strictest grader last. Claude's "strict" pass excludes
 *  any BORN mention sourced only from eatatborn.com itself. */
export const platformResults: PlatformResult[] = [
  {
    platform: "Perplexity",
    hits: 7,
    total: 12,
    hitRate: 7 / 12,
    note: "Wins concentrate in secondary tiers, rarely the headline pick.",
  },
  {
    platform: "ChatGPT",
    hits: 7,
    total: 13,
    hitRate: 7 / 13,
    note: "Most BORN-friendly platform tested; still misses on 6 of 13 queries.",
  },
  {
    platform: "Gemini",
    hits: 7,
    total: 16,
    hitRate: 7 / 16,
    note: "Rewards Google-Maps star rating over earned-media presence — a crutch that vanishes on stricter platforms.",
  },
  {
    platform: "Claude",
    hits: 5,
    total: 16,
    hitRate: 5 / 16,
    note: "Strictest grader — the only platform that separates self-published claims from third-party citations.",
  },
];

export interface BrandStanding {
  brand: string;
  platformsWon: number;
  platformsTested: number;
  ownedQuery: string;
  status: "bulletproof" | "strong" | "fragile" | "gap";
}

export const brandStandings: BrandStanding[] = [
  {
    brand: "CherryPond",
    platformsWon: 4,
    platformsTested: 4,
    ownedQuery: "best garden cafe & bar in Pondicherry",
    status: "bulletproof",
  },
  {
    brand: "SORTD",
    platformsWon: 4,
    platformsTested: 4,
    ownedQuery: "best working cafe in Chennai",
    status: "bulletproof",
  },
  {
    brand: "Double Roti",
    platformsWon: 3,
    platformsTested: 4,
    ownedQuery: "best burgers in Chennai",
    status: "strong",
  },
  {
    brand: "Double Dashi",
    platformsWon: 2,
    platformsTested: 4,
    ownedQuery: "best Japanese restaurant in Chennai",
    status: "fragile",
  },
  {
    brand: "Jolly Indian",
    platformsWon: 2,
    platformsTested: 4,
    ownedQuery: "best Indian restaurant in Alwarpet",
    status: "fragile",
  },
  {
    brand: "FUFU",
    platformsWon: 2,
    platformsTested: 4,
    ownedQuery: "best pan-Asian restaurant in Alwarpet",
    status: "gap",
  },
];

export interface FeaturedCase {
  id: string;
  kind: "win" | "miss";
  query: string;
  platform: Platform;
  date: string;
  quote: string;
  brand: string;
  headline: string;
  explanation: string;
}

/** Curated win/miss pairs, verbatim from the audit, for the live-answer demo. */
export const featuredCases: FeaturedCase[] = [
  {
    id: "cherrypond-pondicherry-win",
    kind: "win",
    query: "best garden cafe and bar in Pondicherry",
    platform: "ChatGPT",
    date: "2026-06-19",
    quote: "Best overall garden café + bar",
    brand: "CherryPond",
    headline: "CherryPond is the #1 answer on all four platforms.",
    explanation:
      "Perplexity, ChatGPT, Gemini and Claude all named CherryPond for this query — the only brand in the audit with a clean sweep. It owns one exact phrase completely.",
  },
  {
    id: "sortd-working-cafe-win",
    kind: "win",
    query: "best working cafe in Chennai",
    platform: "ChatGPT",
    date: "2026-06-19",
    quote: "If I had to choose just one, Sortd Cafe",
    brand: "SORTD",
    headline: "SORTD is the single-pick answer, not a list entry.",
    explanation:
      "ChatGPT didn't just include SORTD — when forced to pick one café, it picked SORTD. That's the difference between being cited and being recommended.",
  },
  {
    id: "double-roti-pizza-miss",
    kind: "miss",
    query: "best pizza in Chennai",
    platform: "Claude",
    date: "2026-07-01",
    quote: "Lina's, Fat Boy, Toscano, Focaccia, Little Italy",
    brand: "Double Roti",
    headline: "Double Roti serves pizza. No platform surfaces it for pizza.",
    explanation:
      "Zero of four platforms named Double Roti for a category it actually competes in — a fixable earned-media gap, not a product gap. This is the kind of miss a visibility audit exists to catch.",
  },
  {
    id: "double-dashi-maps-crutch",
    kind: "miss",
    query: "best Japanese restaurant in Chennai",
    platform: "Claude",
    date: "2026-07-01",
    quote: "Hokkaido, Dahlia, Teppan, GOGO Ramen",
    brand: "Double Dashi",
    headline: "A 4.7-star Maps rating isn't earned media.",
    explanation:
      "Double Dashi wins this query on Gemini and ChatGPT — but only because of its Google Maps rating. Claude's cold, citation-only pass excludes it entirely: zero third-party listicle placements for Japanese or sushi in Chennai.",
  },
];

export const keyInsights = [
  {
    title: "Every win is long-tail, not head-term.",
    body: "CherryPond and SORTD each dominate one exact phrase — but lose broader queries like \"best cafe in Chennai.\" No BORN brand owns a high-volume head term yet. \"4/4 bulletproof\" means dominant on a thin slice, not category-wide.",
  },
  {
    title: "A Maps rating is not a citation.",
    body: "Gemini and ChatGPT reward Double Dashi's 4.7-star Google rating. Claude's strict, cold pass — which counts only third-party earned mentions — shows zero listicle presence for the same brand. Remove the ratings crutch and the visibility disappears.",
  },
  {
    title: "Self-published mentions get excluded by the strictest platforms.",
    body: "Claude explicitly discounted a FUFU mention because it traced back only to eatatborn.com. The platforms sophisticated enough to matter most are also sophisticated enough to detect a brand talking about itself.",
  },
  {
    title: "Local presence and city-wide authority are different assets.",
    body: "FUFU ranks #1 on ChatGPT for \"pan-Asian in Alwarpet\" (its own neighbourhood) but is absent from \"best pan-Asian restaurant in Chennai.\" Local visibility doesn't automatically compound into category authority.",
  },
] as const;
