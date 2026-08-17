import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";

import { SocialLink } from "../../src/components/ui/social-link";

test("external professional links expose a visible label and safe new-tab behavior", () => {
  const markup = renderToStaticMarkup(
    <SocialLink href="https://github.com/WasemAljundy" icon="github" label="GitHub" />,
  );

  assert.match(markup, />GitHub</);
  assert.match(markup, /target="_blank"/);
  assert.match(markup, /rel="noopener noreferrer"/);
  assert.match(markup, /aria-hidden="true"/);
});

test("email links stay in the current browsing context", () => {
  const markup = renderToStaticMarkup(
    <SocialLink
      external={false}
      href="mailto:wasemaljundy22@gmail.com"
      icon="email"
      label="Email"
    />,
  );

  assert.doesNotMatch(markup, /target=/);
  assert.match(markup, /mailto:wasemaljundy22@gmail.com/);
});
