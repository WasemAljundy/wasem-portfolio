import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <p>© {new Date().getFullYear()} Wasem Aljundy. Built for clarity, evidence, and access.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <Link className="footer-link" href="/work">
                View Work
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/resume">
                View Resume
              </Link>
            </li>
            <li>
              <a className="footer-link" href={`mailto:${siteConfig.email}`}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
