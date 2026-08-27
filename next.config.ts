import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The parent folder holds unrelated npm projects; pin every root
  // inference to this app so Turbopack manifests stay consistent.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  // Static export: the site has zero server-side logic today (no API
  // routes, dynamic segments, or server actions), and Netlify's Next.js
  // Runtime (v5.15.13 at time of writing) doesn't yet parse Next 16's
  // routes-manifest format correctly, which 404s every generated route
  // (robots.txt, icon.svg, opengraph-image) under the SSR adapter. Static
  // export sidesteps that entirely. Revert this once either side catches
  // up, or the moment server-side logic (forms, API routes) is added.
  output: "export",
};

export default nextConfig;
