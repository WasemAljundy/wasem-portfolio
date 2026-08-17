---
name: web-architecture
description: Design and protect the architecture of a production-grade Next.js portfolio, including server/client boundaries, content modeling, routing, dependency direction, progressive enhancement, and maintainable feature ownership.
---

# Web Architecture

## Purpose
Keep the portfolio fast, understandable, evolvable, and easy to extend with new projects, case studies, content sections, analytics, or CMS support.

## Trigger
Use when choosing structure, adding a substantial feature, reviewing boundaries, deciding server vs client rendering, introducing data sources, or preventing architectural drift.

## Principles
- Prefer server components and static generation for content-heavy surfaces.
- Add client components only for genuine browser state, gestures, or APIs.
- Keep content separate from rendering.
- Keep business/content rules out of visual primitives.
- Prefer composition over inheritance.
- Prefer explicit dependencies over global mutable state.
- Do not abstract until a real repeated pattern exists.
- Progressive enhancement is preferred for essential navigation and content.

## Content Architecture
Represent portfolio items as typed data with stable fields such as slug, title, summary, role, status, timeframe, stack, capabilities, challenge, decisions, outcomes, gallery, links, confidentiality rules, and SEO metadata. Private-client projects must support useful public storytelling without leaking protected information.

## Server/Client Boundary Rules
Server by default: project data loading, metadata, structured data, static prose, navigation shell, resume metadata. Client only when needed: gestures, interactive galleries, command palette, theme toggle, animated navigation state, contact interaction requiring browser APIs.

Never move a large tree to the client because one leaf needs interaction. Isolate the interactive leaf.

## Routing
Use stable human-readable routes. Project slug URLs must be canonical and resilient to refresh/deep-link. Define not-found behavior and redirects intentionally. Avoid route logic hidden in generic components.

## Shared UI
Design-system primitives may be shared globally. Feature-specific composites belong with the feature until genuine cross-feature reuse exists.

## Data and Integrations
External CMS, analytics, or form providers must sit behind small adapters. UI should not know vendor-specific payload shapes. Validate external data at boundaries.

## Performance Architecture
Architect for minimal client JavaScript, optimized images, static generation where possible, streaming only when useful, and lazy loading of non-critical interactive modules.

## Security Architecture
Treat browser code as public. Keep secrets and privileged operations server-side. Validate all form input server-side. Add anti-abuse controls proportionate to risk.

## Review Checklist
Check dependency direction, client-boundary spread, content duplication, rendering strategy, invalidation/caching, route ownership, vendor coupling, error boundaries, accessibility preservation, and future editability.

## Definition of Done
Architecture can explain where content lives, where interaction lives, where integrations live, how a new project is added, how a private project is represented, and how production concerns are validated without special knowledge.

## Prohibited Behavior
No god components, no broad context providers for static content, no direct analytics vendor calls scattered through UI, no duplicated project metadata, no client-only rendering by default, and no speculative repository/use-case layers without product value.
