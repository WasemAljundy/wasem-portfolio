import type { Metadata } from "next";

import { ContactLinks } from "@/components/layout/contact-links";
import { ActionLink } from "@/components/ui/action-link";
import { siteConfig } from "@/config/site";
import { resume } from "@/content/resume";
import { ResumeSection } from "@/features/resume/components/resume-section";
import { createMetadata } from "@/lib/seo/metadata";

const description =
  "Accessible HTML resume for Wasem Aljundy, Senior Flutter Engineer, with experience, skills, education, training, and a canonical PDF download.";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description,
  pathname: "/resume",
});

export default function ResumePage() {
  return (
    <article className="section">
      <div className="container">
        <header className="section-heading">
          <p className="eyebrow">Resume</p>
          <h1 className="page-title">Wasem Aljundy</h1>
          <p className="section-copy">{resume.summary}</p>
          <p className="section-copy">{siteConfig.location}</p>
          <ul className="action-row resume-actions" aria-label="Resume actions">
            <li>
              <ActionLink download href="/resume/wasem-aljundy-cv.pdf" variant="primary">
                Download PDF
              </ActionLink>
            </li>
            <li>
              <ActionLink href="/work">View Work</ActionLink>
            </li>
          </ul>
        </header>

        <div className="resume-grid">
          <div className="detail-block">
            <ResumeSection title="Experience">
              <ol className="resume-list">
                {resume.experience.map((item) => (
                  <li className="resume-item" key={`${item.organization}-${item.role}`}>
                    <div className="resume-item-header">
                      <div>
                        <h3>{item.role}</h3>
                        <p>{item.organization}</p>
                      </div>
                      <span className="resume-date">{item.dates}</span>
                    </div>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </ResumeSection>

            <ResumeSection title="Education">
              <ol className="resume-list">
                {resume.education.map((item) => (
                  <li className="resume-item" key={item.credential}>
                    <div className="resume-item-header">
                      <div>
                        <h3>{item.credential}</h3>
                        <p>{item.institution}</p>
                      </div>
                      <span className="resume-date">{item.dates}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </ResumeSection>
          </div>

          <aside className="detail-block" aria-label="Skills, training, and contact">
            <ResumeSection title="Core skills">
              <ul className="tag-list">
                {resume.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection title="Training & certifications">
              <ul className="resume-list">
                {resume.training.map((item) => (
                  <li className="resume-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="evidence-note">
                Listed on the supplied CV; verification URLs are not published.
              </p>
            </ResumeSection>
            <ResumeSection title="Contact">
              <ContactLinks />
            </ResumeSection>
          </aside>
        </div>
      </div>
    </article>
  );
}
