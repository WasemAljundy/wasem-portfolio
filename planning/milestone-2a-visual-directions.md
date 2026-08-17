# Milestone 2A — Homepage Visual Directions

## Scope

This is an art-direction and feasibility study only. It does not authorize a final homepage implementation, change the current homepage, or publish project assets. `source-assets/` remains immutable. Production derivatives would be selected and generated during Milestone 2B only after the direction is approved.

The audience is deliberately dual-layered:

- Recruiters and hiring managers should understand Wasem's level, specialization, strongest work, résumé path, and contact path within 30–60 seconds.
- CTOs, engineering leads, and senior developers should find clear entry points into ownership, architecture, production constraints, and technical decisions without turning the homepage into documentation.

The target feeling is calm confidence: a senior mobile engineer who has shipped varied products, understands product quality, and can explain engineering decisions precisely.

## Evidence and asset feasibility

The proposals are grounded in the current manifest, CV-supported claims, approved design-system synthesis, portrait, and inspected project imagery.

| Project  | Available visual source                                                                                    | Observed strengths                                                                                                              | Direction constraint                                                                                                                                         |
| -------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Portrait | One square, high-resolution environmental portrait with Wasem, laptop, office shelving, and green clothing | Professional, warm, credible, enough context for an editorial crop                                                              | Preserve the environmental context. Use a rectangular crop; do not turn it into a circular avatar or imply that a transparent cutout exists.                 |
| Jood     | 10 polished 1242×2688 portrait marketing screens                                                           | Consistent black/teal system, existing phone treatment, strong browse, details, booking, payment, orders, and QR flows          | Do not place a second device frame around the existing marketing compositions. One or two screens are enough at a time.                                      |
| Eureeca  | Current Google Play listing; no local source files                                                         | Official listing exposes a substantial screenshot set and supports a high-trust fintech chapter                                 | Use official imagery conservatively. Its copy and ownership label must say `Team build` or `Collaborative production engineering`; never imply a sole build. |
| Taseese  | Current App Store listing; no local source files                                                           | Official iPhone/iPad imagery and a content-rich education structure                                                             | Use official imagery; emphasize hierarchy, progression, and assessment rather than inventing technical diagrams from screenshots.                            |
| Aura Fit | 42 local visual candidates: 34 portrait and 8 landscape                                                    | Five-device dark composites, raw 1440×3120 screens, onboarding, food analysis, workouts, progress, and notifications            | The five-device composite is viable at large widths only. Mobile should use one primary raw screen plus one supporting screen.                               |
| Eisal    | 29 local visual candidates: 24 portrait and 5 landscape                                                    | Five-device green composites, raw light and dark screens, invoices, warranties, insights, multilingual settings, and biometrics | Use the light/dark contrast as product evidence. Avoid presenting realistic demo values as portfolio metrics.                                                |
| Gader    | Current Google Play listing; no local source files                                                         | Official screenshot set and a clear consultation journey spanning expert selection, text, voice, and video                      | Use official imagery and close the sequence with human communication/social-impact tone rather than a generic dark finale.                                   |

The local imagery is strong enough to support all three directions, but not with equal visual density for all six products. The design must deliberately vary chapter scale and avoid pretending that Eureeca, Taseese, and Gader have the same local art package as Jood, Aura Fit, and Eisal.

## Design-intelligence synthesis

Three separate UI/UX Pro Max system searches were run for editorial engineering, cinematic product showcase, and engineering/product hybrid directions.

Accepted findings:

- spacious, content-first density;
- high-contrast typography, visible focus, semantic structure, and minimum 44px target sizing;
- neutral global canvas so real product screens provide most of the visual color;
- scroll storytelling only when the static reading order is complete and understandable;
- responsive images with explicit geometry, appropriate derivatives, and no horizontal page scroll;
- small, non-blocking transitions with complete reduced-motion fallbacks;
- proof close to the hero and a stable résumé/contact path.

Rejected findings:

- corporate security badges, logo carousels, testimonial modules, or sales-language CTAs;
- a masonry portfolio grid as the primary work presentation;
- brutalism, sharp-corner anti-design, and deliberately raw presentation;
- replacing Public Sans with Atkinson Hyperlegible, Archivo, or Space Grotesk without a product need;
- green as the global CTA color instead of the approved cobalt action token;
- GSAP, `back.out` overshoot, scale-in grids, scroll progress indicators, or a CTA after every chapter;
- horizontal-scroll journeys or any interaction that converts native vertical reading into a required gesture.

