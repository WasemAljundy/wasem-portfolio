import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { caseStudyProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/resume",
    ...caseStudyProjects.map((project) => `/work/${project.slug}`),
  ];

  return paths.flatMap((pathname) => {
    const url = absoluteUrl(pathname);
    return url
      ? [{ url, changeFrequency: "monthly" as const, priority: pathname === "/" ? 1 : 0.7 }]
      : [];
  });
}
