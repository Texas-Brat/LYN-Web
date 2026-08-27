/**
 * Single source of truth for brand identity.
 *
 * Every page, schema builder, and content module reads from here — never
 * hardcode the name, tagline, colours, or URLs elsewhere. Changing brand
 * direction is a one-file edit.
 *
 * Current direction: LYN.
 * Short, clean, and confident on purpose — a name that gets out of the
 * way of the work rather than explaining itself. The proof does the
 * talking; the name doesn't need to.
 */

export const brand = {
  name: "LYN",
  legalName: "LYN AI Visibility, Inc.",
  shortName: "LYN",
  tagline: "Be the answer, not a result.",
  description:
    "LYN engineers brands so ChatGPT, Claude, Gemini, Perplexity and Google AI Mode understand, trust and recommend them. We don't sell websites or SEO — we sell AI visibility.",
  category: "AI Visibility Agency",

  // Domain is unverified — swap once registered. Every URL in the app
  // reads from siteUrl, so this is the only place a real domain is wired in.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lyn.ai",

  founded: "2026",
  foundingLocation: "Chennai, India",

  contact: {
    email: "hello@lyn.ai",
    // Iteration 1 ships a single landing page — this points at its own
    // contact section. Update to "/contact" once that route exists.
    bookCallUrl: "/#contact",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/lyn-ai",
    twitter: "https://x.com/lyn_ai",
    instagram: "https://www.instagram.com/lyn.ai",
  },

  // Voice: precise, quiet, technical-confident. Explain, never hype.
  voice: {
    doList: [
      "state mechanisms, not adjectives",
      "cite the platform and date behind every claim",
      "show the miss alongside the win",
    ],
    dontList: [
      "generic agency superlatives (\"world-class\", \"cutting-edge\")",
      "unlabelled or fabricated results",
      "SEO jargon where a plain sentence works",
    ],
  },
} as const;

/**
 * Colour tokens — mirrored 1:1 into app/globals.css `@theme`.
 * Keep this object and the CSS block in sync; this copy exists so
 * non-CSS consumers (OG image generation, email, JSON) can read the
 * same values without parsing CSS.
 *
 * Warm cream ground + espresso ink + a muted gold accent — a paper-and-ink
 * palette rather than the cold near-black/neon-accent look most AI-agency
 * sites default to. Same accent role, same "highlight the citation"
 * mechanism, tuned for a warmer, more editorial ground.
 */
export const brandColors = {
  ink: "#17130F",
  inkSoft: "#28221B",
  paper: "#F6F0E1",
  paperDim: "#ECE1C8",
  signal: "#C9A227",
  signalInk: "#1C1509",
  line: "rgba(23, 19, 15, 0.10)",
  lineDark: "rgba(246, 240, 225, 0.14)",
} as const;

export type Brand = typeof brand;
