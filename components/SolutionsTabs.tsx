import { solutions } from "@/lib/solutions";

export default function SolutionsTabs({ short = false }: { short?: boolean }) {
  return (
    <div className="solutions-shell">
      <div className="sol-tabs" data-reveal="left">
        {solutions.map((s, i) => (
          <button key={s.id} className={`sol-tab${i === 0 ? " is-active" : ""}`} data-target={s.id}>
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
        {solutions.map((s, i) => (
          <div key={s.id} className={`sol-preview-inner${i === 0 ? " is-active" : ""}`} id={s.id}>
            <h4>{s.displayTitle || s.title}</h4>
            <p>{short ? s.shortDescription : s.description}</p>
            <div className="sol-mock">
              {s.bars.map((b, bi) => (
                <div className={`bar ${b}`} key={bi}></div>
              ))}
              <div className="row">
                {Array.from({ length: s.chips }).map((_, ci) => (
                  <div className="chipx" key={ci}></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
