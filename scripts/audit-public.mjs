import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicRoot = path.join(root, "public");
const forbiddenExtensions = new Set([
  ".apk",
  ".env",
  ".ipa",
  ".jks",
  ".keystore",
  ".key",
  ".p12",
  ".pem",
  ".psd",
  ".rar",
  ".zip",
]);
const forbiddenNames = [/^\.env/i, /^id_rsa/i, /service[-_]?account/i, /credential/i, /secret/i];
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /(?:api[_-]?key|access[_-]?token|client[_-]?secret)\s*[:=]\s*["'][^"']{12,}/i,
];
const textExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".svg", ".txt", ".xml"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const entryPath = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(entryPath) : [entryPath];
      }),
    )
  ).flat();
}

let files = [];
try {
  files = await walk(publicRoot);
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.log("public/ does not exist yet; nothing to audit.");
    process.exit(0);
  }
  throw error;
}

const findings = [];
for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  const relativePath = path.relative(root, file).replaceAll("\\", "/");
  if (
    forbiddenExtensions.has(extension) ||
    forbiddenNames.some((pattern) => pattern.test(path.basename(file)))
  ) {
    findings.push(`${relativePath}: forbidden public artifact`);
    continue;
  }
  if (textExtensions.has(extension)) {
    const contents = await readFile(file, "utf8");
    if (secretPatterns.some((pattern) => pattern.test(contents))) {
      findings.push(`${relativePath}: potential secret pattern`);
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`Public asset audit passed (${files.length} files checked).`);
