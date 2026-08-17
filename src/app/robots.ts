import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(sitemap ? { sitemap } : {}),
  };
}
