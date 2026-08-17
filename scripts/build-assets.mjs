import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const paths = {
  portraitSource: path.join(root, "portrait.jpg"),
  portraitOutput: path.join(root, "public", "images", "wasem-aljundy-portrait.webp"),
  resumeSource: path.join(root, "Wasem Aljundy CV.pdf"),
  resumeOutput: path.join(root, "public", "resume", "wasem-aljundy-cv.pdf"),
  manifestOutput: path.join(root, "planning", "production-asset-manifest.json"),
};

function relative(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

for (const source of [paths.portraitSource, paths.resumeSource]) {
  const sourceStat = await stat(source);
  if (!sourceStat.isFile()) {
    throw new Error(`${relative(source)} is not a file.`);
  }
}

await mkdir(path.dirname(paths.portraitOutput), { recursive: true });
await mkdir(path.dirname(paths.resumeOutput), { recursive: true });

const portrait = await sharp(paths.portraitSource)
  .rotate()
  .resize(960, 960, { fit: "cover", position: "centre", withoutEnlargement: true })
  .webp({ quality: 84, effort: 5 })
  .toFile(paths.portraitOutput);

await copyFile(paths.resumeSource, paths.resumeOutput);
const resume = await stat(paths.resumeOutput);

const manifest = {
  version: 1,
  generatedBy: "scripts/build-assets.mjs",
  policy: {
    sourceAssetsImmutable: true,
    normalizedAssetsOptional: true,
    projectOutputPattern: "public/projects/<slug>/",
  },
  assets: [
    {
      id: "wasem-portrait",
      sourcePath: relative(paths.portraitSource),
      publicPath: relative(paths.portraitOutput),
      role: "portrait",
      width: portrait.width,
      height: portrait.height,
      format: portrait.format,
      bytes: portrait.size,
      altIntent: "Portrait of Wasem Aljundy",
    },
    {
      id: "wasem-resume-pdf",
      sourcePath: relative(paths.resumeSource),
      publicPath: relative(paths.resumeOutput),
      role: "resume-download",
      format: "pdf",
      bytes: resume.size,
      altIntent: "Canonical downloadable CV",
    },
  ],
};

await writeFile(paths.manifestOutput, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Built ${manifest.assets.length} allow-listed production assets.`);
