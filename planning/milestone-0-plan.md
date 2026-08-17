# Wasem Portfolio — Milestone 0 Architecture and Implementation Plan

## Milestone status

Milestone 0 is complete as an audit and decision pass. Broad implementation has not started.

The original Milestone 0 scan found only planning material and AFP staging copies. Milestone 0.5 restored and verified `source-assets/MyWorks/`, `source-assets/AFP/`, the CV, and the canonical portrait. The application and Git metadata are created during Milestone 1.

Local prerequisites detected during this audit: Node.js `v20.17.0`, npm `10.8.2`, and Python `3.11.4`. The detected Node.js version satisfies the current documented Next.js minimum of 20.9, but dependency versions must still be resolved and recorded at bootstrap.

## 1. Product and conversion decision

Primary visitors:

- recruiters and hiring managers who need role, fit, strongest proof, CV, and contact within seconds;
- CTOs, tech leads, and senior engineers who need architecture, ownership, constraints, trade-offs, quality, and shipped-product evidence.

Primary conversion: a qualified visitor opens/downloads the resume or starts contact after seeing credible selected work.

Secondary conversion: a technical reviewer opens a deep case study or verified store/repository link.

Homepage hierarchy:

1. Wasem Aljundy — Senior Flutter Engineer / Senior Mobile Engineer
2. Full-cycle mobile product value and two primary actions: Selected Work and Resume
3. Only verified credibility proof
4. Six featured projects in manifest order
5. Engineering capabilities expressed through ownership and decisions
6. Experience narrative
7. Additional work
8. Resume and contact closure

About content should remain on the homepage initially. Add `/about` only if the supplied CV and narrative contain enough distinct material to justify a route.

## 2. Architecture decision

Use the current stable Next.js App Router with TypeScript and the stable versions resolved at bootstrap. The official Next.js installation guidance currently requires Node.js 20.9 or newer and defaults new App Router projects to TypeScript, Tailwind, ESLint, and Turbopack. Record exact resolved versions in the first Milestone 1 commit rather than hard-coding a stale version in planning.

Architecture principles:

- React Server Components and static generation by default for all content routes.
- Client components are isolated leaves for a mobile menu, interactive gallery, theme preference if approved, and motion that cannot be expressed responsibly in CSS.
- No client-side data fetching for static portfolio content.
- No CMS, database, authentication, or global state in the initial release.
- No contact form initially; use direct, accessible contact links. A form is a later decision requiring validation, anti-abuse, privacy, and delivery ownership.
- Progressive enhancement: navigation, project content, resume access, and contact work without animation JavaScript.
- Static project data is validated at build time and drives routes, metadata, sitemap entries, navigation, and cards from one source.

Rendering plan:

| Route | Rendering | Notes |
| --- | --- | --- |
| `/` | Static Server Component | Editorial homepage; minimal interactive leaves |
| `/work` | Static Server Component | All cleared projects; client filtering only if proven useful |
| `/work/[slug]` | `generateStaticParams` + `generateMetadata` | Only publishable slugs; withheld records cannot generate routes |
| `/resume` | Static Server Component | Accessible HTML resume plus canonical PDF link |
| `/contact` | Optional static route | Add only if richer than the homepage contact section |
| `/not-found` | Static | Clear recovery paths to Work, Resume, and Home |

Dependency policy:

- Required foundation: Next.js, React, TypeScript, Tailwind, ESLint.
- Prefer CSS for simple transitions. Do not install GSAP.
- Evaluate Motion only when an implemented gallery or direct-manipulation prototype requires interruptible spring behavior; document bundle impact before adding it.
- Use platform/browser primitives and inline SVG before adding a component or icon library. If an icon package is justified, choose one consistent tree-shakeable set.
- Use `next/font` and `next/image`; no runtime font CSS import.
- Add testing tools in proportion to behavior: Vitest/Testing Library for content utilities and Playwright for critical navigation/accessibility flows.

## 3. Content model

Create one typed, build-validated source for every project. The current manifest is an input that requires normalization, not production-ready content.

Core fields:

```text
slug, name, alternateName, tier, order, status,
visibility, confidentiality, domains, platforms,
summary, role, ownershipEvidence, timeframe,
challenge, constraints, decisions, engineeringHighlights,
features, technologies, quality, outcome,
hero, gallery, links, seo
```

Key rules:

