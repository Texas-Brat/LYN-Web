import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

// Required for `output: "export"` — this route has no per-request data,
// so it's safe to fully prerender at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: brand.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
