"use client";

import { useEffect, useRef } from "react";

export function ContextualCursor() {
  const companionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const companion = companionRef.current;
    if (!companion) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeTarget: HTMLElement | null = null;
    let frame = 0;
    let x = 0;
    let y = 0;

    const isEnabled = () => finePointer.matches && !reducedMotion.matches;
    const hide = () => {
      activeTarget = null;
      companion.dataset.active = "false";
    };
    const renderPosition = () => {
      companion.style.transform = `translate3d(${x + 16}px, ${y + 16}px, 0)`;
      frame = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!isEnabled() || event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(renderPosition);
    };
    const onPointerOver = (event: PointerEvent) => {
      if (!isEnabled() || event.pointerType === "touch") return;
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-cursor-label]");
      if (!target) return;
      activeTarget = target;
      companion.textContent = target.dataset.cursorLabel ?? "View";
      companion.dataset.active = "true";
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!activeTarget) return;
      const nextTarget = event.relatedTarget;
      if (nextTarget instanceof Node && activeTarget.contains(nextTarget)) return;
      if ((event.target as Node | null) && activeTarget.contains(event.target as Node)) hide();
    };
    const onPreferenceChange = () => {
      if (!isEnabled()) hide();
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    finePointer.addEventListener("change", onPreferenceChange);
    reducedMotion.addEventListener("change", onPreferenceChange);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      finePointer.removeEventListener("change", onPreferenceChange);
      reducedMotion.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="contextual-cursor"
      data-active="false"
      data-testid="contextual-cursor"
      ref={companionRef}
    />
  );
}
