# Case-study authoring

Deep project stories are typed content in `src/content/case-studies/`. The canonical project manifest remains the factual source for status, ownership, platforms, links, proof points, and approved production assets; a case study interprets that evidence without replacing it.

## Publication workflow

1. Confirm the project is case-study eligible and publicly safe in `planning/project-manifest.json`.
2. Select only necessary originals from immutable `source-assets/`.
3. Add explicit derivative recipes to `scripts/build-assets.mjs`; publish renamed, optimized outputs below `public/projects/<slug>/`.
4. Author a `CaseStudyContent` module and register it in `src/content/case-studies/index.ts`.
5. Use only supported facts. State evidence boundaries when architecture, metrics, team details, or operational behavior are not documented.
6. Run content, browser, accessibility, build, public-asset, and visual checks before treating the route as complete.

## Content contract

Every case study requires SEO copy, hero evidence, snapshot, challenge, ownership, release, outcome, and a next-project destination. Engineering approach, transaction flow, decisions, resilience, technology, and gallery are optional. Omit an unsupported section instead of publishing an empty or speculative one.

All referenced images must be unique and live below the case study's own `/projects/<slug>/` directory. Alternative text describes the visible product state; captions explain why it matters to the engineering story.

## Rendering boundary

The shared case-study composition is server-rendered and statically generated from the manifest and typed content. Add a Client Component only when a future interaction genuinely requires browser state. Decorative motion, carousel libraries, and client-side layout logic are not part of the default case-study system.

Projects without an authored deep story continue to render the compact manifest-driven overview route. This lets future case studies be added one at a time without weakening existing destinations.
