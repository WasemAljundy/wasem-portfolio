$ErrorActionPreference = "Stop"

Write-Host "Installing UI UX Pro Max CLI..."
npm install -g ui-ux-pro-max-cli

Write-Host "Installing UI UX Pro Max for Codex in this repository..."
uipro init --ai codex

Write-Host "Checking expected Codex skill path..."
$skillPath = Join-Path (Get-Location) ".agents\skills\ui-ux-pro-max\SKILL.md"
if (-not (Test-Path $skillPath)) {
  throw "UI UX Pro Max installation finished but $skillPath was not found."
}

Write-Host "UI UX Pro Max is ready at .agents/skills/ui-ux-pro-max/"
