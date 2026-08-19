# Wasem Aljundy Portfolio

Production-oriented foundation for Wasem Aljundy's engineering portfolio. The site uses Next.js App Router, strict TypeScript, Tailwind CSS, server-rendered content, and a validated canonical project manifest.

## Requirements

- Node.js 24.19.0 (pinned in `.node-version` and `.nvmrc`)
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
- `src/content/`: typed project and case-study content boundaries; `planning/project-manifest.json` remains factual truth.
- `src/config/`: centralized owner, navigation, contact, resume, and optional domain configuration.
- `src/lib/seo/`: metadata and truthful structured-data helpers.
- `src/styles/`: primitive → semantic → component design tokens.
- `scripts/`: allow-listed production asset build and public secret/archive audit.
- `tests/`: unit/content validation and Playwright browser journeys.

Server Components are the default. The homepage and Jood case study add no Client Components, CMS, analytics vendor, contact form, animation library, or global state. See `docs/case-study-authoring.md` for the incremental deep-story workflow.

## Asset policy

`source-assets/` is immutable. `normalized-assets/` is optional staging. Production pages use only intentionally selected, renamed, resized, and optimized derivatives under `public/`. Supplied screenshots contain demo/test data and do not require automatic PII redaction; genuine secrets and development archives remain prohibited. See `docs/asset-pipeline.md`.

## Milestone boundary

This repository now contains the Milestone 2B homepage narrative, six featured product chapters, and the Milestone 2C flagship Jood case study. Additional deep case studies, any optional advanced motion, and release work remain outside this milestone.
