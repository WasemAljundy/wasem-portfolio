import { absoluteUrl } from "@/config/site";
import type { Project } from "@/content/projects";

export function ProjectStructuredData({ project }: { project: Project }) {
  const url = absoluteUrl(`/work/${project.slug}`);
  const image = project.productionAssets[0] ? absoluteUrl(project.productionAssets[0]) : undefined;
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    applicationCategory: "MobileApplication",
    operatingSystem: project.platforms.join(", "),
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    sameAs: project.links.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}
