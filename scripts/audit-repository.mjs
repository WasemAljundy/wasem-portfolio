import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const git = spawnSync(
  "git",
  [
    "-c",
    `safe.directory=${root.replaceAll("\\", "/")}`,
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
    "-z",
  ],
  { cwd: root, encoding: "utf8" },
);
if (git.status !== 0) throw new Error(git.stderr || "Unable to inspect tracked files.");

const trackedFiles = git.stdout.split("\0").filter(Boolean);
const forbiddenPrefixes = [
  ".next/",
  ".vercel/",
  "normalized-assets/",
  "playwright-report/",
  "source-assets/",
  "test-results/",
  "tmp/",
];
const forbiddenExtensions = new Set([
  ".aab",
  ".apk",
  ".ipa",
  ".jks",
  ".keystore",
  ".key",
  ".log",
  ".p12",
  ".pem",
  ".psd",
  ".rar",
  ".zip",
]);
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
  ".yaml",
  ".yml",
]);
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bAIza[0-9A-Za-z_-]{20,}/,
  /\bgh[pousr]_[0-9A-Za-z]{20,}/,
  /\bsk_(?:live|test)_[0-9A-Za-z]{12,}/,
  /(?:api[_-]?key|access[_-]?token|client[_-]?secret)\s*[:=]\s*["'][^"']{12,}/i,
];

const findings = [];
for (const file of trackedFiles) {
  const normalized = file.replaceAll("\\", "/");
  const extension = path.extname(file).toLowerCase();
  if (forbiddenPrefixes.some((prefix) => normalized.startsWith(prefix))) {
    findings.push(`${normalized}: forbidden tracked directory`);
  }
  if (forbiddenExtensions.has(extension)) {
    findings.push(`${normalized}: forbidden tracked artifact`);
  }
  if (/^\.env/i.test(path.basename(file)) && normalized !== ".env.example") {
    findings.push(`${normalized}: environment file must not be tracked`);
  }
  if (textExtensions.has(extension) && !normalized.startsWith(".agents/")) {
    const contents = await readFile(path.join(root, file), "utf8");
    if (secretPatterns.some((pattern) => pattern.test(contents))) {
      findings.push(`${normalized}: potential credential pattern`);
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`Repository audit passed (${trackedFiles.length} versioned or pending files checked).`);
