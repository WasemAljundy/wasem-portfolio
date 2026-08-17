---
name: web-feature-builder
description: Implement complete portfolio website features from requirement to validated production behavior, covering UX states, accessibility, responsive design, SEO impact, tests, and review.
---

# Web Feature Builder

## Purpose
Deliver one feature end-to-end rather than producing disconnected components.

## Trigger
Use for project galleries, case-study pages, resume viewer, contact flows, navigation, theme system, interactive showcases, filters, search, CMS integration, or any meaningful product behavior.

## Workflow
1. Inspect related code, content model, design references, tests, and routes.
2. Define acceptance criteria, edge cases, performance budget, SEO implications, accessibility behavior, and responsive states.
3. Choose the smallest architecture consistent with existing conventions.
4. Implement content/data model first when the feature depends on structured content.
5. Build semantic HTML before visual enhancement.
6. Apply the design system and Apple-design motion only where motion communicates state or direct manipulation.
7. Cover loading/error/empty/private/unavailable states when applicable.
8. Add tests at the cheapest reliable layer.
9. Run formatting, lint, type-check, targeted tests, browser checks, and build when relevant.
10. Perform adversarial self-review and fix severe findings.

## Portfolio-Specific Rules
Every new surface must answer at least one visitor question: Who is Wasem? What level does he operate at? What has he built? How does he think? Can I trust him with serious product work? How do I contact him?

Do not add a feature merely because it looks impressive. It must improve credibility, comprehension, memorability, or conversion.

## Definition of Done
Feature is complete across desktop/mobile, keyboard navigation, reduced motion, metadata if indexable, failure states where relevant, tests, and production build impact.
