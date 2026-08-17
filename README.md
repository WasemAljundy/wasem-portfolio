# Wasem Aljundy Portfolio

Production-oriented foundation for Wasem Aljundy's engineering portfolio. The site uses Next.js App Router, strict TypeScript, Tailwind CSS, server-rendered content, and a validated canonical project manifest.

## Requirements

- Node.js 20.19 or newer (Node 24 LTS recommended)
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

The pre-development asset step creates an optimized portrait and copies the canonical CV to its stable public download path. Set `NEXT_PUBLIC_SITE_URL` only after the production domain is confirmed; leaving it blank intentionally omits domain-dependent canonicals and sitemap entries.

## Quality commands

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run audit:public
npm run test:browser
```

`npm run verify` runs the non-browser quality sequence. Browser tests cover the critical navigation, resume download, external-link safety, accessibility, reduced motion, focus, and representative responsive widths.

## Architecture

- `src/app/`: routes, global layout, metadata routes, robots, sitemap, and social image.
- `src/components/`: small shared UI and global layout primitives.
- `src/features/`: project- and resume-specific compositions.
- `src/content/`: typed content boundary; `planning/project-manifest.json` remains factual truth.
- `src/config/`: centralized owner, navigation, contact, resume, and optional domain configuration.
- `src/lib/seo/`: metadata and truthful structured-data helpers.
- `src/styles/`: primitive → semantic → component design tokens.
- `scripts/`: allow-listed production asset build and public secret/archive audit.
- `tests/`: unit/content validation and Playwright browser journeys.

Server Components are the default. Milestone 1 has no Client Components, CMS, analytics vendor, contact form, animation library, or global state.

## Asset policy

`source-assets/` is immutable. `normalized-assets/` is optional staging. Production pages use only intentionally selected, renamed, resized, and optimized derivatives under `public/`. Supplied screenshots contain demo/test data and do not require automatic PII redaction; genuine secrets and development archives remain prohibited. See `docs/asset-pipeline.md`.

## Milestone boundary

This repository currently contains the engineering/design-system foundation, semantic shell, accessible resume, typed work index, and factual project-summary routes. The final homepage narrative, complete case studies, full screenshot curation, and advanced motion are intentionally deferred to Milestone 2 and later.
