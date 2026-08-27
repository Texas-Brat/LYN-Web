/**
 * Objections mapped from the personas in the project brief — founders,
 * restaurant owners, marketing heads, clinics, hotels. Answered plainly,
 * no hedging. Also feeds FAQPage schema on the landing page.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Isn't this just SEO with a new name?",
    answer:
      "No. SEO optimizes for a ranking algorithm that returns ten blue links; you still have to be chosen. AI visibility optimizes for a model that reads everything about you and gives one answer — you're either in that answer or you're invisible. The mechanisms overlap in places (structured data, citations); the objective and the measurement don't.",
  },
  {
    question: "How do you actually measure this? A demo, not a promise.",
    answer:
      "We run your real customer queries against live sessions of ChatGPT, Claude, Gemini and Perplexity — the same audit method behind our BORN Hospitality case study below — and score exactly what each platform says. You see the transcripts, not a proprietary index number.",
  },
  {
    question: "We already rank #1 on Google. Why would AI visibility matter?",
    answer:
      "Our own audit found brands ranking #1 locally on Google Maps that were completely absent from the AI answer to the same question — because the model weighted third-party citations over the ranking signal. Search ranking and AI recommendation are correlated, not identical.",
  },
  {
    question: "What if the AI just gets it wrong about us?",
    answer:
      "That's usually an entity problem, not a bad-luck problem — the model has conflicting or thin information and is doing its best. Entity optimization and structured data are exactly the fix: give the model one unambiguous, well-sourced version of who you are.",
  },
  {
    question: "How long until we see a change in what AI says about us?",
    answer:
      "Structured data and entity fixes can shift within weeks — models re-crawl and re-index continuously. Earned citations and category authority take longer, typically one to two quarters, because they depend on third parties publishing about you. We re-measure every cycle so you see the trend, not just a final number.",
  },
  {
    question: "Do you only work with restaurants and hospitality?",
    answer:
      "Our proof-of-work case study is our own restaurant group because we could measure it with total rigor — including the parts that didn't work. The method transfers directly to ecommerce, healthcare, hospitality and local service businesses; the query sets and citation sources change, the audit mechanism doesn't.",
  },
];
