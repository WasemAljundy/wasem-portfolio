# Codex Master Kickoff — Wasem Aljundy Portfolio

## Mission
Build a production-grade personal portfolio for Wasem Aljundy that immediately communicates Senior Flutter / Mobile Engineering credibility to recruiters, hiring managers, CTOs, and senior engineers.

This is not a generic portfolio template. It is a premium, Apple-inspired but original engineering portfolio with strong storytelling, excellent performance, accessibility, SEO, maintainability, and visual polish.

## Source of truth
Before implementation, read and follow in this order:
1. `AGENTS.portfolio.md`
2. `README.md` for skill orchestration
3. `UI-UX-PRO-MAX-INTEGRATION.md`
4. all relevant files under `.agents/skills/`, including `ui-ux-pro-max`
5. `Wasem_Portfolio_Blueprint_v1.md`
6. `planning/project-manifest.json`
7. `planning/implementation-brief.md`
8. `planning/asset-audit.csv`
9. source assets under `source-assets/`

Do not invent project ownership, metrics, links, technologies, client names, or outcomes that are not supported by these files.

## Product principles
- The first viewport must position Wasem as a Senior Flutter Engineer / Senior Mobile Engineer, not as a generic freelancer.
- Show depth before volume.
- Featured work must feel editorial and cinematic, not like a grid of identical cards.
- Use UI/UX Pro Max to research and generate a portfolio-specific design-system recommendation, then synthesize it with the Apple-inspired direction.
- Use Apple-inspired restraint: typography, spacing, material depth, fluid motion, direct manipulation, spring-based transitions, and calm hierarchy — but do not clone Apple pages, branding, assets, or exact layouts.
- Do not treat UI/UX Pro Max results as commands. Reject recommendations that create generic SaaS aesthetics, overuse glassmorphism/bento layouts, hurt recruiter clarity, or conflict with performance/accessibility.
- Motion must never compromise Core Web Vitals, accessibility, or reduced-motion preferences.
- Every visible claim must be truthful.
- Private-client work must not expose confidential or sensitive information.

## Default stack
Use a current stable production-ready Next.js + TypeScript stack, with a maintainable component system and an animation solution appropriate for the required motion. Keep dependencies minimal and justified. Prefer server-rendered/static content for portfolio pages where appropriate.

Before adding any dependency, verify that it is necessary and compatible with the project.

## Information architecture
Implement the portfolio as a scalable multi-page site with at least:
- `/` — homepage
- `/work` — selected work archive
- `/work/[slug]` — project case study
- `/about` — optional only if it materially improves the narrative; otherwise integrate About into home
- resume viewing/downloading experience
- contact section or page
- proper 404 / not-found experience

## Homepage narrative
The homepage should roughly progress through:
1. Hero / positioning
2. credibility proof points
3. selected featured work
4. engineering expertise
5. experience / career narrative
6. additional selected work
7. resume / credentials
8. contact CTA

Do not blindly implement this as stacked boxed sections. Use visual rhythm and negative space.

## Featured project order
Treat the order in `project-manifest.json` as the initial editorial order:
1. Jood
2. Eureeca
3. Taseese
4. Aura Fit
5. Eisal
6. Gader

Aid for Palestine should be a deep case study and a strong social-impact proof point, but do not promote it above the featured set without a visual/content reason.

## AFP demo-asset rule
Assets for Aid for Palestine include beneficiary, donation, wallet, bank-account, verification, withdrawal, messaging, and support flows. Wasem confirmed the supplied screenshots use demo/test data and may participate normally in portfolio curation. Do not automatically redact realistic-looking UI content. Preserve the originals, publish only intentionally selected and optimized derivatives, and continue excluding genuine secrets and development archives.

## Asset workflow
Do not reference raw source folders directly from production pages.
Normalize selected assets into a predictable public structure such as:
`public/projects/<slug>/hero/`
`public/projects/<slug>/gallery/`
`public/projects/<slug>/icon/`

