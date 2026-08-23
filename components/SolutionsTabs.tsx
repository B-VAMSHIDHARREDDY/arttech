"use client";

import { useEffect, useRef, useState } from "react";
import { solutions } from "@/lib/solutions";
import SolutionVisual from "./SolutionVisual";

const ROTATE_MS = 2000;

export default function SolutionsTabs({ short = false }: { short?: boolean }) {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const userSelected = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      if (userSelected.current) return;
      setActiveId((current) => {
        const idx = solutions.findIndex((s) => s.id === current);
        return solutions[(idx + 1) % solutions.length].id;
      });
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, []);

  function selectTab(id: string) {
    userSelected.current = true;
    setActiveId(id);
  }

  return (
    <div className="solutions-shell">
      <div className="sol-tabs" data-reveal="left">
        {solutions.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`sol-tab${s.id === activeId ? " is-active" : ""}`}
            onClick={() => selectTab(s.id)}
          >
            <span>
              <b>{s.title}</b>
              <span>{s.tagline}</span>
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>

      <div className="sol-preview" data-reveal="right">
        {solutions.map((s) => (
          <div key={s.id} className={`sol-preview-inner${s.id === activeId ? " is-active" : ""}`} id={s.id}>
            <h4>{s.displayTitle || s.title}</h4>
            <p>{short ? s.shortDescription : s.description}</p>
            <div className="sol-visual">
              <SolutionVisual id={s.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