All directions therefore retain the current Public Sans foundation, semantic tokens, cool-neutral canvas, cobalt interaction color, purple focus treatment, native scroll, and server/static-first architecture.

---

## Direction A

### Name

**The Engineering Edit**

### Core idea

A premium editorial profile in which typography, pacing, captions, and deliberate asymmetry carry the identity. Projects read like six magazine-quality features rather than six promotional tiles. The visual system feels authored and senior without resembling a design-agency portfolio because every composition is anchored to product role, status, ownership, and engineering evidence.

Its distinct move is editorial hierarchy: project number, product name, concise premise, one dominant image, and a quiet technical caption share a flexible grid. Images are important, but copy controls the narrative.

### Hero

- A small opening line reads `Wasem Aljundy — Senior Flutter Engineer` rather than separating the name from the role across decorative elements.
- The headline is direct: **“I engineer mobile products from architecture to release.”** Suggested desktop break: `I engineer mobile products / from architecture to release.` Mobile wraps naturally without forced nonbreaking phrases.
- Supporting copy uses one sentence: `Flutter and Android engineering across production products in commerce, fintech, education, health, and communication.`
- A narrow proof line can show `4+ years · 20+ production applications · iOS and Android`, using the CV-supported wording and not animated counters.
- Primary action: `View selected work`. Secondary: `View résumé`. `Contact me` remains visible but quieter.
- The portrait occupies an off-axis vertical rectangle, approximately 4:5 on desktop. The crop keeps Wasem's face, upper torso, laptop edge, and some shelving; it does not erase the real office context. A fine caption may identify `Gaza, Palestine` and the role.
- Navigation remains visually quiet above the hero. The hero begins immediately; no intro animation or splash screen.
- The first-scroll transition is typographic: the final hero baseline aligns with a slim “Selected work / 01–06” index before the first project.
- On mobile, copy precedes a wider 5:4 portrait crop. Proof becomes a two-line list beneath the supporting sentence, and the primary CTA remains first in DOM and visual order.

### Homepage sequence

1. Editorial hero and proof line.
2. Selected-work index: six names, domains, and statuses in one readable table-of-contents treatment.
3. Six featured project chapters.
4. Engineering capability essay: architecture, integrations, quality, and release responsibility in four concise columns.
5. Experience timeline with organization, role, dates, and one evidence-led responsibility per entry.
6. More work as a compact text-and-thumbnail index, not a card wall.
7. Résumé invitation with HTML and PDF paths.
8. About and final contact.

The sequence favors comprehension and seniority. It is the least cinematic direction, but it creates the strongest sense of authorship and judgment.

### Featured work treatment

- **Jood — lead feature:** a dark, almost-black double spread. One full-height marketing screen interrupts the grid while a second detail/payment screen is cropped as supporting evidence. Copy names the transactional journey and full-build ownership.
- **Eureeca — dossier:** a disciplined light or deep-navy layout with one official store screen, a narrow deal-information crop, and a visible `Team build` line. A side note describes supported Flutter bug/performance contributions without saying “built end to end.”
- **Taseese — learning sequence:** a bright, paper-like chapter using three differently sized official screens to read as `stage → subject → assessment`. Small numbered captions replace a generic carousel.
- **Aura Fit — field notes:** a dark graphite/violet feature. Two raw screens show personalization and analysis, while a wide composite appears as a cropped end plate on large screens only.
- **Eisal — paired themes:** a pale green editorial spread with one light workflow screen and one dark invoice/insights screen. The contrast communicates product-system depth more effectively than five equal phones.
- **Gader — closing interview:** warm neutral background, one dominant consultation screen, two small communication-flow details, and a closing statement about full-build ownership and social-impact communication.

The six chapters reuse a content contract, not a layout. Headings, ownership/status metadata, CTA language, image captions, and technical-note placement remain consistent while composition changes.

### Image system

