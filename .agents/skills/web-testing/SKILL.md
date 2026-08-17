---
name: web-testing
description: Create a pragmatic automated and manual testing strategy for a Next.js portfolio across unit, component, browser, accessibility, visual, routing, and regression concerns.
---

# Web Testing

## Purpose
Catch visible regressions, broken navigation, inaccessible interactions, and content-system mistakes without building a wasteful test suite.

## Trigger
Use when adding behavior, changing shared UI, adding case-study routes, forms, galleries, navigation, deployment logic, or preparing for launch.

## Test Pyramid
Unit tests for pure parsers, validators, content transforms, and utilities. Component tests for interaction logic when browser E2E would be excessive. Playwright for critical visitor journeys. Visual regression only for stable, high-value surfaces.

## Critical Journeys
At minimum consider: open homepage -> selected project -> return/navigation; open resume -> download; contact CTA; mobile navigation; direct-load project URL; 404; private-client case-study behavior.

## Accessibility Tests
Automate basic axe checks where possible and always pair with manual keyboard testing for critical interactions.

## Responsive/Visual Checks
Test representative mobile and desktop viewports. Screenshot testing should target stable components/pages, not highly dynamic content. Inspect diffs; never blindly update snapshots.

## Reliability Rules
No production services in tests. Avoid sleeps; wait for observable conditions. Keep data deterministic. Test user behavior rather than internal component implementation.

## Definition of Done
Tests cover critical journeys and risky logic, failures are actionable, no flaky timing hacks exist, and exact commands/results are reported.
