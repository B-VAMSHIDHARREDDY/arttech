import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Websites, Mobile Apps, AI & Custom Software",
  description:
    "Explore Artech IT Solutions' core services: website development, mobile app development, AI solutions and custom software development.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Artech IT Solutions",
    description: "Website development, mobile apps, AI solutions and custom software — built around your business goals.",
    url: "/services",
  },
};

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A8C" strokeWidth="2" style={{ flex: "none", marginTop: 2 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <span className="eyebrow">What We Build</span>
          <h1 style={{ marginTop: "1rem" }}>
            Technology solutions
            <br />
            designed around <span style={{ color: "#D8342A" }}>your goals.</span>
          </h1>
          <p className="lead">Four core disciplines. One accountable team, from first sketch to shipped, supported product.</p>
        </div>
      </section>

      {/* WEB */}
      <section className="section" id="web">
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">01 · Websites</span>
                <h2>
                  Website <span className="accent-blue">Development</span>
                </h2>
                <p className="lead">
                  Modern, fast and responsive websites designed to convert visitors into customers — built on clean
                  code, not page-builder bloat.
                </p>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "1.5rem" }} data-reveal-group>
                {[
                  "Corporate, marketing & product websites",
                  "E-commerce storefronts with secure checkout",
                  "Performance, accessibility & SEO built-in",
                  "CMS integrations for easy content updates",
                ].map((t, i) => (
                  <li data-reveal key={t} style={{ "--i": i, display: "flex", gap: ".7rem" } as React.CSSProperties}>
                    {checkIcon}
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.8rem" }}>
                Start Your Website
              </Link>
            </div>
            <div className="why-visual" data-reveal="right">
              <div className="grid-overlay" aria-hidden="true"></div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 260 200" width="80%">
                  <rect x="10" y="10" width="240" height="180" rx="14" fill="#ffffff10" stroke="#ffffff30" />
                  <circle cx="28" cy="28" r="4" fill="#D8342A" />
                  <circle cx="40" cy="28" r="4" fill="#ffffff40" />
                  <circle cx="52" cy="28" r="4" fill="#ffffff40" />
                  <rect x="26" y="50" width="130" height="12" rx="6" fill="#3B5FCC" />
                  <rect x="26" y="72" width="90" height="8" rx="4" fill="#ffffff33" />
                  <rect x="26" y="98" width="208" height="60" rx="8" fill="#ffffff14" />
                  <rect x="26" y="168" width="60" height="14" rx="7" fill="#D8342A" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="section section-soft" id="mobile">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-visual" data-reveal="left" style={{ order: -1 }}>
              <div className="grid-overlay" aria-hidden="true"></div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 200 220" width="45%">
                  <rect x="20" y="10" width="160" height="200" rx="24" fill="#ffffff10" stroke="#ffffff30" />
                  <rect x="40" y="36" width="120" height="14" rx="7" fill="#3B5FCC" />
                  <rect x="40" y="60" width="120" height="70" rx="10" fill="#ffffff14" />
                  <circle cx="100" cy="178" r="18" fill="#D8342A" />
                </svg>
              </div>
            </div>
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">02 · Mobile Apps</span>
                <h2>
                  Mobile App <span className="accent-blue">Development</span>
                </h2>
                <p className="lead">
                  Scalable Android and iOS applications with intuitive user experiences, built for real-world usage and
                  app-store approval.
                </p>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "1.5rem" }} data-reveal-group>
                {[
                  "Native and cross-platform builds",
                  "Push notifications, payments & offline sync",
                  "App Store & Play Store submission support",
                  "Post-launch monitoring & updates",
                ].map((t, i) => (
                  <li data-reveal key={t} style={{ "--i": i, display: "flex", gap: ".7rem" } as React.CSSProperties}>
                    {checkIcon}
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.8rem" }}>
                Start Your App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="section section-navy" id="ai">
        <div className="wrap">
          <div className="ai-grid">
            <div className="ai-copy" data-reveal="left">
              <span className="eyebrow">03 · AI Solutions</span>
              <h2>
                Build smarter <span className="accent-red">with AI.</span>
              </h2>
              <p className="lead">
                AI-powered automation, assistants, analytics and intelligent business solutions — practical AI, applied
                to real workflows.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "1.5rem", color: "var(--text-muted)" }}>
                <li>Chat &amp; support assistants trained on your data</li>
                <li>Workflow automation &amp; document processing</li>
                <li>Predictive analytics &amp; recommendation engines</li>
                <li>AI features embedded in existing products</li>
              </ul>
              <Link href="/contact" className="btn btn-accent" style={{ marginTop: "1.6rem" }}>
                Explore AI for Your Business
              </Link>
            </div>
            <div className="ai-panel" data-reveal="right">
              <div className="ai-panel-head">
                <i></i>
                <span>Artech AI Assistant</span>
              </div>
              <div className="ai-chat-line user">
                <span className="who">You</span>
                <span className="bubble">Which leads should sales follow up with today?</span>
              </div>
              <div className="ai-chat-line bot">
                <span className="who">AI</span>
                <span className="bubble">
                  Ranked 12 leads by intent score. Top 3 are ready to close{" "}
                  <span className="ai-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </div>
              <div className="ai-pills">
                <span>Ask AI</span>
                <span>Automate</span>
                <span>Analyze</span>
                <span>Predict</span>
                <span>Optimize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="section" id="custom">
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">04 · Custom Software</span>
                <h2>
                  Custom Software <span className="accent-blue">Development</span>
                </h2>
                <p className="lead">
                  Business-specific software designed around your workflows and requirements — not forced into someone
                  else&apos;s product.
                </p>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "1.5rem" }} data-reveal-group>
                {[
                  "Internal tools & operations software",
                  "API integrations & system connections",
                  "Legacy system modernisation",
                  "Enterprise-grade architecture & security",
                ].map((t, i) => (
                  <li data-reveal key={t} style={{ "--i": i, display: "flex", gap: ".7rem" } as React.CSSProperties}>
                    {checkIcon}
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.8rem" }}>
                Discuss Your Requirements
              </Link>
            </div>
            <div className="why-visual" data-reveal="right">
              <div className="grid-overlay" aria-hidden="true"></div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 240 200" width="80%">
                  <rect x="10" y="10" width="100" height="80" rx="10" fill="#ffffff14" />
                  <rect x="130" y="10" width="100" height="80" rx="10" fill="#ffffff10" />
                  <rect x="10" y="110" width="100" height="80" rx="10" fill="#ffffff10" />
                  <rect x="130" y="110" width="100" height="80" rx="10" fill="#ffffff14" />
                  <circle cx="60" cy="50" r="14" fill="#3B5FCC" />
                  <circle cx="180" cy="150" r="14" fill="#D8342A" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="split-cta" data-reveal="fade">
            <div>
              <h3>Not sure which service fits your project?</h3>
              <p style={{ color: "var(--text-muted)", marginTop: ".4rem" }}>
                Tell us what you&apos;re building — we&apos;ll recommend the right approach.
              </p>
            </div>
            <Link href="/contact" className="btn btn-accent">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