- Raw screenshots sit on quiet image mats with a 16–24px visual radius; the screenshot itself is not rounded more than its real UI warrants.
- Existing marketing/mockup files are treated as finished compositions and never nested in another hardware frame.
- Device frames are optional and neutral: thin dark graphite hardware, no branded proprietary chrome, no reflective 3D rendering.
- Shadows are broad and low-opacity. Most separation comes from tonal surfaces and spacing.
- No reflections. They add no evidence and weaken the editorial quality.
- Desktop density: one dominant image plus one or two supporting crops per chapter.
- Mobile density: one dominant screen visible immediately; the second screen follows in normal flow. No overlapping elements extend beyond the viewport.
- Crops may isolate a meaningful flow from wide five-device composites, but each derivative must preserve legibility and never imply a screen state that is not present.

### Typography

- Keep Public Sans for display, headings, body, and navigation.
- Display size is restrained relative to the other directions: approximately `clamp(3rem, 7vw, 6.5rem)` with 0.94–1.0 leading and modest negative tracking.
- Project numbers and metadata use 12–14px labels with slightly positive tracking, never below accessible reading size for substantive content.
- Body measure stays around 60–68 characters. Engineering notes use shorter 38–48 character measures.
- Weight creates hierarchy: 650–700 display, 600 project headings, 400 body, 500 labels.

### Color/material

- The global canvas remains `#F5F6F4`, with white surfaces and near-black ink.
- Cobalt is reserved for links, primary actions, and active navigation—not decoration.
- Project color appears as one bounded surface or image mat: Jood teal-black, Eureeca navy, Taseese sky/cobalt, Aura Fit muted violet-graphite, Eisal deep green, Gader warm neutral with cobalt.
- Material is mostly opaque. The header may retain the existing restrained translucent token with an opaque reduced-transparency fallback.
- Borders and typography, not glass cards, create structure.

### Motion

- Section headings and one image group may enter with opacity and no more than 8px vertical translation.
- Project images do not continuously float. Hover can shift an image caption or border color without changing layout bounds.
- The selected-work index can highlight the corresponding chapter through normal anchor focus/hover states; no required scroll spy.
- Navigation remains native and predictable. Anchor movement is smooth only when reduced motion is not requested.
- Reduced-motion mode renders all content in place and uses immediate state changes or short opacity cross-fades.
- CSS is sufficient. No motion dependency is justified.

### Recruiter experience

Within the first viewport, a recruiter gets name, target level, specialization, full-cycle positioning, proof, work, résumé, and contact paths. The selected-work index makes breadth scannable before the large chapters begin. Status and ownership are never hidden behind hover.

In 30–60 seconds, the recruiter can scan the six names and domains, inspect Jood as the strongest opening proof, and jump to résumé or contact. A technical visitor follows an `Engineering notes` link from a chapter into its case-study route.

### Engineering credibility

- Ownership/status appears directly under every project name.
- One concise `Engineering lens` caption per chapter exposes a supported complexity: transaction flow, performance work, content hierarchy, health integrations, document workflows, or real-time communication.
- Capability and experience sections synthesize recurring engineering patterns rather than dumping technologies.
- Technical depth is progressively disclosed through the case-study CTA; the homepage never displays decorative code snippets.

### Mobile behavior

- **375px:** linear reading order; 5:4 portrait; one project screen at a time; metadata wraps as text rather than shrinking into chips; 16px body minimum; 44px actions.
- **768px:** six-column editorial grid; portrait and hero copy may sit side by side; project compositions use a 4/2 or 3/3 split with at most two visible screens.
- **1024px:** 12-column grid introduces asymmetry and margin notes without reordering the DOM. Long chapters stay under a controlled 80rem container.
- **1440px:** negative space increases, not text measure. One dominant image may break the text grid while remaining inside the page container; five-device composites are viable only here.

### Risks

- It can feel too quiet for a mobile-product portfolio. Control: Jood, Aura Fit, and Eisal receive materially larger image moments.
- Editorial asymmetry can become art-directed fragility. Control: use three reusable composition families rather than six bespoke CSS systems.
- Small metadata can become inaccessible. Control: never use tiny editorial type for required meaning; maintain measured contrast and zoom resilience.
- The direction may underplay the breadth of visual products. Control: the selected-work index and project-specific color shifts expose breadth before detail.

