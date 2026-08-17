# Pre-Codex Setup

Do these steps from the final `wasem-portfolio` repository root.

## 1. Place source material
Keep the raw assets outside production paths:

```text
source-assets/
  MyWorks/
  AFP/
```

Also place:

```text
Wasem Aljundy CV.pdf
portrait.jpg
```

Do not rename or destructively edit the raw `source-assets` originals.

## 2. Install UI/UX Pro Max for Codex
The project includes platform-specific helper scripts.

### Windows PowerShell

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\install-ui-ux-pro-max.ps1
```

### macOS/Linux

```bash
./scripts/install-ui-ux-pro-max.sh
```

The expected result is:

```text
.agents/skills/ui-ux-pro-max/SKILL.md
```

Python 3 is also required by the skill's local search script.

## 3. Confirm custom portfolio skills
The repository should already contain:

```text
.agents/skills/apple-design/
.agents/skills/web-ui-precision/
.agents/skills/portfolio-storytelling/
.agents/skills/recruiter-conversion/
...other portfolio skills
```

## 4. Open the repository in Codex
Use `planning/codex-master-kickoff.md` as the first project prompt.

Codex must perform **Milestone 0 only**, including the UI/UX Pro Max design-system generation and synthesis. Do not allow broad implementation before reviewing its Milestone 0 result.
