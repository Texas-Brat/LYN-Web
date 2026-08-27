# LYN — AI Visibility site

The marketing site for LYN, an AI visibility agency. We engineer brands so
ChatGPT, Claude, Gemini, Perplexity and Google AI Mode understand, trust and
recommend them.

**Live site:** https://lyn-ai-visibility.netlify.app

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP
+ Lenis (smooth scroll) · next-themes (light/dark). Static export — the whole
site is prerendered HTML, no server required at runtime.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3400
```

Other useful commands:

```bash
npm run typecheck   # tsc --noEmit
npm run lint         # eslint
npm run build        # production build -> out/
```

There's no `index.html` in this repo — that's expected. `app/page.tsx` is
the source; `npm run build` compiles it into `out/index.html` (which is
gitignored, since it's a generated artifact, not something to hand-edit or
commit). The live site is that build output, deployed via Netlify.

## Where things live

```
app/                 Routes. page.tsx is the homepage; layout.tsx is the
                      shared shell (fonts, theme provider, nav/footer).
components/
  sections/           One file per landing-page section (Hero, Pillars,
                      ProofBorn, etc.) — this is where most content edits
                      to the page itself happen.
  ui/                 Small reusable primitives (Button, Tag, Section...).
  viz/                The animated knowledge-graph diagram.
lib/
  brand.ts            Single source of truth: name, tagline, colours,
                      contact info, social links. Change the brand here —
                      never hardcode it in a component.
  content/            Typed data: services, FAQ, the BORN case study
                      numbers, the AI Visibility Score sample dimensions.
                      Edit copy here, not inside JSX.
  seo/                metadata.ts (page <title>/description/OG) and
                      schema.ts (JSON-LD builders — Organization, Service,
                      FAQPage, etc).
public/               Static files served as-is: llms.txt, llms-full.txt,
                      _headers (Netlify response headers).
```

## Making common changes

- **Change brand name, tagline, colours, contact email** → edit
  `lib/brand.ts` (and mirror colour hex values into the `@theme` block at
  the top of `app/globals.css` — the two are kept in sync by hand, not
  generated from one another).
- **Edit page copy** (services, FAQ, case study numbers) → the relevant
  file in `lib/content/`, not the section component itself.
- **Add or reorder a landing-page section** → add a component under
  `components/sections/`, then import and place it in `app/page.tsx`.
- **Add a new page** → new folder under `app/` with a `page.tsx`; call
  `buildMetadata()` from `lib/seo/metadata.ts` for consistent SEO tags.

## Deploying

The site deploys as a static export to Netlify.

```bash
npm run build              # writes to out/
npx netlify deploy --dir=out --prod
```

(First-time setup on a new machine: `npx netlify login`, then
`npx netlify link` to connect to the existing Netlify project.)

**Why static export, not Netlify's Next.js runtime:** at the time this was
set up, Netlify's Next.js Runtime (v5) didn't correctly parse Next 16's
routes manifest, which 404'd every generated route (`robots.txt`,
`sitemap.xml`, the OG image). The site has no server-side logic today (no
API routes, no dynamic segments), so static export sidesteps that
entirely — see the comment in `next.config.ts`. Revert to the standard
Next.js build/deploy path once that's no longer an issue, or the moment
the site needs real server-side logic (a contact form backend, etc).

## Notes for whoever picks this up next

- `lib/brand.ts` and the audit data in `lib/content/audit.ts` are real —
  the BORN Hospitality numbers are from an actual 4-platform audit, not
  placeholder content. Don't round them up or drop the misses; the
  honesty is the point.
- The two locked-domain metadata routes (`app/sitemap.ts`, `app/robots.ts`)
  and `app/opengraph-image.tsx` each need `export const dynamic =
  "force-static"` — required for static export, easy to forget if you add
  a new one.
