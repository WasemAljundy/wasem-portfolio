---
name: web-code-review
description: Perform a principal-level adversarial review of Next.js/TypeScript portfolio changes across correctness, architecture, UX, SEO, accessibility, performance, security, tests, and release risk.
---

# Web Code Review

## Purpose
Review as if approving another senior engineer's production pull request. Prioritize defects and release risk over praise.

## Workflow
1. Inspect AGENTS.md, git status, complete diff, related callers, tests, content, configuration, and generated assets.
2. Run available format, lint, type-check, tests, browser tests, and build relevant to the change.
3. Review every applicable dimension.
4. Classify findings.
5. Fix Blocker/High and normally Medium findings when modification is allowed.
6. Rerun validation and review final diff again.

## Review Dimensions
Correctness: broken links, route assumptions, invalid content, date/status inconsistencies, form behavior.
Architecture: server/client boundaries, dependency direction, duplication, overabstraction, vendor coupling.
UI/UX: hierarchy, responsive behavior, states, focus, keyboard, touch, reduced motion, visual regressions.
Performance: hydration, JS size, images, fonts, LCP, CLS, expensive effects, animation jank.
SEO: metadata, canonicals, structured data, indexing, sitemap, semantic headings.
Security/privacy: secrets, unsafe HTML, forms, external scripts, private-client leaks, resume metadata.
Testing: missing behavior, brittle tests, uninspected snapshots, missing direct-route/mobile coverage.
Content integrity: exaggerated claims, inconsistent statuses, placeholder copy, broken case-study evidence.

## Severity
Blocker: security/privacy leak, unusable core route, broken build, severe accessibility failure, or data/confidentiality issue.
High: serious correctness, performance, SEO, accessibility, or maintainability problem.
Medium: meaningful issue that should be fixed.
Low: localized polish/risk.
Informational: non-blocking observation.

## Finding Format
Severity; file/line; problem; visitor/system impact; concrete fix.

## Verdict
Ready / Ready with minor follow-up / Not ready. Never call it ready with Blocker or High findings outstanding.