---

## Direction B

### Name

**Products in Motion**

### Core idea

The applications are the visual protagonists. The homepage moves through six large product stages with controlled shifts in background, scale, and image composition. Wasem's identity frames the work, but the product screens do most of the persuasion.

This is substantially different from Direction A: chapters occupy near-viewport-width fields, copy is compressed, and screenshots lead before technical annotation. It is the most memorable and emotionally immediate option, and also the most dependent on image curation.

### Hero

- The hero is a split cinematic stage: concise identity and actions on the left; a controlled constellation of three real screens on the right/background.
- Headline: **“Production mobile experiences, engineered end to end.”** Wasem's name and `Senior Flutter Engineer` remain explicit above it.
- Supporting copy is limited to two lines and names Flutter, Android, architecture, and release.
- Primary CTA: `Explore the products`. Secondary: `View résumé`. Contact remains visible in navigation.
- The portrait is a medium rectangular inset, not the dominant visual. It sits between identity copy and product imagery with a hard, intentional crop and no circular mask.
- The hero product montage uses only Jood, Aura Fit, and Eisal because those are the local sources. It cannot imply that one montage belongs to one product. Each screen gets a small visible product label.
- The first scroll moves from the mixed montage into Jood's full visual field; there is no pinned hero or delayed reveal.
- Mobile discards the montage: copy, actions, portrait, then a single Jood image preview. This is a deliberate composition change, not a scaled desktop collage.

### Homepage sequence

1. Identity plus three-product visual hero.
2. Jood full-width product stage.
3. Eureeca controlled fintech stage.
4. Taseese light educational stage.
5. Short engineering interlude: recurring production responsibilities and verified experience proof.
6. Aura Fit immersive dark stage.
7. Eisal dual-theme product stage.
8. Gader communication/social-impact stage.
9. Experience, more work, résumé, and contact in a calmer neutral closing region.

The credibility interlude prevents six consecutive showcases from reading as UI design work with no engineering authorship.

### Featured work treatment

- **Jood:** two tall marketing screens at different depths on black/green. Browse is dominant; booking/payment or QR sits partly behind. Product copy stays under 55 words.
- **Eureeca:** restrained dark-navy field with official imagery in one wide horizontal rail. The label `Collaborative production engineering` is always adjacent to Wasem's contribution. No “full product” language.
- **Taseese:** bright transition with a stepped sequence of education screens. The visual progression mimics learning depth without animation being required.
- **Aura Fit:** the richest visual chapter. One raw analysis screen is dominant, two supporting workout/progress screens overlap within a reserved container, and the wide composite may close the chapter on desktop.
- **Eisal:** a split light/dark field that changes tonally across the chapter without changing the global theme. Light receipt/warranty and dark insights screens face each other.
- **Gader:** one official communication flow moves from expert selection to message/call detail. Human-centered copy and warmer material reduce the sense of a repeated product advertisement.

Each chapter has a different spatial grammar—stack, rail, steps, cluster, split, and sequence—but a stable location for name, role, status, and actions.

### Image system

- Favor raw screens and existing marketing compositions over generic purchased mockups.
- Use thin device frames only on raw screens. Existing Jood and five-device composites already contain hardware and receive no additional frame.
- Radius is product-sensitive but bounded: 18–28px for image mats; actual screen artwork remains intact.
- Backgrounds sample or interpret one defensible product accent, then darken/desaturate it enough for portfolio copy contrast.
- Shadows establish spatial layers, with a maximum of three simultaneous planes. No glow.
- One subtle reflection may be tested only for a single hero device on wide desktop; default recommendation is to omit it because it adds paint and visual noise.
- Desktop: up to three readable screens simultaneously, except an existing five-device composite used as a single image.
- Mobile: one screen, occasionally a second partially visible only when the first remains fully readable. No horizontal swipe is required to understand a project.

### Typography

- Public Sans remains the only family.
- The hero and project names use a slightly larger scale than Direction A, up to approximately 7rem on wide desktop.
- Copy density is lower: one 45–60 character headline and a short descriptor per project.
- Metadata uses strong contrast and medium weight so it stays visible on image-led surfaces.
- Product names may align with the visual edge; copy never overlays busy screen content.

### Color/material

