---
name: web-project-bootstrap
description: Bootstrap a production-grade portfolio or marketing website with Next.js, TypeScript, scalable structure, quality gates, environments, testing, SEO foundations, analytics boundaries, and CI.
---

# Web Project Bootstrap

## Purpose
Create the smallest production-grade web foundation that can safely support a premium portfolio, case studies, downloadable assets, analytics, contact flows, and future expansion without speculative abstraction.

## Trigger
Use when starting or restructuring the website, adding environments, routing, design-system foundations, content architecture, testing, CI, or deployment readiness.

## Required Inputs
Inspect or determine: target audience, primary conversion goal, content types, framework/runtime constraints, deployment target, analytics needs, contact method, supported locales, CMS needs, visual source, SEO requirements, and privacy constraints. Do not ask questions answerable from the repository.

## Default Technical Direction
Prefer Next.js App Router + TypeScript for this portfolio unless repository constraints justify another stack. Prefer server-rendered/static content by default and client components only where interaction requires them.

## Workflow
### 1. Inspect
Read AGENTS.md, package.json, lockfile, tsconfig, next.config, eslint config, app/src structure, public assets, tests, CI, env examples, git status, and current diff. Determine Node/package-manager versions.

### 2. Define Architecture
Use a feature/content-oriented structure. Example:
```text
src/
  app/
  components/
    ui/
    layout/
  features/
    projects/
    resume/
    contact/
  content/
  lib/
    analytics/
    seo/
    validation/
  styles/
  types/
```
Do not create empty layers without current value.

### 3. Establish Quality Gates
At minimum configure reproducible commands for formatting, linting, type-checking, unit tests, browser tests, and production build. Never weaken rules merely to obtain green output.

### 4. Environment Safety
Separate development/preview/production configuration when needed. Never expose secrets through NEXT_PUBLIC variables. Validate required server-side variables. Do not silently fall back to production services.

### 5. Routing and Content
Define canonical routes for home, projects, individual case studies, resume, and contact as needed. Add not-found behavior. Keep project content structured and editable without changing presentation code.

### 6. Design System Foundation
Centralize typography, spacing, radii, color roles, shadows/materials, z-index, motion primitives, container widths, and responsive breakpoints. Avoid a giant component library before repetition exists.

### 7. SEO Foundation
Add metadata strategy, canonical URLs, Open Graph defaults, sitemap/robots support, structured-data boundaries, and per-project metadata hooks.

### 8. Testing Foundation
Add unit/component test utilities where valuable and Playwright for critical browser journeys. Include at least one meaningful smoke test covering the application shell and one case-study route.

### 9. CI
CI should restore dependencies from lockfile, format-check, lint, type-check, test, and build. Add browser tests when environment permits. Never claim a gate passed unless it ran.

## Definition of Done
- Repository installs reproducibly.
- Development and production builds run.
- Type-check and lint are clean.
- Core routes work on refresh and direct navigation.
- Design tokens exist.
- SEO baseline exists.
- No secrets are committed.
- Tests cover the shell and one critical route.
- README documents local setup and validation.

## Prohibited Behavior
Do not start with a monolithic page file, hardcode project content across components, mark everything as client-side, add unnecessary dependencies, hide lint errors, ship placeholder secrets, or claim production readiness without build validation.
