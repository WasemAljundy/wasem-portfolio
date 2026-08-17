import { ActionLink } from "@/components/ui/action-link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="reading-width container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page is not part of the portfolio.</h1>
        <p className="lede">Return to the selected work or resume without losing your path.</p>
        <ul className="action-row">
          <li>
            <ActionLink href="/work" variant="primary">
              View Work
            </ActionLink>
          </li>
          <li>
            <ActionLink href="/resume">View Resume</ActionLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
