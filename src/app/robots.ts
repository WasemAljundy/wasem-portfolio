import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");
  if (siteConfig.isPreviewDeployment) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(sitemap ? { sitemap } : {}),
  };
}