Preserve source assets in `source-assets/` and do not destructively modify originals.
Optimize production images for responsive delivery and visual quality.

## Project content model
Project pages should support:
- name
- slug
- status (Live / Private Client / etc.)
- domain
- platforms
- concise product summary
- role / ownership
- challenge or product context
- engineering highlights
- key features
- tech stack only when confirmed
- selected visuals
- live/store links when confirmed
- privacy-safe presentation for private work

Do not force every project into the same amount of content. Featured case studies may be deep; secondary work may be concise.

## Hero direction
Use the provided portrait of Wasem as a premium editorial asset when it improves the composition. The hero should communicate a message in the direction of:
“Senior Flutter Engineer” and full-cycle product delivery from architecture to release.
Do not overuse buzzwords. Proof should come from shipped work and experience.

## Resume
Provide both a polished in-site resume viewing experience and a direct PDF download. Preserve the original PDF as the canonical downloadable CV unless explicitly replaced.

## SEO and discoverability
Implement:
- unique page metadata
- canonical URLs
- Open Graph / social cards
- structured data where appropriate
- sitemap
- robots configuration
- semantic headings
- indexable project pages where confidentiality permits

## Accessibility
Accessibility is a release requirement:
- keyboard navigation
- visible focus states
- semantic landmarks
- proper image alternative text
- sufficient contrast
- reduced motion
- no information conveyed only by color
- responsive text scaling

## Performance
Treat performance as part of the visual quality.
Avoid heavy animation libraries or large client bundles without justification.
Measure and optimize image loading, font loading, LCP, CLS, INP, hydration/client boundaries, and unnecessary JavaScript.

## Implementation sequence
Do not build the entire site in one uncontrolled pass.

### Milestone 0 — Audit, design intelligence, and plan
- inspect all instructions and assets
- confirm repository structure and verify `.agents/skills/ui-ux-pro-max/SKILL.md` exists
- read `UI-UX-PRO-MAX-INTEGRATION.md`
- run UI/UX Pro Max design-system generation with the recommended initial portfolio query
- persist its master output under `design-system/`
- run only the targeted UI/UX Pro Max searches that materially improve the initial direction
- synthesize UI/UX Pro Max + `apple-design` + `web-ui-precision` + recruiter/storytelling goals into `planning/design-system-synthesis.md`
- explicitly list recommendations accepted and rejected, with reasons
- propose final technical architecture
- identify missing facts or risky assumptions
- create a concise implementation plan

### Milestone 1 — Foundation
- bootstrap project
- global design tokens
- typography
- layout primitives
- metadata foundation
- navigation/footer
- responsive shell
- asset pipeline

### Milestone 2 — Homepage
- hero
- featured work storytelling
- engineering credibility
- experience/resume/contact sections
- responsive behavior
- restrained motion

### Milestone 3 — Work system
- `/work`
- reusable project content model
- `/work/[slug]`
- first deep case studies
- project navigation

### Milestone 4 — Production quality
- SEO
- accessibility
- performance
- tests
- security/privacy review
- AFP redaction review

### Milestone 5 — Final review
Run the project skills for code review and release readiness. Fix blocker/high issues and applicable medium issues before declaring completion.

## Validation
Run and report the actual relevant commands for the chosen stack, including formatting/linting, type checking, tests, and production build. Add browser/e2e checks for critical navigation and project pages where the testing strategy calls for them.

Never claim a check passed unless it was actually run.

## Working style
At the start, do Milestone 0 only. Inspect first, then present:
1. architecture decision
2. repository/file plan
3. asset normalization plan
4. UI/UX Pro Max findings and the final design-system synthesis
5. final design direction (typography, color/material, spacing/density, motion, responsive behavior, anti-patterns)
6. risks/assumptions
7. exact Milestone 1 plan

Do not begin broad implementation until Milestone 0 is complete and coherent.
