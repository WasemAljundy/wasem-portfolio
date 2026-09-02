# Milestone 6A theme synthesis

## Goal and constraints

Add an adaptive Light / System / Dark theme without changing the portfolio's approved information architecture, typography, project art direction, or content. The theme control must remain a small enhancement: pages stay server rendered and readable without JavaScript, while an inline pre-paint initializer prevents the wrong theme from flashing.

## Accepted direction

- Preserve the existing light theme as the visual baseline.
- Use semantic surface, text, border, action, focus, and material tokens for the site shell and neutral sections.
- Give dark mode a restrained near-black and navy-charcoal foundation with cobalt actions; retain the same editorial hierarchy and density.
- Keep each project's intentional palette unchanged. Dark mode changes the surrounding site chrome, not the authored visual identity of case studies or featured project chapters.
- Use a compact three-state segmented control in the header. Native radio semantics provide the selected state and keyboard behavior; every target is at least 44px.
- Animate only color, opacity, and the switcher's transform-based indicator for 240ms, with reduced-motion behavior respected.
- Store only the validated preference value (`light`, `system`, or `dark`) and follow operating-system changes while System is selected.

## Rejected direction

- Pure black OLED surfaces, neon accents, glow effects, glass-heavy styling, or a mechanical color inversion. These conflict with the approved calm, professional direction and reduce consistency with the light theme.
- A third-party theme package. The required state model is small, and another runtime dependency would add client weight without improving the result.
- Making the root layout, page, or header a client component. Only the theme switcher needs a client boundary.
- Recoloring project-specific sections to match the global dark palette. That would erase deliberate project storytelling and art direction.
- Width, height, or layout animation. Theme transitions must not cause layout shift.

## Acceptance criteria

- Light, System, and Dark are explicit, persistent, keyboard-operable modes.
- System follows `prefers-color-scheme` changes in the current tab; saved changes synchronize across tabs.
- The resolved theme is present on `<html>` before hydration, with no incorrect-theme flash or hydration warning.
- Header, homepage neutral sections, work index, resume, 404, shared shell, focus states, and cursor remain legible in both resolved themes.
- All eight deep case studies retain their authored palettes while shared navigation and footer adapt.
- Print output is forced to a light, ink-on-white presentation.
- No new dependency, no horizontal overflow at 375 / 768 / 1024 / 1440px, and no serious or critical axe violations.
