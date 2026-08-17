import type { ProjectLink } from "@/content/projects";

import { Icon } from "@/components/ui/icon";

export function ProjectLinks({ links }: { links: readonly ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="project-links" aria-label="Project destinations">
      {links.map((link) => (
        <li key={link.type}>
          <a
            className="project-external-link"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{link.label}</span>
            <Icon name={link.type === "github" ? "github" : "external"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
