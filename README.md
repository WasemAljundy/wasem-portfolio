# Wasem Aljundy Portfolio

Production-oriented foundation for Wasem Aljundy's engineering portfolio. The site uses Next.js App Router, strict TypeScript, Tailwind CSS, server-rendered content, and a validated canonical project manifest.

Production: [wasem-portfolio.vercel.app](https://wasem-portfolio.vercel.app)

## Requirements

- Node.js 24.19.0 (pinned in `.node-version` and `.nvmrc`)
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

The pre-development asset step creates an optimized portrait, copies the canonical CV, and rebuilds project derivatives when private source material is available. A clean deployment without `source-assets/` verifies and uses the committed production derivatives.

## Deployment

Vercel detects Next.js and `package-lock.json` without custom build settings. The supported runtime is Node 24.x. Deploy with:

```bash
vercel link
vercel deploy --target=preview
# Validate the immutable preview URL, then:
vercel promote <validated-preview-url>
```

`NEXT_PUBLIC_SITE_URL` is the only optional project variable. When it is blank on Vercel, canonical URLs, sitemap entries, structured-data URLs, and social images use Vercel's stable `VERCEL_PROJECT_PRODUCTION_URL`. Preview deployments remain non-indexable.

To move to a custom domain, add the domain in Vercel, verify DNS/HTTPS, set `NEXT_PUBLIC_SITE_URL` to that confirmed HTTPS origin for Production, redeploy, and recheck canonical, sitemap, robots, and social-image URLs. Never commit `.env.local` or `.vercel/`.

## Quality commands

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run audit:repository
npm run audit:public
npm run test:browser
npm run measure:performance
```

`npm run verify` runs the non-browser quality sequence. Set `PLAYWRIGHT_BASE_URL` and `PERFORMANCE_ORIGIN` to run browser and performance checks against a deployment. Protected previews also accept `VERCEL_AUTOMATION_BYPASS_SECRET` from the environment; never commit its value.

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

`source-assets/` is immutable. `normalized-assets/` is optional staging. Production pages use only intentionally selected, renamed, resized, and optimized derivatives under `public/`. `.vercelignore` prevents canonical originals and local tooling output from entering CLI deployment uploads. Supplied screenshots contain demo/test data and do not require automatic PII redaction; genuine secrets and development archives remain prohibited. See `docs/asset-pipeline.md`.

## Content updates

- Projects, statuses, ownership, and store links: edit `planning/project-manifest.json`, then update its Markdown companion.
- Deep case studies: follow `docs/case-study-authoring.md`.
- Portrait and résumé: replace the canonical root sources and run `npm run assets:build`.
- Project imagery: keep originals private, add an explicit derivative recipe, and commit only approved outputs below `public/projects/<slug>/`.

Use `docs/launch-checklist.md` for release and domain verification.

## Milestone boundary

This repository contains the approved homepage, six featured product chapters, the flagship Jood case study, and the completed Milestone 3 production launch. Additional case studies, analytics, CMS work, and speculative features remain outside the current scope.
