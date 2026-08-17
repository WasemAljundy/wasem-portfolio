# Wasem Portfolio — Design-System Synthesis

## Decision

Use the persisted UI/UX Pro Max result as design intelligence, not as the portfolio's final visual system. The accepted direction is a calm, editorial engineering portfolio: neutral global surfaces, cobalt interaction accents, project-specific art direction, strong sans-serif typography, spacious rhythm, native scrolling, and selective motion.

The generator output remains unchanged at `design-system/wasem-portfolio/MASTER.md` as an auditable input. This document is the approved project-specific override for implementation.

## Inputs considered

- UI/UX Pro Max master query: `engineering portfolio premium minimal editorial`
- Dials: variance 5, motion 6, density 3
- Targeted searches: Next.js responsive imagery, recruiter-facing selected work, scroll reveal, keyboard focus/reduced motion, and editorial engineering typography
- `apple-design`: immediate feedback, spatial consistency, interruptibility, restrained material use, responsive type, and non-vestibular reduced-motion alternatives
- `web-ui-precision`: semantic structure, intrinsic responsive layout, stable imagery, and render-based visual QA
- `recruiter-conversion`: role/proof/CV/contact clarity before decorative storytelling
- `portfolio-storytelling`: evidence, ownership, constraints, decisions, and outcomes without fabricated metrics or confidential leakage
- `web-accessibility` and `web-performance`: release constraints, not optional polish

## UI/UX Pro Max findings

The generated recommendation classified the project as a luxury/premium brand and proposed:

- spacious density;
- warm neutrals with black and gold;
- Cormorant plus Montserrat;
- Liquid Glass;
- scroll-triggered chapter storytelling;
- repeated chapter CTAs;
- a GSAP stagger using scale, translation, and `back.out(1.4)`;
- visible focus, 4.5:1 text contrast, responsive imagery, and reduced-motion support.

The targeted results added useful implementation guidance:

- use `next/image`, reserve responsive image geometry, and prioritize only the real LCP image;
- place role and selected work early, while keeping contact accessible without relying on card hover;
- keep scroll reveals small, content-visible without JavaScript, scoped, and disabled under reduced motion;
- keep every interactive control visibly focusable and ensure sticky UI does not obscure focus.

## Accepted recommendations

| Recommendation | Decision and use |
| --- | --- |
| Spacious density | Accept. Use generous section rhythm while keeping recruiter proof in the first viewport and immediate continuation below it. |
| Neutral global palette | Accept with a cooler, engineering-oriented palette. Project imagery may introduce local color inside bounded editorial chapters. |
| Editorial storytelling | Accept. Featured projects get varied, image-led compositions rather than identical cards. DOM order stays linear and meaningful. |
| Scroll storytelling | Accept only as progressive enhancement. Native scroll and complete static content are the baseline; no scroll hijacking or required pinning. |
| Restrained translucency | Accept only for small functional chrome such as the site header or an image viewer. Provide opaque fallbacks and contrast checks. |
| Responsive optimized imagery | Accept. Explicit aspect ratios, correct `sizes`, selective eager loading, and progressive galleries are mandatory. |
| Visible focus and reduced motion | Accept as release requirements. Motion-disabled views render directly in their final state. |
| Project-specific visual color | Accept. Featured stories may borrow a controlled accent from the product while preserving global text and interaction semantics. |

## Rejected recommendations

| Recommendation | Reason rejected |
| --- | --- |
| Luxury/fashion category | It frames Wasem as a premium consumer brand instead of a senior engineer. Engineering credibility and product evidence must lead. |
| Cormorant + Montserrat | The pairing reads fashion/luxury and makes technical material less direct. It also adds unnecessary families and weights. |
| Gold primary CTA | Gold reinforces the incorrect luxury classification and weakens the engineering/mobile signal. |
| Liquid Glass as the site style | Blur, refraction, and morphing would compete with project imagery, create contrast risk, and add paint cost. Material is functional and local, never the page's identity. |
| Generic `.card` everywhere | Equal rounded cards flatten editorial hierarchy and reproduce the template aesthetic the brief prohibits. |
| CTA after every chapter | Repeated conversion prompts interrupt the portfolio narrative. Keep a stable primary path in the header/hero and a strong final contact action. |
| GSAP as a foundation dependency | The initial UI does not justify its bundle and lifecycle cost. CSS is enough for baseline transitions; add a small motion dependency only after a concrete interaction proves the need. |
| `back.out(1.4)` stagger and 0.92 scaling | Visible overshoot makes evidence-heavy content feel theatrical, delays scanning, and conflicts with Apple-inspired critical damping. |
| Progress indicator for homepage scroll | A portfolio is not a forced chapter sequence. Native page position and clear headings provide sufficient orientation. |
| “Always transition” rule | Some state changes should be immediate, especially under reduced motion. Feedback is required; animation is contextual. |

## Final visual system

### Typography

