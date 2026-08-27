import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

// Required for `output: "export"` — this route has no per-request data,
// so it's safe to fully prerender at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${brand.siteUrl}/sitemap.xml`,
    host: brand.siteUrl,
  };
}