- `status` uses a controlled public vocabulary: `live`, `private-client`, `in-development`, `prototype`, `archived`.
- `visibility` is independent: `public`, `demo-approved`, `private-summary`, `withheld`.
- Store/repository links are absent until verified; placeholders such as `from-cv` cannot render.
- `technologies`, `metrics`, `employers`, dates, ownership scope, and outcomes remain absent unless sourced.
- Flexible case-study `sections` use a discriminated union so featured stories can vary without duplicating metadata or forcing equal depth.
- Private records carry explicit allowed/forbidden disclosure fields.
- AFP is present in both manifests as a private-client deep case study with demo/test imagery approved for normal derivative curation.

## 4. Repository and file plan

```text
src/
  app/
    layout.tsx
    page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    resume/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    ui/
    layout/
    project/
  content/
    owner.ts
    experience.ts
    projects/
      schema.ts
      index.ts
      <slug>.ts
  lib/
    metadata.ts
    routes.ts
    assets.ts
  styles/
    globals.css
    tokens.css
public/
  images/portrait/
  projects/<slug>/hero/
  projects/<slug>/gallery/
  projects/<slug>/icon/
  resume/wasem-aljundy-cv.pdf
source-assets/
  MyWorks/
  AFP/
  portrait/
  resume/
planning/
  design-system-synthesis.md
  milestone-0-plan.md
  afp-privacy-audit.md
  asset-selection.json
tests/
  unit/
  e2e/
```

Feature-specific composites stay near their feature until reuse is real. UI primitives cannot import portfolio content. Content may reference asset IDs/paths but not JSX.

## 5. Asset normalization plan

1. Use the restored raw sources under `source-assets/` and treat that tree as read-only.
2. Inventory each source with project, dimensions, type, byte size, provenance, permission, sensitivity, and intended use.
3. Resolve source-to-manifest mismatches before copying files.
4. Select only the strongest assets for each narrative; do not bulk-publish archives. `normalized-assets/` is optional staging/curation only and does not need to be manually populated project by project.
5. Copy approved derivatives into lowercase kebab-case paths:
   - `public/projects/<slug>/hero/<purpose>.<ext>`
   - `public/projects/<slug>/gallery/<sequence>-<flow>.<ext>`
   - `public/projects/<slug>/icon/app-icon.<ext>`
6. Preserve aspect ratio and alpha. Never upscale weak screenshots.
7. Produce responsive AVIF/WebP derivatives where they materially reduce transfer; retain PNG only for transparency or fidelity reasons. Declare intrinsic geometry and `sizes`.
8. Eager-load only the confirmed LCP image. All below-fold galleries load progressively.
9. Keep the canonical CV source private/read-only and copy the exact approved PDF bytes to the stable public download path. The HTML resume is a separate accessible representation.
10. AFP follows the same allow-listed derivative pipeline as other projects; its supplied demo/test content does not require automatic redaction.

Required asset manifest fields:

```text
id, project, sourcePath, publicPath, role, width, height,
format, bytes, provenance, rights, sensitivity,
publicationClass, altIntent, approvedBy, reviewedAt
```

## 6. Design direction

`planning/design-system-synthesis.md` is the governing design decision. In summary:

- direct sans-serif engineering voice, not luxury serif branding;
- cool neutral canvas, near-black ink, cobalt action, project-local accents;
- opaque surfaces with narrowly scoped functional translucency;
- 4px base rhythm and spacious, content-led section spacing;
- editorial featured work rather than equal card grids;
- native scrolling, CSS-first motion, critically damped springs only when justified;
- linear mobile content order and desktop asymmetry through CSS Grid;
- complete reduced-motion, keyboard, focus, contrast, zoom, and non-drag alternatives.

## 7. Acceptance criteria and performance expectations

Foundation acceptance criteria:

- role, value, Selected Work, and Resume are present in the initial viewport or immediate continuation at common laptop and mobile sizes;
- every page has one clear `h1`, semantic landmarks, working skip link, logical DOM/focus order, and visible focus;
- all content and navigation work without motion JavaScript;
- all published claims and links have a recorded source;
- no non-allow-listed asset or development archive is emitted into `public/`;
- private-client visibility rules are enforced by the content layer;
- no avoidable horizontal overflow at 320px or 200% zoom;
- reduced motion removes spatial motion and leaves content complete;
- image boxes reserve geometry; no avoidable CLS from images or fonts;
- route metadata, canonicals, sitemap/robots, and structured data are derived from the same content source;
- production build, lint, type-check, tests, and critical Playwright flows pass before later release claims.

Initial performance budgets, to validate against a production build rather than claim in advance:

