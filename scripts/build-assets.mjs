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

const projectAssetDefinitions = [
  {
    id: "jood-browse",
    project: "jood",
    sourcePath:
      "source-assets/MyWorks/Jood App Images/appstore_marketing_browse_clean2_1242x2688.png",
    outputName: "browse-offers.webp",
    role: "dominant-product-visual",
    width: 920,
    altIntent: "Jood offer discovery and restaurant browsing flow",
  },
  {
    id: "jood-payment",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_payment_1242x2688.png",
    outputName: "secure-payment.webp",
    role: "supporting-product-visual",
    width: 760,
    altIntent: "Jood booking payment confirmation flow",
  },
  {
    id: "jood-details",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_details_1242x2688.png",
    outputName: "offer-details.webp",
    role: "case-study-flow-visual",
    width: 820,
    altIntent: "Jood restaurant details and availability flow",
  },
  {
    id: "jood-datetime",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_datetime_1242x2688.png",
    outputName: "booking-time.webp",
    role: "case-study-flow-visual",
    width: 760,
    altIntent: "Jood booking date and time selection flow",
  },
  {
    id: "jood-orders",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_orders_1242x2688.png",
    outputName: "order-history.webp",
    role: "case-study-flow-visual",
    width: 760,
    altIntent: "Jood paid booking history and QR access",
  },
  {
    id: "jood-qr",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_qr_1242x2688.png",
    outputName: "booking-qr.webp",
    role: "case-study-gallery-visual",
    width: 760,
    altIntent: "Jood booking QR retrieval from an existing order",
  },
  {
    id: "jood-sorting",
    project: "jood",
    sourcePath: "source-assets/MyWorks/Jood App Images/appstore_marketing_sort_1242x2688.png",
    outputName: "smart-sorting.webp",
    role: "case-study-gallery-visual",
    width: 760,
    altIntent: "Jood offer sorting by price discount and rating",
  },
  {
    id: "eureeca-deals",
    project: "eureeca",
    sourcePath: "tmp/store-assets/eureeca/01.jpg",
    sourceOrigin: "Google Play official store screenshot",
    outputName: "private-deals.webp",
    role: "dominant-product-visual",
    width: 900,
    optionalStaging: true,
    altIntent: "Eureeca private deal and IPO discovery screen",
  },
  {
    id: "eureeca-compliance",
    project: "eureeca",
    sourcePath: "tmp/store-assets/eureeca/03.jpg",
    sourceOrigin: "Google Play official store screenshot",
    outputName: "regulated-onboarding.webp",
    role: "supporting-product-visual",
    width: 760,
    optionalStaging: true,
    altIntent: "Eureeca regulated investor verification journey",
  },
  {
    id: "taseese-subjects",
    project: "taseese",
    sourcePath: "tmp/store-assets/taseese/02.jpg",
    sourceOrigin: "Apple App Store official screenshot",
    outputName: "subject-hierarchy.webp",
    role: "dominant-product-visual",
    width: 760,
    optionalStaging: true,
    altIntent: "Taseese learning dashboard organized by school subjects",
  },
  {
    id: "taseese-assessments",
    project: "taseese",
    sourcePath: "tmp/store-assets/taseese/03.jpg",
    sourceOrigin: "Apple App Store official screenshot",
    outputName: "assessment-progress.webp",
    role: "supporting-product-visual",
    width: 680,
    optionalStaging: true,
    altIntent: "Taseese learner assessment and progress reports",
  },
  {
    id: "aura-fit-dashboard",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/27.png",
    outputName: "daily-dashboard.webp",
    role: "dominant-product-visual",
    width: 760,
    altIntent: "Aura Fit daily activity and nutrition dashboard",
  },
  {
    id: "aura-fit-food-analysis",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/25.png",
    outputName: "food-analysis.webp",
    role: "supporting-product-visual",
    width: 680,
    altIntent: "Aura Fit food analysis with calorie and macro estimates",
  },
  {
    id: "aura-fit-workout",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/18.png",
    outputName: "workout-library.webp",
    role: "supporting-product-visual",
    width: 680,
    altIntent: "Aura Fit workout library and exercise selection",
  },
  {
    id: "aura-fit-training-types",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/17.png",
    outputName: "training-types.webp",
    role: "case-study-flow-visual",
    width: 680,
    altIntent: "Aura Fit workout categories for personalized training",
  },
  {
    id: "aura-fit-exercise-detail",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/19.png",
    outputName: "exercise-detail.webp",
    role: "case-study-flow-visual",
    width: 680,
    altIntent: "Aura Fit exercise detail and guided workout start",
  },
  {
    id: "aura-fit-workout-complete",
    project: "aura-fit",
    sourcePath: "source-assets/MyWorks/AuraFit/24.png",
    outputName: "workout-complete.webp",
    role: "case-study-flow-visual",
    width: 680,
    altIntent: "Aura Fit completed workout summary",
  },
  {
    id: "sezon-catalog",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/1.png",
    outputName: "catalog-discovery.webp",
    role: "dominant-product-visual",
    width: 720,
    altIntent: "Sezon Store catalogue and product discovery",
  },
  {
    id: "sezon-product-detail",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/2.png",
    outputName: "product-detail.webp",
    role: "case-study-flow-visual",
    width: 720,
    altIntent: "Sezon Store product detail and purchase controls",
  },
  {
    id: "sezon-checkout",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/3.png",
    outputName: "checkout-summary.webp",
    role: "dominant-product-visual",
    width: 720,
    altIntent: "Sezon Store checkout and order review",
  },
  {
    id: "sezon-payment",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/4.png",
    outputName: "payment-methods.webp",
    role: "case-study-flow-visual",
    width: 720,
    altIntent: "Sezon Store payment method selection",
  },
  {
    id: "sezon-orders",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/6.png",
    outputName: "order-management.webp",
    role: "case-study-flow-visual",
    width: 720,
    altIntent: "Sezon Store customer order management",
  },
  {
    id: "sezon-product-creation",
    project: "sezon-store",
    sourcePath: "source-assets/MyWorks/Sezon Store/10.png",
    outputName: "product-creation.webp",
    role: "case-study-gallery-visual",
    width: 720,
    altIntent: "Sezon Store vendor product creation workflow",
  },
  {
    id: "afp-home",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/الهوم اول ما يدخل.png",
    outputName: "fundraiser-discovery.webp",
    role: "dominant-product-visual",
    width: 750,
    altIntent: "Aid For Palestine fundraiser discovery using approved demonstration data",
  },
  {
    id: "afp-story-create",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/story2.png",
    outputName: "story-creation.webp",
    role: "case-study-flow-visual",
    width: 750,
    altIntent: "Aid For Palestine beneficiary story creation form",
  },
  {
    id: "afp-story-detail",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/details.png",
    outputName: "story-detail.webp",
    role: "dominant-product-visual",
    width: 750,
    altIntent: "Aid For Palestine fundraiser story detail using approved demonstration data",
  },
  {
    id: "afp-verification",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/verify.png",
    outputName: "identity-verification.webp",
    role: "case-study-flow-visual",
    width: 750,
    altIntent: "Aid For Palestine identity verification workflow",
  },
  {
    id: "afp-wallet",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/My Wallet.png",
    outputName: "beneficiary-wallet.webp",
    role: "case-study-flow-visual",
    width: 750,
    altIntent: "Aid For Palestine beneficiary wallet using approved demonstration data",
  },
  {
    id: "afp-withdrawal",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/Enter Withdrawal Details.png",
    outputName: "withdrawal-review.webp",
    role: "case-study-flow-visual",
    width: 750,
    altIntent: "Aid For Palestine bank withdrawal review form",
  },
  {
    id: "afp-messages",
    project: "aid-for-palestine",
    sourcePath: "source-assets/AFP/massega.png",
    outputName: "support-messages.webp",
    role: "case-study-gallery-visual",
    width: 750,
    altIntent: "Aid For Palestine real-time messaging surface using approved demonstration data",
  },
  {
    id: "eisal-invoices",
    project: "eisal",
    sourcePath: "source-assets/MyWorks/Eisal/12.png",
    outputName: "invoice-workflow.webp",
    role: "dominant-product-visual",
    width: 760,
    altIntent: "Eisal multilingual invoice organization workflow",
  },
  {
    id: "eisal-dark-mode",
    project: "eisal",
    sourcePath: "source-assets/MyWorks/Eisal/Home_DarkMode.png",
    outputName: "dark-mode-insights.webp",
    role: "supporting-product-visual",
    width: 680,
    altIntent: "Eisal dark theme system and receipt insights interface",
  },
  {
    id: "gader-categories",
    project: "gader",
    sourcePath: "tmp/store-assets/gader/01.jpg",
    sourceOrigin: "Google Play official store screenshot",
    outputName: "consultation-categories.webp",
    role: "dominant-product-visual",
    width: 760,
    optionalStaging: true,
    altIntent: "Gader volunteer consultation categories",
  },
  {
    id: "gader-expert",
    project: "gader",
    sourcePath: "tmp/store-assets/gader/03.jpg",
    sourceOrigin: "Google Play official store screenshot",
    outputName: "expert-profile.webp",
    role: "supporting-product-visual",
    width: 680,
    optionalStaging: true,
    altIntent: "Gader volunteer expert profile and consultation selection",
  },
];

