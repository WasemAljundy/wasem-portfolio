import { createElement } from "react";
import { ImageResponse } from "next/og";

import { getProject } from "@/content/projects";
import { siteConfig } from "@/config/site";

const size = { width: 1200, height: 630 };

export function GET(request: Request) {
  const projectSlug = new URL(request.url).searchParams.get("project");
  const candidate = projectSlug ? getProject(projectSlug) : undefined;
  const project =
    candidate?.caseStudyEligible && candidate.visibility !== "withheld" ? candidate : undefined;
  const title = project?.title ?? siteConfig.name;
  const subtitle = project
    ? `${siteConfig.name} · Flutter engineering case study`
    : siteConfig.role;

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f6f4",
          color: "#101418",
          padding: "76px",
          fontFamily: "Arial, sans-serif",
        },
      },
      createElement(
        "div",
        { style: { color: "#0b57d0", fontSize: 28, fontWeight: 700 } },
        project ? "PRODUCT PROOF · ENGINEERED" : "MOBILE ENGINEERING",
      ),
      createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: 18 } },
        createElement(
          "div",
          { style: { fontSize: 86, fontWeight: 700, letterSpacing: "-4px" } },
          title,
        ),
        createElement("div", { style: { color: "#56616d", fontSize: 38 } }, subtitle),
      ),
    ),
    size,
  );
}
