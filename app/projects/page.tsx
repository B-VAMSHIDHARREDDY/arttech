import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects",
  description: "A look at the ideas Artech IT Solutions has turned into digital experiences — websites, mobile apps and custom platforms.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Artech IT Solutions",
    description: "Ideas we've turned into digital experiences.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
          </div>
          <span className="eyebrow">Portfolio</span>
          <h1 style={{ marginTop: "1rem" }}>
            Ideas we&apos;ve turned into
            <br />
            <span style={{ color: "#1B3A8C" }}>digital experiences.</span>
          </h1>
          <p className="lead">
            The projects below are clearly-marked placeholders illustrating how we document real work — replace with
            live case studies as projects ship.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="portfolio-list">
            {projects.map((p) => (
              <article className="project-card" data-reveal="fade" key={p.title}>
                <div className="project-media">
                  <span className="project-tag">{p.tag}</span>
                  {p.media}
                </div>
                <div className="project-body">
                  <p className="placeholder-note">Placeholder Project — replace with real case study</p>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-meta">
                    <div>
                      <span>Business Problem</span>
                      <b>{p.problem}</b>
                    </div>
                    <div>
                      <span>Solution</span>
                      <b>{p.solution}</b>
                    </div>
                    <div>
                      <span>Result</span>
                      <b>{p.result}</b>
                    </div>
                    <div>
                      <span>Category</span>
                      <b>{p.tag}</b>
                    </div>
                  </div>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="text-link">
                    View Project{" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="split-cta" data-reveal="fade">
            <div>
              <h3>Want to be our next case study?</h3>
              <p style={{ color: "var(--text-muted)", marginTop: ".4rem" }}>Let&apos;s talk about what you&apos;re building.</p>
            </div>
            <Link href="/contact" className="btn btn-accent">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
