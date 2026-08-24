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
    let companionWidth = 176;
    let companionHeight = 40;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    const pointerGap = 16;
    const viewportGutter = 8;

    const isEnabled = () => finePointer.matches && !reducedMotion.matches;
    const hide = () => {
      activeTarget = null;
      companion.dataset.active = "false";
    };
    const renderPosition = () => {
      const preferredX = x + pointerGap;
      const preferredY = y + pointerGap;
      const flippedX = x - companionWidth - pointerGap;
      const flippedY = y - companionHeight - pointerGap;
      const maximumX = Math.max(viewportGutter, viewportWidth - companionWidth - viewportGutter);
      const maximumY = Math.max(viewportGutter, viewportHeight - companionHeight - viewportGutter);
      const nextX = Math.min(
        Math.max(
          viewportGutter,
          preferredX + companionWidth > viewportWidth - viewportGutter ? flippedX : preferredX,
        ),
        maximumX,
      );
      const nextY = Math.min(
        Math.max(
          viewportGutter,
          preferredY + companionHeight > viewportHeight - viewportGutter ? flippedY : preferredY,
        ),
        maximumY,
      );
      companion.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      frame = 0;
    };
    const queuePosition = () => {
      if (!frame) frame = window.requestAnimationFrame(renderPosition);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!isEnabled() || event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      queuePosition();
    };
    const onPointerOver = (event: PointerEvent) => {
      if (!isEnabled() || event.pointerType === "touch") return;
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-cursor-label]");
      if (!target) return;
      activeTarget = target;
      companion.textContent = target.dataset.cursorLabel ?? "View";
      companion.dataset.active = "true";
      queuePosition();
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
    const onViewportResize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      queuePosition();
    };
    const sizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const borderBox = entry.borderBoxSize[0];
      companionWidth = borderBox?.inlineSize ?? entry.contentRect.width;
      companionHeight = borderBox?.blockSize ?? entry.contentRect.height;
      queuePosition();
    });

    sizeObserver.observe(companion);
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    finePointer.addEventListener("change", onPreferenceChange);
    reducedMotion.addEventListener("change", onPreferenceChange);
    window.addEventListener("resize", onViewportResize, { passive: true });

    return () => {
      sizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      finePointer.removeEventListener("change", onPreferenceChange);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      window.removeEventListener("resize", onViewportResize);
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