function relative(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

await mkdir(path.dirname(paths.portraitOutput), { recursive: true });
await mkdir(path.dirname(paths.resumeOutput), { recursive: true });

if (await isFile(paths.portraitSource)) {
  await sharp(paths.portraitSource)
    .rotate()
    .resize(960, 960, { fit: "cover", position: "centre", withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(paths.portraitOutput);
} else if (!(await isFile(paths.portraitOutput))) {
  throw new Error(
    `${relative(paths.portraitSource)} is unavailable and ${relative(paths.portraitOutput)} has no committed fallback.`,
  );
}

if (await isFile(paths.resumeSource)) {
  await copyFile(paths.resumeSource, paths.resumeOutput);
} else if (!(await isFile(paths.resumeOutput))) {
  throw new Error(
    `${relative(paths.resumeSource)} is unavailable and ${relative(paths.resumeOutput)} has no committed fallback.`,
  );
}

const portrait = await sharp(paths.portraitOutput).metadata();
const portraitStat = await stat(paths.portraitOutput);
const resumeStat = await stat(paths.resumeOutput);

const projectAssets = [];
for (const definition of projectAssetDefinitions) {
  const source = path.join(root, definition.sourcePath);
  const output = path.join(root, "public", "projects", definition.project, definition.outputName);
  const sourceExists = await isFile(source);

  await mkdir(path.dirname(output), { recursive: true });

  if (sourceExists) {
    await sharp(source)
      .rotate()
      .resize({ width: definition.width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(output);
  } else if (!(await isFile(output))) {
    throw new Error(
      `${definition.sourcePath} is unavailable and ${relative(output)} has no committed fallback.`,
    );
  }

  const metadata = await sharp(output).metadata();
  const outputStat = await stat(output);
  projectAssets.push({
    id: definition.id,
    project: definition.project,
    sourcePath: definition.sourceOrigin ?? definition.sourcePath,
    publicPath: relative(output),
    role: definition.role,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    bytes: outputStat.size,
    altIntent: definition.altIntent,
  });
}

const manifest = {
  version: 2,
  generatedBy: "scripts/build-assets.mjs",
  policy: {
    sourceAssetsImmutable: true,
    normalizedAssetsOptional: true,
    projectOutputPattern: "public/projects/<slug>/",
    privateSourceDirectoriesPublished: false,
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
      bytes: portraitStat.size,
      altIntent: "Portrait of Wasem Aljundy",
    },
    {
      id: "wasem-resume-pdf",
      sourcePath: relative(paths.resumeSource),
      publicPath: relative(paths.resumeOutput),
      role: "resume-download",
      format: "pdf",
      bytes: resumeStat.size,
      altIntent: "Canonical downloadable CV",
    },
    ...projectAssets,
  ],
};

await writeFile(paths.manifestOutput, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Built or verified ${manifest.assets.length} allow-listed production assets.`);
