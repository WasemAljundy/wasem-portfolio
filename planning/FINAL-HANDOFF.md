# Final Handoff Notes

AFP assets have been incorporated into the planning package as a dedicated case study source.

## AFP normalized assets
The original archive remains untouched. A normalized copy exists under:
`normalized-assets/AFP/`

The images cover onboarding/impact, authentication, beneficiary stories and updates, donations, wallet, withdrawal, bank accounts, QR fundraising, verification, messages, and technical support.

Wasem confirmed the screenshots use demo/test data. They may participate normally in curation without automatic PII redaction. Keep originals immutable, emit only selected optimized derivatives, and continue scanning for genuine secrets or development artifacts.

## Next local setup
Create the portfolio repository and place the previously downloaded project materials into it using a structure similar to:

```
wasem-portfolio/
  AGENTS.portfolio.md
  README.md
  .agents/
    skills/
  UI-UX-PRO-MAX-INTEGRATION.md
  PRE-CODEX-SETUP.md
  scripts/
  planning/
    project-manifest.json
    project-manifest.md
    implementation-brief.md
    asset-audit.csv
    codex-master-kickoff.md
  source-assets/
    MyWorks/
    AFP/
  Wasem_Portfolio_Blueprint_v1.md
  Wasem Aljundy CV.pdf
  portrait.jpg
```

Keep `source-assets/` as raw design/source material. Codex should copy only selected optimized assets into the production `public/` tree.

Before starting Codex, run the platform-appropriate script under `scripts/` to install UI/UX Pro Max for Codex. Confirm `.agents/skills/ui-ux-pro-max/SKILL.md` exists.

Then start Codex using the contents of `planning/codex-master-kickoff.md`. Milestone 0 must generate and synthesize the design system before broad implementation.