- Neutral canvas frames the beginning and end.
- Featured work uses bounded full-width color fields derived from each product, with approved semantic ink/action/focus colors maintained independently.
- Cobalt stays the action signal even inside project chapters unless contrast requires a white link with a visible underline.
- Opaque backgrounds are the baseline. Any translucent navigation remains a single functional layer.
- No global gradient mesh, purple AI haze, or glowing device outlines.

### Motion

- Images may move 8–16px relative to each other as a chapter enters, but content is never hidden or pinned.
- Background color transitions happen between bounded sections, not through continuous scroll interpolation.
- Hover slightly raises the active screen plane and reveals a concise caption; the same caption is already visible or accessible on touch.
- Project-to-case-study navigation may later use a shared-image transition only if it remains interruptible and has a static fallback.
- Reduced motion removes relative movement, overlap transitions, and shared-element behavior; the final compositions remain intact.
- Begin with CSS. A motion library would require a separately approved interaction prototype.

### Recruiter experience

The breadth of shipped products is unmistakable within seconds. Recruiters see real interfaces across commerce, fintech, education, health, business, and communication before reaching the experience section.

The weakness is that visual spectacle can obscure ownership. To counter it, every stage has a fixed, visible line for `Role`, `Status`, and `Platforms`, and résumé/contact remain persistent in navigation. Technical visitors use `Read the engineering case study`; recruiters use `View product` where a verified live link exists.

### Engineering credibility

- A neutral engineering interlude after Taseese names recurring capabilities: architecture, state/data flows, integrations, quality/performance, and release.
- Each chapter carries one technical proof phrase, not a stack list.
- Eureeca's team-build language is visually equal in prominence to its project status.
- The product imagery is never presented as design authorship; captions explicitly connect it to mobile engineering responsibility.

### Mobile behavior

- **375px:** cinematic stages become focused vertical stories. One primary screen per project, no overlaps wider than the viewport, and project metadata appears before imagery.
- **768px:** two-screen compositions and controlled overlap become available. The hero still avoids a three-screen collage unless portrait and CTAs retain clear dominance.
- **1024px:** near-full-width stages use 12-column placement; three-screen depth is possible with reserved aspect-ratio containers.
- **1440px:** the full spatial direction appears: stronger negative space, staggered device planes, and selective wide composites. Content max width remains bounded even when background color spans the viewport.

### Risks

- Highest image and responsive complexity. Control: strict per-breakpoint image counts and generated derivatives.
- Store-only projects may feel weaker than local-asset projects. Control: intentionally reduce their visual density and use narrative structure rather than fake parity.
- It may position Wasem as a product/UI designer more than an engineer. Control: visible ownership labels and the engineering interlude.
- Scroll length and transfer weight can grow quickly. Control: one prioritized LCP image, lazy-load all chapters, AVIF/WebP derivatives, explicit geometry, and no autoplay video.
- Full-width color changes can become a campaign-site cliché. Control: keep the global shell neutral and restrict cinematic treatment to project stages.

---

## Direction C

### Name

**Product Proof, Engineered**

### Core idea

A balanced evidence-led system: the visual confidence of product chapters, the scanning clarity of a recruiter portfolio, and selective engineering annotations that open a deeper path for technical reviewers. Projects remain visually distinct, but each chapter is designed around the exact proof it contributes to the Senior Flutter Engineer position.

Direction C is not a compromise layout. Its distinct device is a stable two-layer chapter: `Product story` is immediately scannable; `Engineering proof` sits adjacent as a concise annotation. The two layers use one semantic reading order and separate progressive-disclosure links.

### Hero

