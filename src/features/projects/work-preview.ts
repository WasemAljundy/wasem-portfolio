import type { Project } from "@/content/projects";

export type WorkPreviewItem = {
  slug: string;
  title: string;
  domain: string;
  src: string;
};

export function getWorkPreviewItem(
  project: Project,
  variant: "deep" | "selected" | "archive",
): WorkPreviewItem | undefined {
  const src = project.productionAssets[0];
  if (variant === "archive" || !src) return undefined;

  return {
    slug: project.slug,
    title: project.title,
    domain: project.domains[0] ?? "Mobile product",
    src,
  };
}
