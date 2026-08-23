import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How Artech IT Solutions builds: discover, strategy, design, develop, test and launch — a clear, transparent process from idea to product.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process | Artech IT Solutions",
    description: "A premium, transparent six-stage process: Discover, Strategy, Design, Develop, Test, Launch.",
    url: "/process",
  },
};

const stages = [
  { n: "01", t: "Discover", d: "Understand the business, users and goals. We ask about your customers, your constraints and what success actually looks like before proposing anything." },
  { n: "02", t: "Strategy", d: "Define features, architecture and technology. We turn discovery into a concrete plan: scope, tech stack, timeline and priorities." },
  { n: "03", t: "Design", d: "Create the user experience and visual system. Wireframes and interactive prototypes so you can see the product before it's built." },
  { n: "04", t: "Develop", d: "Build the product using modern technologies. Iterative sprints with regular check-ins, so there are no surprises at the end." },
  { n: "05", t: "Test", d: "Ensure quality, performance and security. Functional testing, performance checks and security review before anything ships." },
  { n: "06", t: "Launch", d: "Deploy, monitor and continuously improve. We stay involved after go-live — monitoring, support and the next iteration." },
];

export default function ProcessPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Process", path: "/process" }])),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Process</span>
          </div>
          <span className="eyebrow">How We Build</span>
          <h1 style={{ marginTop: "1rem" }}>
            A process built for
            <br />
            <span style={{ color: "#1B3A8C" }}>clarity and quality.</span>
          </h1>
          <p className="lead">Six stages. No black boxes — you&apos;ll always know what stage your project is in and what&apos;s next.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="process-list" style={{ maxWidth: 760, marginInline: "auto" }}>
            {stages.map((s) => (
              <div className="process-item" data-reveal="fade" key={s.n}>
                <span className="process-num">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="final-cta" data-reveal="scale">
            <span className="eyebrow">Ready When You Are</span>
            <h2>Let&apos;s map your project.</h2>
            <p className="lead">A short discovery call is the fastest way to find out what your build will actually take.</p>
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
