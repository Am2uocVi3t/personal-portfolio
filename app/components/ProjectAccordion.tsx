"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

/** Keep native details semantics, including the no-JavaScript fallback. */
export default function ProjectAccordion({ summary, children, initiallyOpen = false }: {
  summary: ReactNode;
  children: ReactNode;
  initiallyOpen?: boolean;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const targetOpen = useRef(initiallyOpen);
  const [expanded, setExpanded] = useState(initiallyOpen);

  useEffect(() => () => animationRef.current?.cancel(), []);

  function toggle(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const details = detailsRef.current;
    if (!details) return;
    const start = details.getBoundingClientRect().height;
    animationRef.current?.cancel();
    targetOpen.current = !targetOpen.current;
    const opening = targetOpen.current;
    setExpanded(opening);
    const body = details.querySelector<HTMLElement>(".project-detail");
    if (body) body.inert = !opening;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !details.animate) {
      details.open = opening;
      return;
    }

    details.open = true;
    const end = opening ? details.getBoundingClientRect().height : event.currentTarget.getBoundingClientRect().height;
    const animation = details.animate({ height: [`${start}px`, `${end}px`] }, {
      duration: opening ? 340 : 260,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
    animationRef.current = animation;
    animation.onfinish = () => {
      details.open = opening;
      animationRef.current = null;
    };
  }

  return (
    <details ref={detailsRef} className="project-row group" open={initiallyOpen} data-expanded={expanded}>
      <summary onClick={toggle} aria-expanded={expanded}>{summary}</summary>
      {children}
    </details>
  );
}