- Eyebrow: `Wasem Aljundy`.
- Primary role: `Senior Flutter Engineer` remains explicit and visually close to the name.
- Headline: **“Engineering mobile products from architecture to release.”** It is specific, credible, and consistent with the manifest.
- Supporting copy: `Flutter and Android engineering across 20+ production applications, with full-cycle ownership spanning architecture, integrations, quality, and store delivery.` The `20+` claim remains static and attributed to the CV-supported professional summary.
- A compact proof rail shows `Flutter + Android`, `iOS + Android delivery`, and `Commerce · FinTech · EdTech · Health` rather than logos or percentages.
- Actions follow the established hierarchy: `View work`, `View résumé`, `Contact me`.
- The portrait uses a clean 4:5 editorial frame at the right of the desktop grid. A narrow cobalt rule and caption connect it to the proof rail. The crop preserves the laptop and office context; no cutout, blob, or circular avatar.
- The navigation and hero share one baseline so the header feels integrated without overlapping content.
- The first scroll reveals Jood immediately after a short “Selected production work” introduction. No credibility strip creates a visual wall between hero and proof.
- Mobile sequence: name/role, headline, supporting sentence, primary/secondary actions, proof rail, portrait, then Jood preview. Contact remains in navigation and at page end.

### Homepage sequence

1. Positioning hero with proof rail, résumé, and contact paths.
2. Selected production work introduction.
3. Jood anchor chapter.
4. Eureeca and Taseese as consecutive but compositionally different chapters.
5. Engineering capability bridge tied back to evidence already seen.
6. Aura Fit, Eisal, and Gader chapters.
7. Experience timeline with a concise ownership narrative.
8. More work as a compact expandable index or dedicated-route invitation.
9. Résumé summary and PDF action.
10. Personal context and final contact.

This sequence lets recruiters leave after the first three projects with a coherent understanding while rewarding deeper scrolling.

### Featured work treatment

- **Jood — transaction chapter:** a dark teal/ink stage with one dominant browse marketing image and a smaller booking/payment image. Annotation: `Full build · Cross-platform · Transactional flows`. Deeper link: `See architecture and release story`.
- **Eureeca — production contribution chapter:** a disciplined navy-and-white split with official store imagery. Annotation: `Team build · Flutter performance and issue resolution · FinTech`. The CTA is `Read my contribution`, not `How I built Eureeca`.
- **Taseese — structured-content chapter:** a bright, nearly white field with screens placed as a learning hierarchy rather than an overlapping stack. Annotation: `Full build · iOS/iPadOS · Nested content and assessments`.
- **Aura Fit — integration chapter:** dark graphite with product violet confined to imagery and rules. Use one personalization or dashboard screen plus one workout/food-analysis screen. Annotation: `Full build · Health data · AI-assisted personalization` without implying medical efficacy.
- **Eisal — system-depth chapter:** pale neutral-green base with a dark-mode detail interrupting the composition. Annotation: `Full build · Multilingual workflows · Documents, warranties, and themes`.
- **Gader — communication chapter:** warm light close with official screens in a calm sequence. Annotation: `Full build · Messaging, voice, and video consultation · Social impact`.

The chapter patterns are: dominant/supporting, split contribution, hierarchical sequence, focused pair, light/dark hinge, and communication path. This gives rhythm without six one-off systems.

### Image system

- One dominant image per project; zero to two supporting images depending on evidence and viewport.
- Existing marketing/mockup compositions remain intact and are never double-framed.
- Raw screens receive a restrained neutral device silhouette only when hardware context improves comprehension.
- Image mats use the existing large radius, but project surfaces can reduce it to keep the work editorial rather than card-like.
- Controlled crop rules are recorded per derivative: focal screen, permissible edge crop, minimum text readability, and alternate mobile crop.
- Shadows use one soft token; overlap is rare and limited to two planes.
- Reflections are rejected. They do not improve recruiter comprehension.
- Desktop and mobile use different derivatives/compositions, not the same dense composite scaled down.
- Below-fold project assets are lazy-loaded, with explicit aspect ratios and responsive `sizes`. Only the real LCP portrait or first Jood image may be prioritized after measurement.

### Typography

- Retain Public Sans; no additional display or novelty family.
- Hero headline: approximately `clamp(3rem, 8vw, 7.25rem)` with optical sizing, tight leading, and size-sensitive tracking.
- Project names use the h2 role. Technical annotations use the body/small roles—not monospace by default—to avoid documentation aesthetics.
- Monospace is reserved for a small platform or architecture token only when it improves scanning.
- Body measure stays 60–72 characters; annotation measure stays 35–50.
- Arabic product names retain their correct script and direction within otherwise English headings.

### Color/material

