import { ImageResponse } from "next/og";
import { brand, brandColors } from "@/lib/brand";

// Required for `output: "export"` — this image has no per-request data,
// so it's safe to fully prerender at build time.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — ${brand.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brandColors.ink,
          color: brandColors.paper,
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, background: brandColors.signal, borderRadius: 999 }} />
          <span style={{ fontSize: 28, letterSpacing: -0.5 }}>{brand.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
              display: "flex",
            }}
          >
            Be the answer, not a result.
          </div>
          <div style={{ fontSize: 26, color: "#B6AC98", maxWidth: 780, display: "flex" }}>
            We engineer brands so ChatGPT, Claude, Gemini and Perplexity recommend them.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
