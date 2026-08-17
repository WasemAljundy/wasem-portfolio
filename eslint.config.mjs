import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    ".agents/**",
    ".npm-cache/**",
    "node_modules/**",
    "normalized-assets/**",
    "source-assets/**",
    "playwright-report/**",
    "public/**",
    "tmp/**",
    "test-results/**",
  ]),
]);