- The portfolio remains light-first with cool-neutral global surfaces and dark project islands where justified.
- Cobalt remains the universal action color. Project accents never redefine link, focus, error, or status meaning.
- Each chapter gets one accent and one tonal surface; imagery supplies secondary color.
- A single translucent header is allowed as functional chrome. Project surfaces are opaque.
- Focus remains the approved purple ring, measured independently on every project background.
- High-contrast or reduced-transparency modes use solid surfaces and explicit borders.

### Motion

- Hero response is immediate: press feedback on actions and no delayed text entrance.
- A chapter may reveal its dominant image with opacity plus 8–12px translation; the annotation appears without a long stagger.
- Hover/tap feedback changes border, caption, or arrow position by a few pixels without scaling the whole chapter.
- Project transitions use background cuts or short cross-fades, not continuous color interpolation.
- Navigation stays native; no scroll-jacking, pinning, or mandatory carousels.
- Reduced motion removes translation and shared-element behavior while preserving state feedback through color, underline, and short cross-fade.
- CSS handles the planned behavior. A spring is reserved for a future interruptible gallery interaction only if a prototype demonstrates value.

### Recruiter experience

The hero answers identity, level, specialization, breadth, and next action immediately. Jood provides the strongest full-cycle proof first. Eureeca adds enterprise/fintech credibility while transparently identifying collaboration. Taseese establishes structured-content breadth before the capability bridge synthesizes the engineering pattern.

Résumé and contact remain reachable without traversing all projects. Each chapter exposes one recruiter action (`View product` or `View case study`) and one deeper engineering entry point only when both are meaningful.

### Engineering credibility

- Ownership, status, platform, and one supported technical complexity appear in a consistent annotation rail.
- The capability bridge cites the featured examples it derives from instead of making unsupported abstract claims.
- Full-build and team-build language are visually distinct and controlled by manifest data.
- Case-study links promise specific depth: architecture, integration, performance, data flow, quality, or release—not generic “learn more.”
- No code filler, skill bars, fabricated metrics, or unaudited client logos.

### Mobile behavior

- **375px:** single semantic column. Copy precedes media, annotation follows the project descriptor, one screen is dominant, proof wraps into a compact list, and no information depends on overlap or hover.
- **768px:** six-column grid. Hero becomes a balanced copy/portrait split; selected chapters use 3/3 or 4/2 composition. Two images are the practical maximum.
- **1024px:** 12-column grid. The annotation rail may sit beside imagery; alternate project composition is introduced without alternating the DOM reading order.
- **1440px:** content remains within approximately 80rem while project background fields may span wider. Negative space grows, and Jood/Aura Fit can use larger visual stages without increasing copy measure.

At all widths, image selection changes intentionally: five-device composites are not loaded as the primary mobile visual, target sizes stay at least 44px, text remains zoom-safe, and horizontal page overflow is prohibited.

### Risks

- The annotation rail could become repetitive. Control: vary its placement while keeping its content schema stable.
- Balancing product and engineering layers can create density. Control: one technical proof per chapter and progressive disclosure for everything else.
- Dark project islands can fragment the page. Control: use neutral transition spacing and no more than two dark chapters in succession.
- It requires disciplined content modeling. Control: derive ownership/status/platform fields from the canonical manifest and keep narrative copy separately structured.
- The direction is less instantly dramatic than B. Control: give Jood and Aura Fit selective cinematic scale while preserving the evidence-led system.

---

## Comparison matrix

Scores use 10 as the most favorable result. For `Performance risk` and `Responsive complexity`, 10 means lowest risk/easiest control; a low score means greater implementation risk or complexity.

| Criterion                       | A — The Engineering Edit | B — Products in Motion | C — Product Proof, Engineered |
| ------------------------------- | -----------------------: | ---------------------: | ----------------------------: |
| Recruiter clarity               |                        9 |                      7 |                            10 |
| Perceived seniority             |                        9 |                      8 |                             9 |
| Visual uniqueness               |                        8 |                     10 |                             9 |
| Project showcase quality        |                        8 |                     10 |                             9 |
| Technical credibility           |                        8 |                      6 |                            10 |
| Apple-inspired polish           |                        9 |                      9 |                             9 |
| Accessibility                   |                        9 |                      7 |                             9 |
| Performance risk                |                        9 |                      5 |                             8 |
| Responsive complexity           |                        8 |                      5 |                             7 |
| Maintainability                 |                        9 |                      6 |                             8 |
| Scalability for future projects |                        9 |                      7 |                             9 |
| **Total**                       |             **95 / 110** |           **84 / 110** |                  **97 / 110** |

