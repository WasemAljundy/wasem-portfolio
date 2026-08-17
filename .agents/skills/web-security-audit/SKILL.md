---
name: web-security-audit
description: Review portfolio website security and privacy, including forms, server actions, headers, dependencies, secrets, uploads, analytics, external links, and deployment configuration.
---

# Web Security Audit

## Purpose
Keep a public portfolio safe despite being low-complexity compared with transactional apps. Public sites are still exposed to spam, injection, dependency risk, leaked secrets, and privacy mistakes.

## Trigger
Use before launch, after adding forms/integrations, when changing deployment/configuration, or during code review.

## Audit Areas
- Secrets and environment variables.
- Server/client boundary leaks.
- Contact form validation and spam/abuse controls.
- Output encoding and unsafe HTML.
- External links and opener behavior.
- Content Security Policy feasibility.
- Security headers.
- Dependency vulnerabilities and maintenance.
- Analytics/privacy collection.
- File/PDF handling.
- Redirect/open-redirect risks.
- Third-party embeds.
- Rate limiting where needed.
- Error leakage and logs.

## Rules
Treat all client input as untrusted. Validate server-side. Never expose service credentials in browser bundles. Avoid dangerouslySetInnerHTML unless content is trusted and sanitized. Minimize third-party scripts. Do not collect visitor data without a product reason.

## Portfolio-Specific Risks
Resume PDFs may reveal unintended personal details or metadata. Private-client screenshots may leak names, URLs, IDs, or data. Analytics must not capture form contents or sensitive query parameters.

## Output
Classify findings as Blocker/High/Medium/Low/Informational with file/location, impact, and fix.

## Definition of Done
No exposed secrets, unsafe input path, serious dependency/security finding, or confidential asset leak remains unaddressed.
