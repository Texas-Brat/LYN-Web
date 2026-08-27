import type { Metadata } from "next";
import { brand } from "@/lib/brand";

interface PageMetadataInput {
  /** Page-specific title. Rendered as "{title} — {brand.name}" except on the homepage. */
  title: string;
  description: string;
  /** Path from site root, e.g. "/services". "/" for the homepage. */
  path: string;
  /** Set true for the homepage so the title isn't suffixed twice. */
  isHome?: boolean;
  noIndex?: boolean;
  ogImagePath?: string;
}

/**
 * Every route calls this to get a fully-formed Metadata object — title,
 * description, canonical URL, OpenGraph, and Twitter card all derived from
 * one input so no page can accidentally ship without one of them.
 */
export function buildMetadata({
  title,
  description,
  path,
  isHome = false,
  noIndex = false,
  ogImagePath,
}: PageMetadataInput): Metadata {
  const url = new URL(path, brand.siteUrl).toString();
  const fullTitle = isHome ? title : `${title} — ${brand.name}`;
  const ogImage = ogImagePath ?? `${path === "/" ? "" : path}/opengraph-image`;

  return {
    metadataBase: new URL(brand.siteUrl),
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
