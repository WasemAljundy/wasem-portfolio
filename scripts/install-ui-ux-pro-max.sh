#!/usr/bin/env bash
set -euo pipefail

echo "Installing UI UX Pro Max CLI..."
npm install -g ui-ux-pro-max-cli

echo "Installing UI UX Pro Max for Codex in this repository..."
uipro init --ai codex

if [ ! -f ".agents/skills/ui-ux-pro-max/SKILL.md" ]; then
  echo "Expected .agents/skills/ui-ux-pro-max/SKILL.md was not found." >&2
  exit 1
fi

echo "UI UX Pro Max is ready at .agents/skills/ui-ux-pro-max/"
