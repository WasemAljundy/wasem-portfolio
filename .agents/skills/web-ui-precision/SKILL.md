---
name: web-ui-precision
description: Implement and visually verify premium responsive web interfaces with precise typography, spacing, materials, motion, accessibility, and cross-browser behavior.
---

# Web UI Precision

## Purpose
Turn design intent into a polished interface that looks intentional at every viewport, not just at one screenshot size.

## Trigger
Use for visual implementation, responsive refinements, Apple-inspired surfaces, project showcases, hero sections, galleries, navigation, or any UI quality review.

## Workflow
### 1. Establish Visual Source
Inspect screenshots, references, brand direction, and existing tokens. Identify hierarchy, grid, typography, spacing rhythm, radii, materials, image treatment, and motion intent.

### 2. Build with Semantic Structure
Use correct headings, landmarks, links, buttons, lists, figures, and captions before styling. Preserve native browser behavior unless there is a strong UX reason not to.

### 3. Responsive System
Design fluidly from small mobile through large desktop. Avoid breakpoint-only thinking. Use clamp(), minmax(), intrinsic layout, sensible max widths, and content-driven wrapping. Verify at narrow mobile, common phones, tablets, laptops, 1440p, and very wide screens.

### 4. Typography
Treat typography as a primary visual system. Define display, heading, body, label, and code roles. Control measure, leading, tracking, font loading, fallback metrics, and optical sizing where supported. Avoid excessive font weights or decorative type.

### 5. Materials and Depth
Use blur, translucency, shadows, borders, and gradients sparingly. Materials must preserve contrast and hierarchy. Avoid generic glassmorphism everywhere.

### 6. Motion
Invoke apple-design principles: immediate response, interruptibility, spatial consistency, restraint, reduced motion, and spring behavior for physical interactions. Motion must not delay access to content.

### 7. Imagery
Use aspect-ratio containers, responsive images, correct object-fit, explicit dimensions, and high-quality project imagery. Prevent layout shift. Do not stretch screenshots.

### 8. Visual QA
Run the site and inspect real renders. Compare hierarchy, spacing, type, contrast, radii, depth, image crop, hover/focus/pressed states, responsive behavior, scroll behavior, and reduced-motion behavior. Fix visible mismatches before completion.

## Quality Bar
The result should feel calm, deliberate, and premium. Avoid template-looking card grids, random gradients, excessive glow, animation on every element, oversized rounded rectangles, and ornamental complexity without hierarchy.

## Definition of Done
No overflow, no accidental clipping, correct focus states, fluid typography, consistent spacing, stable imagery, mobile and desktop inspection complete, reduced motion supported, and visual issues corrected after running the page.
