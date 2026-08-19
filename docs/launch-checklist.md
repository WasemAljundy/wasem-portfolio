# Portfolio launch checklist

Updated: 2026-08-19

## Repository and environment

- [x] Milestones 2B–2C captured in a coherent baseline commit.
- [x] `source-assets/`, staging, Vercel state, and test output excluded from Git.
- [x] Repository and public-directory credential/archive audits pass.
- [x] Node 24 and npm lockfile configuration are consistent.
- [x] `.env.example` documents the only optional override.
- [ ] GitHub remote created and upstream configured.

## Build and deployment

- [x] Clean-checkout asset fallback supports Linux/Vercel builds without private source material.
- [x] Local production build and complete validation suite pass.
- [x] Dynamic OG route and static project generation build successfully.
- [ ] Vercel account authentication restored.
- [ ] Preview deployment created and inspected.
- [ ] Production deployment or production alias confirmed.
- [ ] Custom domain connected, if desired.

## Metadata and indexing

- [x] Explicit site URL overrides and Vercel production-origin fallback are centralized.
- [x] Preview deployments disallow indexing.
- [x] Homepage and Jood metadata/structured data have automated coverage.
- [ ] Deployed canonical, Open Graph, Twitter, sitemap, and robots output verified.
- [ ] Public social images inspected from their deployed URLs.

## Experience and release quality

- [x] Homepage, work, Jood, lighter projects, résumé, PDF, and 404 have browser coverage.
- [x] Responsive captures cover 375, 768, 1024, and 1440px.
- [x] Automated accessibility, keyboard focus, reduced motion, and zoom-equivalent reflow pass locally.
- [x] Security headers and safe external-link behavior have automated coverage.
- [x] Dependency audit reports no known vulnerabilities.
- [x] App Store, Google Play, GitHub, Linktree, and WhatsApp destinations returned successful live responses.
- [x] Local synthetic Jood medians recorded: LCP 224 ms mobile / 288 ms desktop; CLS 0.0017 / 0.0008.
- [ ] LinkedIn destination manually confirmed in a normal browser; automated requests receive LinkedIn's anti-bot status 999.
- [ ] Deployed route, responsive, accessibility, and performance QA completed.
- [ ] External destinations rechecked from the deployed website.
- [ ] Meaningful field performance data reviewed after traffic exists.

## Final launch

- [x] No analytics or contact backend added.
- [x] Private-client labels and approved publication boundaries retained.
- [x] Original browser icon included.
- [ ] Custom-domain DNS and HTTPS verified, if applicable.
- [ ] Final production smoke test complete.
- [ ] Public launch announced.
