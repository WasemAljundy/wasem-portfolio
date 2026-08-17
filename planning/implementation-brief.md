# Portfolio Implementation Brief — Next Phase

## Goal
Translate the approved product blueprint and project manifest into a production-ready Next.js portfolio optimized for recruiter clarity, engineering credibility, speed, accessibility, SEO, and Apple-inspired interaction quality.

## Homepage narrative
1. Hero — identity, positioning, proof and primary CTAs.
2. Featured Work — six cinematic project stories in the approved order.
3. Engineering Expertise — architecture, Flutter/Dart, native Android, Firebase/APIs, state management, testing/performance, release.
4. Experience — Netloopers, TAQAT, Scriptech, Logicteca, freelance.
5. More Work — selected and archive projects without diluting the primary narrative.
6. Resume — in-site preview + PDF download.
7. About — concise personal/professional narrative and portrait.
8. Contact — LinkedIn, GitHub, email and WhatsApp.

## Case-study routes
Create detailed routes initially for: Jood, Eureeca, Taseese, Aura Fit, Eisal, Gader, Naseeb, Haraj Aden, Sezon Store and Otlob Ecosystem.

## Visual direction
Apple-inspired, not Apple-cloned: restrained typography, generous whitespace, responsive fluid composition, intentional material depth, spring-based motion, reduced-motion support, crisp image treatment and zero decorative motion that harms clarity or performance.

## Asset rule
Prefer existing polished local mockups where strong. Use raw screenshots inside galleries and technical/product storytelling. For live apps missing from MyWorks, use current official store imagery. Never upscale weak screenshots merely to fill space; compose them inside device or editorial layouts instead.

## Content rule
Every featured project must answer: what product is this, what problem does it solve, what did Wasem own, what engineering complexity mattered, what was shipped, and where can the recruiter verify it. Avoid generic “built with Flutter” copy.

## Before Codex implementation
1. Copy `AGENTS.portfolio.md` to project root as the governing agent instructions.
2. Add the portfolio skill pack under the repository skill directory.
3. Add `Wasem_Portfolio_Blueprint_v1.md` and `project-manifest.json` under `/docs`.
4. Add the CV and portrait under a private source-assets staging directory, then expose optimized public derivatives only.
5. Import selected MyWorks assets into a normalized `/public/projects/<slug>/` structure.
6. Begin with foundation + design system + homepage shell before implementing animations.
