import { brand } from "@/lib/brand";

/**
 * JSON-LD builders — one function per schema.org type we emit.
 *
 * Rendered as native <script type="application/ld+json"> tags (Next's
 * documented pattern; next/script is for executable JS, not structured
 * data). Every builder returns a plain object; call `jsonLdScript()` to
 * turn it into sanitized, injectable HTML.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaOrg = Record<string, any>;

/** Sanitizes and serializes a JSON-LD object for a dangerouslySetInnerHTML script tag. */
export function jsonLdScript(data: SchemaOrg): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const org = {
  "@type": "Organization",
  "@id": `${brand.siteUrl}/#organization`,
  name: brand.name,
  legalName: brand.legalName,
  url: brand.siteUrl,
  description: brand.description,
  foundingDate: brand.founded,
  foundingLocation: {
    "@type": "Place",
    name: brand.foundingLocation,
  },
  email: brand.contact.email,
  sameAs: [brand.social.linkedin, brand.social.twitter, brand.social.instagram],
} as const;

export function organizationSchema(): SchemaOrg {
  return { "@context": "https://schema.org", ...org };
}

export function websiteSchema(): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${brand.siteUrl}/#website`,
    url: brand.siteUrl,
    name: brand.name,
    description: brand.description,
    publisher: { "@id": `${brand.siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export interface ServiceInput {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}

export function serviceSchema(input: ServiceInput): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${brand.siteUrl}/services/${input.slug}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": `${brand.siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Worldwide" },
    url: `${brand.siteUrl}/services/${input.slug}`,
  };
}

export interface FaqInput {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqInput[]): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbInput {
  name: string;
  path: string;
}

export function breadcrumbListSchema(items: BreadcrumbInput[]): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, brand.siteUrl).toString(),
    })),
  };
}

export interface ArticleInput {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imagePath?: string;
}

export function articleSchema(input: ArticleInput): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: new URL(input.path, brand.siteUrl).toString(),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName ?? brand.name,
    },
    publisher: { "@id": `${brand.siteUrl}/#organization` },
    image: input.imagePath ? new URL(input.imagePath, brand.siteUrl).toString() : undefined,
    mainEntityOfPage: new URL(input.path, brand.siteUrl).toString(),
  };
}

export interface ReviewInput {
  authorName: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  itemReviewedName: string;
  datePublished: string;
}

export function reviewSchema(input: ReviewInput): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: input.authorName },
    reviewBody: input.reviewBody,
    datePublished: input.datePublished,
    itemReviewed: { "@type": "Organization", name: input.itemReviewedName },
    reviewRating: {
      "@type": "Rating",
      ratingValue: input.ratingValue,
      bestRating: input.bestRating ?? 5,
    },
  };
}

export interface PersonInput {
  name: string;
  jobTitle: string;
  description?: string;
  imagePath?: string;
  sameAs?: string[];
}

export function personSchema(input: PersonInput): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    worksFor: { "@id": `${brand.siteUrl}/#organization` },
    image: input.imagePath ? new URL(input.imagePath, brand.siteUrl).toString() : undefined,
    sameAs: input.sameAs,
  };
}

/** Marks the CSS selectors AI assistants and voice search should read aloud/extract. */
export function speakableSchema(cssSelectors: string[]): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}