- minimal shared client JavaScript; target under 80KB compressed excluding framework runtime, with every exception justified;
- no hero autoplay video;
- one above-fold image priority maximum per route;
- no more than two font families and three necessary weights per family; prefer one family;
- LCP image sized for viewport and compressed without visible degradation;
- CLS target below 0.1 and INP/LCP evaluated with current Lighthouse and browser tooling during Milestone 4;
- scroll/interaction work stays compositor-friendly and is tested on a mid-tier mobile profile.

## 8. Risks, missing facts, and assumptions

### Milestone 0 blockers resolved during Milestone 0.5

- `source-assets/MyWorks/` is restored: 343 source files across 18 folders plus two root-level shared backgrounds, including 337 visual candidates and 6 non-public source artifacts.
- The canonical three-page CV is restored and visually/textually inspected; owner profile, experience, skills, education, certifications, contact URLs, and CV-linked project URLs are mapped in `planning/cv-evidence.md`.
- The canonical square portrait is restored at 1254×1254 JPEG and is usable as the personal portrait source pending publication-rights confirmation.
- `source-assets/AFP/` is restored with 21 originals; all 21 normalized AFP files are byte-identical renamed staging copies.
- AFP is reconciled into both canonical manifests with deep-case-study positioning and demo-approved derivative rules.

### Remaining blockers before public content/release

- No Git repository existed at the end of Milestone 0.5; Milestone 1 establishes it.
- Third-party publication rights remain unrecorded for the portrait, store assets, client brand assets, and shared mockup templates; supplied screenshot content itself is confirmed demo/test data.
- Ownership is reconciled: Eureeca is `team-build`; Sezon Store is `full-build`.
- CV-stated metrics and certifications are supported by the supplied CV but lack separate evidence artifacts; confirm which may appear publicly.
- Live store status and external store imagery for store-only projects must be re-verified immediately before publication.

### Facts requiring explicit confirmation or source evidence

- whether the blanket `ownershipDefault` of full-build is accurate for every listed project;
- exact responsibilities, architecture, technologies, testing, release ownership, timeframe, and outcomes per featured project;
- third-party rights for portrait, mockup templates, app icons, logos, and externally sourced store assets before final release;
- live status and current store links for every published project;
- the correct public spelling: `Gader` vs `Gadeer`, and `Aura Fit` vs `AuraFit`;
- canonical site URL, contact channels, availability statement, analytics preference, and whether dark mode is desired;
- final production domain and deployment configuration.

### Working assumptions for Milestone 1

- English-first, with Arabic retained only in project names where part of the identity.
- About remains on home; `/about` is deferred.
- Contact uses direct links, not a form.
- Light mode is the foundation; dark project sections are editorial treatments, not a user theme toggle.
- Vercel is the intended host, but deployment is outside Milestone 1.
- Missing claims render as absent rather than placeholders.

## 9. Exact Milestone 1 plan

1. Use the restored CV, portrait, MyWorks, and AFP originals as immutable inputs outside production paths.
2. Initialize Git so future work has a reviewable baseline.
3. Verify Node.js meets the current Next.js minimum, then bootstrap the current stable App Router project in place with TypeScript, Tailwind, ESLint, `src/`, and import alias.
4. Record exact dependency versions and run the untouched foundation's lint/type/build checks.
5. Create strict TypeScript configuration, scripts for format/lint/type/test/build, and minimal test scaffolding.
6. Implement `tokens.css` from the approved synthesis and load the chosen font through `next/font` with metric-compatible fallback.
7. Build semantic primitives: container, section, typography roles, button/link, status label, media frame, skip link, focus treatment, and reduced-motion utilities.
8. Build the server-rendered root layout, navigation, footer, and not-found route with responsive and keyboard behavior.
9. Normalize the first approved assets through the allow-listed asset manifest. AFP may participate normally in later case-study curation.
10. Implement metadata helpers, canonical base configuration, default Open Graph metadata, `robots.ts`, and `sitemap.ts` shell without publishing unsupported project routes.
11. Add the typed project schema, ownership/visibility/privacy rules, and build-time validation while retaining the canonical JSON manifest as factual truth.
12. Implement the static responsive shell only: no broad homepage sections or cinematic motion yet.
13. Validate formatting, lint, type-check, unit tests, production build, keyboard navigation, reduced motion, 320–1440px layout, 200% text zoom, and browser navigation.
14. Run adversarial diff review and stop for approval before Milestone 2.

## Milestone 1 stop condition

Stop with a production-building foundation, approved tokens, semantic shell, validated content boundary, and first safe asset pipeline. Do not proceed into the full homepage or featured case studies until the foundation and evidence gaps have been reviewed.
