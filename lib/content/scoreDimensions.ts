/**
 * The ten dimensions the AI Visibility Score measures, per the project
 * brief. Iteration 1 ships this as a labelled sample report on the
 * landing page — the full interactive ~12-question self-assessment is
 * the next loop iteration (see plan Step 3 / iteration order). Sample
 * values here are illustrative and explicitly labelled as such; they are
 * not a real measurement of any named brand.
 */

export interface ScoreDimension {
  key: string;
  label: string;
  sampleValue: number; // 0–100, illustrative
  explainer: string;
}

export const scoreDimensions: ScoreDimension[] = [
  {
    key: "entity-completeness",
    label: "Entity Completeness",
    sampleValue: 62,
    explainer: "How unambiguously AI models can identify what you are and what you do.",
  },
  {
    key: "structured-data",
    label: "Structured Data",
    sampleValue: 40,
    explainer: "schema.org coverage across Organization, Service, Review and FAQ markup.",
  },
  {
    key: "citation-consistency",
    label: "Citation Consistency",
    sampleValue: 55,
    explainer: "How consistently your name, category and location appear across third-party sources.",
  },
  {
    key: "review-health",
    label: "Review Health",
    sampleValue: 71,
    explainer: "Volume, recency and consistency of reviews across platforms.",
  },
  {
    key: "authority-signals",
    label: "Authority Signals",
    sampleValue: 34,
    explainer: "Earned mentions in press, directories and category listicles.",
  },
  {
    key: "ai-recommendation-rate",
    label: "AI Recommendation Rate",
    sampleValue: 48,
    explainer: "How often you actually appear when your buyer's real questions are asked.",
  },
  {
    key: "gbp-strength",
    label: "Google Business Profile Strength",
    sampleValue: 78,
    explainer: "Completeness and activity of the single most-queried local trust signal.",
  },
  {
    key: "website-trust",
    label: "Website Trust",
    sampleValue: 58,
    explainer: "Technical and content signals that mark a site as a reliable source to cite.",
  },
  {
    key: "content-authority",
    label: "Content Authority",
    sampleValue: 29,
    explainer: "Whether your content is written to be extracted and quoted, not just read.",
  },
  {
    key: "local-authority",
    label: "Local Authority",
    sampleValue: 66,
    explainer: "Whether neighbourhood-level visibility compounds into city-wide category authority.",
  },
];
