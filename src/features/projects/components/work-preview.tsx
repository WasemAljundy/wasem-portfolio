"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { WorkPreviewItem } from "@/features/projects/work-preview";

import styles from "../work-index.module.css";

export function WorkPreview({ previews }: { previews: readonly WorkPreviewItem[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const [activeSlug, setActiveSlug] = useState(previews[0]?.slug ?? "");
  const previewMap = useMemo(
    () => new Map(previews.map((preview) => [preview.slug, preview])),
    [previews],
  );
  const active = previewMap.get(activeSlug) ?? previews[0];

  useEffect(() => {
    const explorer = rootRef.current?.closest<HTMLElement>("[data-work-explorer]");
    if (!explorer) return;

    const activateFromTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      const row = target.closest<HTMLElement>("[data-preview-slug]");
      const slug = row?.dataset.previewSlug;
      if (slug && previewMap.has(slug)) setActiveSlug(slug);
    };
    const onPointerOver = (event: PointerEvent) => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        activateFromTarget(event.target);
      }
    };
    const onFocusIn = (event: FocusEvent) => activateFromTarget(event.target);

    explorer.addEventListener("pointerover", onPointerOver);
    explorer.addEventListener("focusin", onFocusIn);
    return () => {
      explorer.removeEventListener("pointerover", onPointerOver);
      explorer.removeEventListener("focusin", onFocusIn);
    };
  }, [previewMap]);

  if (!active) return null;

  return (
    <aside
      className={styles.preview}
      ref={rootRef}
      aria-hidden="true"
      data-active-preview={active.slug}
      data-testid="work-preview"
    >
      <div className={styles.previewFrame}>
        <Image
          alt=""
          fill
          key={active.slug}
          loading="lazy"
          sizes="(min-width: 64rem) 34vw, 1px"
          src={active.src}
        />
      </div>
      <div className={styles.previewCaption}>
        <span>{active.domain}</span>
        <strong>{active.title}</strong>
      </div>
    </aside>
  );
}
