# Production Asset Pipeline

The immutable originals in `source-assets/` are never referenced by production pages and are never modified in place. `normalized-assets/` is optional staging—not a prerequisite and not a publication allow-list.

## Flow

`source-assets/` → intentional selection → optional normalization/crop → resize for rendered use → WebP/AVIF where appropriate → semantic filename → `public/projects/<slug>/`

The portrait, canonical CV, and homepage project media are handled by `npm run assets:build`. Project entries belong to its explicit allow-list or an equivalent reviewed project-specific builder. Official-store downloads are optional build inputs: when the staging files are unavailable, the builder verifies the already reviewed production derivatives rather than reaching over the network. The process records output geometry, byte size, provenance intent, and avoids unnecessary duplicate exports.

## Rules

- Preserve original aspect ratio unless an editorial crop is documented.
- Reserve width and height in rendered media to prevent layout shift.
- Keep UI text legible; do not over-compress screenshots.
- Eager-load only a confirmed above-the-fold LCP image; lazy-load galleries.
- Use stable lowercase semantic names, not source filenames or timestamps.
- Supplied screenshots contain approved demo/test data and do not require automatic PII redaction.
- Never publish `.apk`, `.ipa`, `.zip`, `.rar`, `.psd`, source archives, credentials, private keys, signing material, `.env` files, or unexpected genuine secrets.
- Run `npm run audit:public` before release.

Milestone 2B curates the homepage set only. Broader case-study galleries remain later work and require the same explicit review.