- Primary family: `Public Sans` as a variable sans, self-hosted through `next/font` when the resolved Next.js version supports the selected source. System UI is the metric-compatible fallback.
- Technical labels: `ui-monospace` first. Add a custom mono only if repeated code/architecture content proves it necessary.
- Weights: 400 body, 500 labels/navigation, 600–700 headings. Avoid a decorative display face.
- Display scale: fluid `clamp()` roles, approximately 2.75rem on narrow screens through 6.5rem on wide screens, with optical sizing where available.
- Body: minimum 1rem, 1.55–1.7 line height, 60–72 character measure. Never tighten body tracking.
- Large headings use modest negative tracking; labels use modest positive tracking only when legibility remains strong.

### Color and material

Final tokens will use semantic roles rather than raw project colors in components:

| Role | Initial value | Intent |
| --- | --- | --- |
| Canvas | `#F5F6F4` | Quiet, slightly cool off-white |
| Surface | `#FFFFFF` | Raised content and image mats |
| Ink | `#101418` | Primary copy |
| Muted ink | `#56616D` | Secondary copy after contrast verification |
| Border | `#D7DDE2` | Subtle separation |
| Action | `#0B57D0` | Calm cobalt interaction signal |
| Action hover | `#0847AE` | Clear non-layout-shifting state |
| Focus | `#7C3AED` | Highly visible focus independent of action color |
| Dark canvas | `#0C1015` | Cinematic featured-work sections |
| Dark ink | `#F4F7FA` | Text on dark surfaces |

Values are starting tokens and must pass measured contrast in both global and project-specific compositions before acceptance. Project accents cannot redefine focus, error, success, or link meaning.

Material rules:

- opaque surfaces by default;
- one restrained translucent header or viewer layer at most;
- no nested glass surfaces;
- blur never carries essential separation;
- opaque fallback for reduced transparency/high contrast;
- shadows are rare and broad; borders and tonal change do most hierarchy work.

### Spacing and density

- Base rhythm: 4px with primary steps at 8, 12, 16, 24, 32, 48, 64, 96, and 144.
- Page gutter: `clamp(1rem, 4vw, 4rem)`.
- Content max width: approximately 80rem; long-form case-study text stays near 42–48rem.
- Section spacing is fluid and content-led, not a repeated boxed-section preset.
- Touch targets are at least 44px with adequate separation.

### Layout pattern

- Global shell: concise header with Work, Resume, About/Experience anchor as appropriate, and Contact.
- Hero: role/value/proof/CTAs first, portrait as supporting editorial media rather than the main message.
- Featured work: six visually distinct chapters in manifest order. Use alternating scale, crop, tone, and composition while retaining a consistent content contract.
- More work: denser archive after the featured proof, with filters only if they materially improve discovery.
- Case studies: hero, product/context, ownership, decisions, selected flows, quality/trade-offs, outcome/status, verification links, next project.
- Resume: dedicated accessible HTML route plus canonical PDF download; preview must never be the only access path.

### Motion

- Native scroll is the baseline. No scroll hijacking.
- Initial content is present and readable before scripts run.
- CSS transitions handle hover, focus-adjacent polish, header state, and simple reveals.
- Default reveal: opacity plus at most 8–12px translation, roughly 240–360ms, decelerating, and applied to one meaningful group rather than every child.
- Interactive physical elements may use a critically damped spring only when they can be interrupted and redirected.
- Do not animate layout properties. Prefer transform and opacity.
- `prefers-reduced-motion: reduce`: remove translation, scale, parallax, pinning, and spring behavior; use an immediate state or short cross-fade.
- Motion never gates links, copy, or project imagery.

### Responsive behavior

- Linear mobile DOM order is the source of truth; desktop asymmetry is achieved with CSS Grid placement, never semantic reordering.
- Test at 320/375, 768, 1024, 1440, and wide desktop, plus mobile landscape and 200% text zoom.
- Hero stacks copy before portrait on narrow screens.
- Featured compositions simplify to one readable column; no clipped device frames or horizontal page scroll.
- Galleries provide buttons and keyboard access; drag/swipe is optional enhancement only.
- Sticky UI must reserve space and never obscure focused controls.

## Anti-patterns

- Apple page clones, product-name mimicry, or proprietary assets
- fashion/luxury serif branding
- gold-on-black “premium” clichés
- glassmorphism as background decoration
- bento grids for every section
- identical project cards for featured work
- autoplay video or multi-megabyte hero media
- hidden-until-animated content
- long pinning, scroll scrub, parallax, or custom cursors
- skill-logo walls, skill percentages, fake counters, or unsupported metrics
- vague “passionate developer” copy
- genuine secrets, credentials, signing material, or development archives in public assets
- automatic redaction of supplied demo/test screenshots solely because their UI content looks realistic

## Approval gate

Milestone 1 may implement these rules after the missing source assets and content confirmations listed in `planning/milestone-0-plan.md` are resolved or explicitly deferred. The generated master remains evidence of the research pass; this synthesis governs product decisions.
