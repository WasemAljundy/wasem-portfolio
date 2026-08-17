# Wasem Portfolio — Milestone 0.5 Reconciliation

## Outcome

Milestone 1 foundation work is safe to start. The ownership, contact hierarchy, and supplied screenshot-data policy were subsequently confirmed before implementation. Release-level checks for unsupported metrics, current store status, canonical site URL, and third-party asset rights still remain.

No application implementation was started during this pass.

## Resolved blockers

- Restored and inspected `source-assets/MyWorks/`.
- Restored and hash-reconciled `source-assets/AFP/` against the normalized staging copies.
- Restored and visually/textually inspected the complete CV.
- Restored and inspected the canonical 1254×1254 portrait.
- Added AFP to the canonical JSON manifest while preserving its deep-case-study placement below the featured set; supplied demo/test imagery is now approved for normal curation.
- Replaced `from-cv` placeholders with the CV's Jood, Naseeb, and Sezon URLs.
- Corrected all local MyWorks source paths and file counts in both manifests.
- Updated `planning/asset-audit.csv` with source files, visual candidates, and non-public artifact counts.

## Source inventory

- MyWorks: 343 files total — files within 18 folders plus 2 root-level shared background PNG files.
- Visual candidates: 337 total — 334 PNG/JPEG files plus 3 MP4 recordings.
- Non-public source artifacts: 6 — 2 APK, 3 ZIP, and 1 PSD.
- Image integrity: all 334 PNG/JPEG files opened successfully.
- Exact duplicate groups: 5 groups / 10 files; curation should publish one copy only.
- AFP originals: 21 PNG files; 21/21 match normalized staging files byte-for-byte under SHA-256.
- Portrait: 1254×1254 JPEG; accepted as canonical personal portrait source.
- Store-only projects still have zero local assets and require official-store sourcing immediately before publication.

## Final reconciliations before Milestone 1

- Eureeca is `team-build`: collaborative production work with meaningful engineering contribution, never a sole-build claim.
- Sezon Store is `full-build`: Wasem confirmed complete end-to-end individual ownership.
- Primary actions are View Work, View Resume, and Contact Me. Email, LinkedIn, and GitHub are primary professional links; WhatsApp is secondary and labeled; Gaza appears in contextual content rather than hero prominence.
- Supplied AFP and MyWorks screenshots use demo/test data. Realistic names, faces, addresses, conversations, financial values, orders, locations, beneficiary details, and similar UI content do not trigger automatic quarantine or redaction.

## Genuine remaining confirmation gates

1. Confirm which CV metrics, ratings, award, and certification claims should be published and whether separate verification artifacts exist.
2. Confirm third-party publication rights for the portrait, app/store imagery, private-client brand assets, and shared mockup templates before final release.
3. Re-verify live store status and store-only imagery immediately before publication.
4. Set the canonical production site URL before deployment.

## Asset workflow decision

`source-assets/` is immutable original material. `normalized-assets/` is optional staging/curation only. Milestone 1 and later may select approved originals directly, create renamed/optimized derivatives, and place only those derivatives under `public/projects/<slug>/`; no manual normalized copy is required for every project. Genuine secrets and APK/ZIP/PSD/source archives remain prohibited from `public/`.
