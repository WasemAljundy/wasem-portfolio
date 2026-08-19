import { portfolioManifest } from "@/content/projects";

export function parseSiteUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (!/^https?:$/.test(url.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS.");
  }
  return url.origin;
}

export function resolveSiteUrl({
  configuredUrl,
  vercelProductionHost,
}: {
  configuredUrl?: string;
  vercelProductionHost?: string;
}) {
  const configured = parseSiteUrl(configuredUrl);
  if (configured) return configured;
  return parseSiteUrl(
    vercelProductionHost?.trim() ? `https://${vercelProductionHost.trim()}` : undefined,
  );
}

const owner = portfolioManifest.owner;
const deploymentEnvironment = process.env.VERCEL_ENV;
const siteUrl = resolveSiteUrl({
  configuredUrl: process.env.NEXT_PUBLIC_SITE_URL,
  vercelProductionHost: process.env.VERCEL_PROJECT_PRODUCTION_URL,
});

if (process.env.VERCEL && deploymentEnvironment === "production" && !siteUrl) {
  throw new Error(
    "Production deployment requires NEXT_PUBLIC_SITE_URL or VERCEL_PROJECT_PRODUCTION_URL.",
  );
}

export const siteConfig = {
  name: owner.name,
  role: "Senior Flutter Engineer",
  title: `${owner.name} — Senior Flutter Engineer`,
  description:
    "Senior Flutter Engineer building reliable cross-platform mobile products, scalable architecture, and polished user experiences.",
  location: owner.location,
  siteUrl,
  deploymentEnvironment,
  isPreviewDeployment: deploymentEnvironment === "preview",
  email: owner.contact.email,
  social: {
    linkedin: owner.contact.linkedin,
    github: owner.contact.github,
    whatsapp: owner.contact.whatsapp,
  },
  resume: {
    html: "/resume",
    pdf: "/resume/wasem-aljundy-cv.pdf",
  },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export function absoluteUrl(pathname: string): string | undefined {
  return siteConfig.siteUrl ? new URL(pathname, siteConfig.siteUrl).toString() : undefined;
}
