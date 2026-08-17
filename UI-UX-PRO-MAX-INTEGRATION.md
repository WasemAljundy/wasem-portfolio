# UI/UX Pro Max Integration — Wasem Portfolio

## Decision
UI/UX Pro Max is adopted as a specialist design-intelligence layer for this portfolio.

It does **not** replace the existing portfolio skills. It complements them:

- `ui-ux-pro-max` → searchable design-system intelligence, style/pattern/color/typography/UX/GSAP/stack guidance.
- `apple-design` → Apple-inspired interaction quality, restraint, spring/momentum behavior, direct manipulation.
- `web-ui-precision` → implementation fidelity, responsive behavior, visual QA.
- `recruiter-conversion` → recruiter/hiring-manager information hierarchy and conversion clarity.
- `portfolio-storytelling` → evidence-based project narrative and senior-engineering positioning.
- `web-accessibility` / `web-performance` → non-negotiable release constraints.

## Authority and conflict rules
Recommendations from UI/UX Pro Max are advisory design intelligence, not an automatic redesign mandate.

Resolve conflicts in this order:
1. Truth, confidentiality, and project evidence.
2. Accessibility and functional correctness.
3. Performance and content availability.
4. Recruiter clarity and engineering credibility.
5. Existing portfolio design direction and Apple-inspired restraint.
6. UI/UX Pro Max style recommendations.
7. Decorative novelty.

Never adopt a recommended visual style only because it ranks highly. The final product must feel authored for Wasem, not generated from a style catalog.

## Required first-run workflow
After installing UI/UX Pro Max for Codex, run its design-system generator **before Milestone 1 implementation**.

Use the project-local script generated under `.agents/skills/ui-ux-pro-max/`.

Suggested initial query:

```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "engineering portfolio premium minimal editorial" --design-system --variance 5 --motion 6 --density 3 --persist -p "Wasem Portfolio" --output-dir .
```

If `python` is unavailable, try `python3` or `py -3`.

Then inspect the generated:

```text
design-system/wasem-portfolio/MASTER.md
```

Do **not** apply it blindly. Compare it against:
- `Wasem_Portfolio_Blueprint_v1.md`
- `AGENTS.portfolio.md`
- `apple-design`
- `web-ui-precision`
- recruiter goals
- real portfolio assets

Produce a short `planning/design-system-synthesis.md` that records:
- what was accepted from UI/UX Pro Max;
- what was rejected and why;
- final typography direction;
- final color/material direction;
- spacing/density direction;
- motion principles;
- homepage pattern;
- anti-patterns to avoid.

## Required targeted searches
After the master design-system pass, run focused queries only when needed.

For Next.js implementation guidance:

```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "responsive image motion performance" --stack nextjs
```

For recruiter-facing landing structure:

```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "portfolio credibility selected work" --domain landing
```

For interaction quality:

```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "scroll reveal spatial continuity" --domain gsap
```

For accessibility checks:

```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "focus keyboard reduced motion" --domain ux
```

Retry once with a narrower query if results are weak or irrelevant. Never fabricate a database result.

## Portfolio-specific visual guardrails
The target is **Apple-level craft, not Apple imitation**.

Prefer:
- editorial composition;
- generous but purposeful whitespace;
- strong typography hierarchy;
- premium project imagery;
- restrained depth/material effects;
- responsive asymmetry where it improves storytelling;
- calm motion with spatial continuity;
- selective cinematic moments for featured projects;
- crisp focus and hover states;
- content visible before effects complete.

Avoid:
- generic SaaS gradients;
- excessive glassmorphism;
- neon AI aesthetics;
- every section becoming a bento grid;
- constant parallax;
- scroll hijacking;
- animation for animation's sake;
- giant intro sequences that delay proof;
- tiny body text;
- indistinguishable gray-on-gray UI;
- decorative effects that increase LCP/CLS/INP risk.

## Definition of design approval
Milestone 0 is not complete until Codex has:
1. installed/detected UI/UX Pro Max;
2. generated the initial design-system recommendation;
3. synthesized it with the portfolio-specific skills;
4. documented accepted/rejected recommendations;
5. proposed a final design direction with responsive and reduced-motion behavior;
6. stopped for review before broad implementation.
