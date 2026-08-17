# START HERE — Wasem Portfolio + Codex

This package is the final project-control layer. Do not start with a generic "build my portfolio" prompt.

## Step 1 — Create/open the repository
Create a folder named for example:

```text
wasem-portfolio
```

Copy **all contents of this package** into that folder.

## Step 2 — Add your raw source files
Add the existing local materials that are intentionally not duplicated in this control package:

```text
source-assets/
  MyWorks/
  AFP/

Wasem Aljundy CV.pdf
portrait.jpg
```

`MyWorks/` should be the extracted original portfolio-assets folder. `AFP/` should contain the original AFP screenshots.

## Step 3 — Install UI/UX Pro Max for Codex
On Windows PowerShell from the repository root:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\install-ui-ux-pro-max.ps1
```

Expected result:

```text
.agents/skills/ui-ux-pro-max/SKILL.md
```

The helper follows the upstream project's official Codex flow: `ui-ux-pro-max-cli` + `uipro init --ai codex`.

## Step 4 — Verify prerequisites
Confirm:

```text
Node/npm available
Python 3 available
.agents/skills/ui-ux-pro-max/SKILL.md exists
.agents/skills/apple-design/SKILL.md exists
planning/project-manifest.json exists
source-assets/MyWorks/ exists
source-assets/AFP/ exists
portrait.jpg exists
Wasem Aljundy CV.pdf exists
```

## Step 5 — Open in Codex
Open the repository root in Codex.

Use the **entire contents** of:

```text
planning/codex-master-kickoff.md
```

as the first prompt.

## Step 6 — Stop after Milestone 0
Codex must not build the full site yet.

Its first milestone must:
- inspect everything;
- run UI/UX Pro Max design-system generation;
- synthesize its recommendations with Apple Design + Web UI Precision + recruiter/storytelling goals;
- create `planning/design-system-synthesis.md`;
- propose architecture, asset normalization, design direction, risks, and Milestone 1 plan.

After Codex returns Milestone 0, bring that response back to ChatGPT for review before telling Codex to continue.
