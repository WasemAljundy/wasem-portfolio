# Aid for Palestine — Demo Asset Publication Policy

## Reconciled decision

Wasem confirmed that all supplied AFP screenshots use intentional demo/test data. The former default quarantine and PII-redaction requirements are superseded. All 21 source PNG files may participate normally in portfolio curation without automatic blurring, reconstruction, or rejection because they contain realistic names, faces, beneficiary details, locations, conversations, QR imagery, or financial values.

AFP remains a `private-client` project and a deep case study below the featured six. That positioning limits the story's prominence; it does not make the supplied demo screenshots sensitive.

## Source integrity

- `source-assets/AFP/` contains 21 immutable original PNG files.
- All 21 have byte-identical renamed staging copies under `normalized-assets/AFP/`.
- `normalized-assets/` is optional staging/curation, not a publication prerequisite or allow-list.
- Originals must never be overwritten or optimized in place.

## Production workflow

For each selected screenshot:

1. Select from `source-assets/AFP/` directly or from optional staging.
2. Choose an intentional crop and reserve its intrinsic aspect ratio.
3. Rename it with a stable semantic filename.
4. Resize only where justified by rendered dimensions.
5. Compress to an appropriate modern web format while preserving UI legibility.
6. Emit only the derivative to `public/projects/aid-for-palestine/`.
7. Record source path, output path, dimensions, format, and intended alt text.

## Continuing safety rules

Demo/test content does not require a PII-redaction workflow. Engineering hygiene still applies:

- Never publish genuine credentials, API keys, access tokens, passwords, private keys, signing material, `.env` contents, or unexpected real secrets.
- Never copy APK, ZIP, PSD, source-code archives, or development artifacts into `public/`.
- Keep client status and project claims truthful; do not imply a live public destination when none exists.
- Avoid duplicate exports and publish only deliberately selected derivatives.

## Public story

AFP may use its supplied demo imagery to demonstrate the humanitarian-aid, beneficiary, donation, wallet, withdrawal, verification, QR fundraising, messaging, and support workflows already supported by the manifest and CV evidence. Complete case-study composition remains outside Milestone 1.