### Important scoring differences

- **A leads in maintainability and performance safety.** Typography and one dominant image carry most sections. It loses points because a mobile-product specialist benefits from more visual product presence than a purely editorial system provides.
- **B is the strongest pure showcase and most visually memorable.** It loses recruiter clarity and technical credibility because imagery can be mistaken for product-design authorship. Its asset transfer, crop, responsive, and QA burden is materially higher, especially for three store-only projects.
- **C has the clearest dual-audience model.** The stable product/engineering layers make seniority defensible and recruiter scanning fast. It is more complex than A but avoids B's dependency on three-screen spatial compositions across every breakpoint.
- All three can meet accessibility requirements, but B requires the most discipline to prevent text-on-image contrast failures, hidden captions, excessive overlap, or motion-dependent meaning.
- “Apple-inspired polish” is equal at the top because it comes from typography, spacing, immediate feedback, spatial logic, and restraint—not from choosing the most cinematic layout.

## Recommendation

Recommend **Direction C — Product Proof, Engineered**, with two precisely bounded imports:

1. Use **Direction A's editorial hero discipline**: rectangular environmental portrait, typography-led first viewport, selected-work index cues, and generous negative space.
2. Use **Direction B's selective cinematic scale only for Jood and Aura Fit**, where the inspected local imagery genuinely supports it. Do not force equivalent spectacle onto the store-only chapters.

Everything else follows Direction C: the product-story plus engineering-proof chapter contract, visible ownership/status/platform metadata, a capability bridge after the first three projects, light-first global canvas with bounded project color, one dominant image per project, and CSS-first motion.

This hybrid scores best because it communicates the target role before atmosphere, makes the real mobile products memorable, protects Eureeca's collaborative ownership language, scales to uneven future asset sets, and gives technical visitors specific deeper paths without delaying recruiters.

It also works with the existing architecture: content remains manifest-driven, server/static rendering stays the baseline, project imagery can use generated responsive derivatives, and no new homepage dependency is required.

## Approval decisions for Milestone 2B

Only these decisions materially affect implementation:

1. **Direction approval:** approve the recommended C+A+B synthesis, or select A/B without hybridization.
2. **Global tone:** approve a light cool-neutral portfolio with bounded dark/color project islands rather than a site-wide dark theme.
3. **Hero proof:** approve placing the CV-supported `20+ production applications` claim in the first viewport; otherwise move it to the experience section and keep the hero qualitative.
4. **Store-only art:** approve using current official store imagery for Eureeca, Taseese, and Gader while local originals remain unavailable. The implementation must preserve each store's image proportions and re-verify availability before publication.

## Adversarial design review

- **Generic portfolio risk:** controlled by six narrative chapters, not a card grid, and by project-specific proof rather than technology logos.
- **Agency-portfolio risk:** controlled by explicit engineering ownership, status, platforms, and technical decision paths.
- **Apple-clone risk:** controlled by original information architecture, no proprietary assets/layout imitation, and restraint expressed through craft rather than mimicry.
- **Truth risk:** controlled by manifest-derived labels, CV-supported headline proof, and explicit team-build wording for Eureeca.
- **Privacy risk:** no source asset is published during 2A. Private-client screenshots remain eligible demo/test material but still require deliberate production curation.
- **Accessibility risk:** all essential meaning remains in semantic text; no hover-, motion-, or color-only communication; reduced-motion and reduced-transparency behavior is defined per direction.
- **Performance risk:** no video, 3D, animation library, or autoplay media is proposed. The recommendation limits each chapter to one dominant asset and lazy-loads below-fold imagery.
- **Responsive risk:** mobile compositions are designed separately rather than shrinking desktop overlap; five-device composites are explicitly excluded as primary mobile visuals.
- **Maintenance risk:** the recommendation uses six chapter variants built from three reusable composition families and one stable content contract.

No isolated prototype was created. The visual differences and feasibility could be resolved from the inspected asset geometry, current tokens, existing architecture, and planning evidence without modifying the application.
