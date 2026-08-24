# Wasem Aljundy — Engineering Portfolio

[View the production portfolio](https://wasem-portfolio.vercel.app)

A recruiter-focused engineering portfolio for Wasem Aljundy, a Senior Flutter Engineer and mobile product engineer. The site presents real product work through authored case studies, truthful ownership/status labels, an accessible résumé, and a complete curated work index.

## What this repository demonstrates

- Product proof organized for two reading depths: a fast recruiter scan and detailed engineering narratives.
- Five authored case studies covering architecture, integrations, commerce, financial-product contribution, fitness/health data, and humanitarian workflows.
- A manifest-driven index of 24 public portfolio records, clearly separating production/private-client work from portfolio-only archive entries.
- Privacy-safe publication rules for private-client material, including demo-only Aid for Palestine derivatives.
- Semantic, keyboard-accessible, responsive pages with reduced-motion and no-JavaScript fallbacks.
- Static/server-first rendering with one isolated Client Component for an optional fine-pointer cursor companion.
- Production SEO, structured data, social images, sitemap, robots controls, security headers, and automated release checks.

The CV-supported “20+ production applications” claim describes Wasem’s broader professional record. Archive entries in this repository are explicitly labelled portfolio-only and are not counted as production releases.

## Stack

- Next.js App Router 16
- React 19
- TypeScript 5 in strict mode
- CSS Modules and semantic design tokens
- `next/image` with curated WebP derivatives
- Node test runner, Playwright, and axe-core
- Vercel deployment

The content-heavy routes are Server Components by default. Client-side JavaScript is limited to interaction that genuinely requires browser APIs.

## Project structure

```text
src/app/                         Routes, metadata, sitemap, robots, and OG image
src/content/                     Validated project and case-study content
src/features/                    Homepage, work index, case studies, and résumé UI
src/components/                  Shared layout and small UI primitives
planning/project-manifest.json   Canonical factual project source
public/projects/                 Approved optimized project derivatives only
tests/                           Unit, browser, accessibility, and launch checks
docs/                            Asset, authoring, and release documentation
```

The canonical manifest controls project status, ownership, visibility, links, publication tier, and work-index grouping. Archive records intentionally receive no route or external link unless a real destination is approved.

## Local development

Requirements: Node.js 24.x and npm 10 or newer.

```bash
npm install
npm run dev
```

The asset pre-step can rebuild approved derivatives when private originals are present locally. A clean clone remains buildable from committed public derivatives; `source-assets/`, local staging, environment files, and Vercel state are intentionally excluded from Git and deployment uploads.

## Quality gates

```bash
npm run verify
npm run test:browser
npm run measure:performance
```

`npm run verify` checks formatting, lint, TypeScript, unit/content contracts, repository safety, the production build, and public assets. Browser tests cover critical routes, responsive overflow, image decoding, keyboard focus, reduced motion, accessibility, SEO/security behavior, and the contextual-cursor fallback.

To test a deployed URL:

```bash
PLAYWRIGHT_BASE_URL=https://example.vercel.app npm run test:browser
PERFORMANCE_ORIGIN=https://example.vercel.app npm run measure:performance
```

## Deployment

The existing Vercel project uses Node 24.x and requires no custom build command.

```bash
vercel deploy
# Validate the immutable preview URL, then:
vercel promote <validated-preview-url>
```

`NEXT_PUBLIC_SITE_URL` is optional. When absent on Vercel, canonical and social URLs use the stable project production domain. Preview deployments remain non-indexable.

## Content and privacy

- Edit project facts and grouping in `planning/project-manifest.json`; keep its Markdown companion aligned.
- Follow `docs/case-study-authoring.md` for deep narratives.
- Treat original project material as immutable and private.
- Publish only intentionally selected, renamed, resized, and optimized derivatives below `public/projects/<slug>/`.
- Never publish secrets, signing material, development archives, or unsanitized private-client sources.

See `docs/asset-pipeline.md` and `docs/launch-checklist.md` for the maintained release process.
