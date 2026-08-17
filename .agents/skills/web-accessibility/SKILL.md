---
name: web-accessibility
description: Build and review accessible portfolio experiences covering semantic HTML, keyboard navigation, focus, contrast, motion, screen readers, forms, media, and WCAG-minded interaction quality.
---

# Web Accessibility

## Purpose
Accessibility is a release requirement and a signal of senior engineering quality.

## Trigger
Use for every interactive feature, design-system work, navigation, forms, galleries, motion, resume viewers, and pre-release review.

## Rules
- Prefer semantic HTML over ARIA.
- All functionality must be keyboard reachable.
- Maintain visible, intentional focus states.
- Preserve logical DOM and focus order.
- Do not communicate status by color alone.
- Provide useful alt text; use empty alt for purely decorative images.
- Associate labels, descriptions, and errors with form fields.
- Announce async form outcomes appropriately.
- Respect prefers-reduced-motion and avoid essential information conveyed only through motion.
- Ensure pointer targets are comfortably usable.
- Avoid scroll traps and inaccessible custom cursors.
- Dialogs must manage focus, escape behavior, labelling, and restoration.

## Portfolio-Specific Checks
Project carousels need non-drag controls. Resume preview needs an accessible download alternative. Status chips such as Live/Private Client need text, not color only. Animated hero content must remain readable without animation.

## Validation
Use automated accessibility checks plus keyboard-only manual testing. When possible test with a screen reader on critical routes. Automated tools are not sufficient alone.

## Definition of Done
Critical routes are keyboard usable, focus is visible, headings/landmarks make sense, form errors are accessible, contrast is adequate, reduced motion is supported, and no serious automated accessibility violations remain.
