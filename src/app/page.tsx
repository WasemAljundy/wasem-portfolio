import Image from "next/image";

import { ContactLinks } from "@/components/layout/contact-links";
import { ActionLink } from "@/components/ui/action-link";

export default function HomePage() {
  return (
    <>
      <section className="hero-foundation" aria-labelledby="hero-title">
        <div className="hero-grid container">
          <div>
            <p className="eyebrow">Senior Flutter Engineer</p>
            <h1 className="display" id="hero-title">
              Mobile products built with judgment.
            </h1>
            <p className="lede">
              I’m Wasem Aljundy. I engineer reliable Flutter and Android experiences from
              architecture and implementation through release.
            </p>
            <ul className="action-row" aria-label="Primary actions">
              <li>
                <ActionLink href="/work" variant="primary">
                  View Work
                </ActionLink>
              </li>
              <li>
                <ActionLink href="/resume">View Resume</ActionLink>
              </li>
              <li>
                <ActionLink href="/#contact">Contact Me</ActionLink>
              </li>
            </ul>
          </div>
          <figure className="portrait-frame">
            <Image
              alt="Portrait of Wasem Aljundy"
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 2rem), 30rem"
              src="/images/wasem-aljundy-portrait.webp"
            />
          </figure>
        </div>
      </section>

      <div className="proof-strip" aria-label="Engineering focus">
        <ul className="proof-list container">
          <li>Flutter &amp; Dart specialization</li>
          <li>Scalable mobile architecture</li>
          <li>iOS &amp; Android delivery</li>
        </ul>
      </div>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel container">
          <div className="reading-width">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title" id="contact-title">
              Let’s discuss serious mobile product work.
            </h2>
            <p className="lede">
              Based in Gaza, Palestine and available through direct professional channels.
            </p>
          </div>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
