# Production Asset Pipeline

The immutable originals in `source-assets/` are never referenced by production pages and are never modified in place. `normalized-assets/` is optional staging—not a prerequisite and not a publication allow-list.

## Flow

`source-assets/` → intentional selection → optional normalization/crop → resize for rendered use → WebP/AVIF where appropriate → semantic filename → `public/projects/<slug>/`

The portrait and canonical CV are handled by `npm run assets:build`. Future project entries should be added to that explicit allow-list or an equivalent reviewed project-specific builder. The process records output geometry and avoids unnecessary duplicate exports.

## Rules

- Preserve original aspect ratio unless an editorial crop is documented.
- Reserve width and height in rendered media to prevent layout shift.
- Keep UI text legible; do not over-compress screenshots.
- Eager-load only a confirmed above-the-fold LCP image; lazy-load galleries.
- Use stable lowercase semantic names, not source filenames or timestamps.
- Supplied screenshots contain approved demo/test data and do not require automatic PII redaction.
- Never publish `.apk`, `.ipa`, `.zip`, `.rar`, `.psd`, source archives, credentials, private keys, signing material, `.env` files, or unexpected genuine secrets.
- Run `npm run audit:public` before release.

Complete screenshot selection and project galleries remain Milestone 2+ work.
