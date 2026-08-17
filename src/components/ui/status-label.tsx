import type { ProjectStatus } from "@/content/projects";

const labels: Record<ProjectStatus, string> = {
  live: "Live",
  "private-client": "Private Client",
  "portfolio-only": "Portfolio Only",
};

export function StatusLabel({ status }: { status: ProjectStatus }) {
  return <span className="status-label">{labels[status]}</span>;
}
