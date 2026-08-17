---
name: web-release-readiness
description: Validate a professional portfolio for production launch across build integrity, routes, SEO, performance, accessibility, security, assets, analytics, domain, and deployment behavior.
---

# Web Release Readiness

## Purpose
Prevent a beautiful local demo from becoming a weak production launch.

## Trigger
Use before first deployment, domain cutover, major redesign launch, or significant infrastructure change.

## Checklist
### Build and Repository
Clean install from lockfile, format/lint/type-check/tests/build pass, no debug output, no placeholder TODOs in production path, no accidental files or secrets.

### Routes
Homepage, project index, each public case study, resume, contact, 404, redirects, direct-load refresh, browser back/forward, trailing-slash policy as applicable.

### Content
No lorem ipsum, broken image, stale year, fake metric, contradictory status, inaccessible private information, or unfinished project entry.

### SEO
Production canonical domain, metadata, OG images, sitemap, robots, no accidental noindex, structured data validation, staging remains non-indexed.

### Performance
Production measurement on mobile/desktop, image and font checks, no avoidable layout shifts, acceptable interaction smoothness, heavy effects reviewed.

### Accessibility
Keyboard pass, focus visibility, reduced motion, form labels/errors, contrast, automated scan, critical screen-reader sanity check where feasible.

### Security/Privacy
Headers/config reviewed, secrets safe, forms protected appropriately, external scripts justified, analytics privacy reviewed, PDFs/screenshots checked for sensitive metadata/content.

### Deployment
Environment variables, custom domain, HTTPS, redirects, cache behavior, error monitoring if used, rollback path, and deployment documentation.

## Definition of Done
Launch verdict must be evidence-based. Report exact checks run, failures fixed, manual checks remaining, and one final verdict: Ready / Ready with manual checks / Not ready.
