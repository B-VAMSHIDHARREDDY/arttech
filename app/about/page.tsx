import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Artech IT Solutions is a technology partner that combines business understanding with modern engineering to build websites, apps, AI and custom software.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Artech IT Solutions",
    description: "We build technology with purpose — business understanding, modern engineering and long-term partnership.",
    url: "/about",
  },
};

const principles = [
  {
    title: "Business Understanding",
    desc: "We map goals, users and constraints before proposing a solution.",
    icon: <path d="M3 17l6-6 4 4 8-8M17 7h4v4" />,
  },
  {
    title: "Innovation",
    desc: "We use modern frameworks and AI where they genuinely add value.",
    icon: (
      <>
        <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.4-1.6 3.4L12 13l-3.4-2.6C7.6 9.4 7 8.5 7 7a5 5 0 0 1 5-5Z" />
        <path d="M12 13v9M8 22h8" />
      </>
    ),
  },
  {
    title: "Quality",
    desc: "Code reviews, testing and performance checks are non-negotiable.",
    icon: <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V7l8-4Z" />,
  },
  {
    title: "User Experience",
    desc: "Every screen is designed around the person who has to use it daily.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
  {
    title: "Long-Term Relationships",
    desc: "We stay involved after launch — most clients come back for the next phase.",
    icon: <path d="M17 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3m4-9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />,
  },
  {
    title: "Modern Technology",
    desc: "Cloud-native, scalable architecture built to grow with your business.",
    icon: <path d="M6 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.6A4.5 4.5 0 0 1 18 17H6Z" />,
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <span className="eyebrow">About Artech</span>
          <h1 style={{ marginTop: "1rem" }}>
            We build technology
            <br />
            with <span className="accent-red" style={{ color: "#D8342A" }}>purpose.</span>
          </h1>
          <p className="lead">
            A technology partner that starts with your business problem, not a template — then builds the product that
            actually solves it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-visual" data-reveal="left">
              <div className="grid-overlay" aria-hidden="true"></div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/img/logo-horizontal.png" alt="Artech IT Solutions" width={200} height={64} />
              </div>
              <div className="ring" style={{ width: "80%", height: "80%", top: "10%", left: "10%" }}></div>
            </div>
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">Our Story</span>
                <h2>
                  Business understanding first. <span className="accent-blue">Technology second.</span>
                </h2>
                <p className="lead">
                  Most software fails quietly — not because the code was bad, but because it solved the wrong problem.
                  Artech exists to close that gap: we spend real time understanding how a business works before a single
                  interface is designed or a line of code is written.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary" data-reveal="fade">
                Let&apos;s Build Something Great
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">What Drives Us</span>
            <h2>Principles behind every project.</h2>
          </div>
          <div className="services-grid" data-reveal-group>
            {principles.map((p, i) => (
              <article className="service-card" data-reveal key={p.title} style={{ "--i": i } as React.CSSProperties}>
                <span className="sc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {p.icon}
                  </svg>
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="final-cta" data-reveal="scale">
            <span className="eyebrow">Let&apos;s Talk</span>
            <h2>Let&apos;s build something great.</h2>
            <p className="lead">Tell us about your business and where you want it to go.</p>
            <div className="final-cta-actions">
              <Link href="/contact" className="btn btn-accent">
                Start a Conversation
              </Link>
              <a href="tel:+918374524994" className="btn btn-ghost">
                Call +91 83745 24994
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
