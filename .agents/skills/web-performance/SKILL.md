---
name: web-performance
description: Measure and optimize portfolio web performance, Core Web Vitals, loading strategy, images, fonts, JavaScript, rendering, and animation without sacrificing design quality.
---

# Web Performance

## Purpose
Make premium design feel immediate. Performance is part of the visual experience, especially for recruiters who may open the site on mobile or slow networks.

## Trigger
Use during architecture, before launch, after adding media/animation, when Lighthouse or field metrics regress, or when pages feel slow/janky.

## Core Metrics
Prioritize LCP, INP, CLS, TTFB where relevant, total JS, image transfer, font loading, and animation frame stability. Use current official guidance rather than memorized thresholds when exact limits matter.

## Workflow
1. Measure before optimizing.
2. Identify the actual LCP element and critical request chain.
3. Audit client-component boundaries and unnecessary hydration.
4. Optimize images with correct sizes, formats, lazy/eager loading, and priority only for genuine above-fold assets.
5. Optimize fonts: subset, preload only critical faces, limit weights, use metric-compatible fallbacks.
6. Defer non-critical analytics and interactive modules.
7. Avoid heavy animation libraries for trivial effects; use transforms/opacity for compositor-friendly motion.
8. Check scroll-linked and blur-heavy effects for paint cost.
9. Re-measure after changes and report evidence.

## Portfolio Performance Rules
Hero impact must not depend on a multi-megabyte autoplay video. Project galleries should progressively load. Resume preview must not block the homepage. Decorative motion must degrade gracefully on low-power devices and reduced-motion settings.

## Definition of Done
Production build measured, major bottlenecks identified, improvements supported by evidence, no avoidable CLS, critical imagery appropriately prioritized, and no claim of improvement without before/after data.
