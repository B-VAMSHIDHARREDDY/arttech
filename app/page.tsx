import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import SolutionsPreview from "@/components/SolutionsPreview";
import { getReviews } from "@/lib/reviews";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Artech IT Solutions | Websites, Mobile Apps & AI Solutions",
  description:
    "Artech IT Solutions builds modern websites, mobile applications, AI solutions and custom software that help businesses grow and transform digitally.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Artech IT Solutions | Websites, Mobile Apps & AI Solutions",
    description:
      "We design and develop modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate and scale.",
    url: "/",
  },
  twitter: {
    title: "Artech IT Solutions | Websites, Mobile Apps & AI Solutions",
    description: "Turning business ideas into digital solutions — websites, mobile apps, AI solutions and custom software.",
  },
};

const faqs = [
  {
    q: "What type of software do you develop?",
    a: "We build websites, mobile applications, AI-powered tools and fully custom business software — tailored to each client's workflow rather than off-the-shelf templates.",
  },
  {
    q: "Do you build mobile applications?",
    a: "Yes. We design and develop native and cross-platform apps for Android and iOS, from early prototypes through to app-store launch.",
  },
  {
    q: "Can you build AI-powered solutions?",
    a: "Yes — from intelligent automation and chat assistants to predictive analytics and AI-driven features embedded inside your existing product.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope. A focused website may take a few weeks, while a full product build can take a few months. We'll give you a clear estimate after discovery.",
  },
  {
    q: "Do you provide maintenance and support?",
    a: "Yes. We offer ongoing maintenance, monitoring and support plans after launch, so your product keeps running smoothly as it grows.",
  },
  {
    q: "Can you work with an existing product?",
    a: "Absolutely. We regularly join projects mid-flight — auditing existing codebases, fixing issues, and extending products with new features.",
  },
  {
    q: "How do we start a project?",
    a: "Reach out through our contact page or call us directly. We'll set up a short discovery call to understand your goals and outline next steps.",
  },
];

export const revalidate = 0;

export default async function HomePage() {
  const reviews = await getReviews();
  const projects = await getProjects();

  return (
    <main id="main">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow" data-reveal="fade">Artech IT Solutions</span>
              <h1 data-reveal="fade" style={{ transitionDelay: ".08s" }}>
                Turning <span className="hl-blue">Business Ideas</span>
                <br />
                Into <span className="hl-red">Digital Solutions</span>
              </h1>
              <p className="lead" data-reveal="fade" style={{ transitionDelay: ".16s" }}>
                We design and develop modern websites, mobile applications, AI solutions and custom software that
                help businesses grow, automate and scale.
              </p>
              <div className="hero-cta" data-reveal="fade" style={{ transitionDelay: ".24s" }}>
                <Link href="/contact" className="btn btn-accent">
                  Start Your Project
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  Explore Our Services
                </Link>
              </div>
              <div className="hero-meta" data-reveal="fade" style={{ transitionDelay: ".32s" }}>
                <div>
                  <b>Web · Mobile · AI</b>
                  <span>Full-stack capability</span>
                </div>
                <div>
                  <b>Idea → Launch</b>
                  <span>End-to-end delivery</span>
                </div>
                <div>
                  <b>+91 83745 24994</b>
                  <span>Talk to our team</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" data-reveal="scale" style={{ transitionDelay: ".2s" }}>
              <div className="hv-stage" id="hvStage">
                <div className="hv-core">
                  <img src="/assets/img/logo-icon.png" alt="" width={148} height={142} />
                </div>
                <div className="hv-panel hv-p1 ic-blue">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>Web App</b>
                    <span>Live build</span>
                  </span>
                </div>
                <div className="hv-panel hv-p2 ic-red">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <path d="M11 18h2" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>Mobile App</b>
                    <span>iOS · Android</span>
                  </span>
                </div>
                <div className="hv-panel hv-p3 ic-blue">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.4-1.6 3.4L12 13l-3.4-2.6C7.6 9.4 7 8.5 7 7a5 5 0 0 1 5-5Z" />
                      <path d="M12 13v9M8 22h8" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>AI Engine</b>
                    <span>Automations</span>
                  </span>
                </div>
                <div className="hv-panel hv-p4 ic-red">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M6 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.6A4.5 4.5 0 0 1 18 17H6Z" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>Cloud</b>
                    <span>Auto-scaling</span>
                  </span>
                </div>
                <div className="hv-panel hv-p5 ic-blue">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 19V9M11 19V4M18 19v-6" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>Analytics</b>
                    <span>Real-time data</span>
                  </span>
                </div>
                <div className="hv-panel hv-p6 ic-red">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2" />
                    </svg>
                  </span>
                  <span className="tt">
                    <b>Automation</b>
                    <span>Workflows</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="trust">
        <div className="wrap trust-row">
          <div className="trust-tags" data-reveal="fade">
            <span>Web Development</span>
            <span>Mobile Apps</span>
            <span>AI Solutions</span>
            <span>Custom Software</span>
          </div>
          <div className="stats" data-reveal="fade">
            <div className="stat">
              <b>
                <span data-counter="40" data-suffix="+">0+</span>
              </b>
              <span>Projects Delivered</span>
            </div>
            <div className="stat">
              <b>
                <span data-counter="25" data-suffix="+">0+</span>
              </b>
              <span>Businesses Digitized</span>
            </div>
            <div className="stat">
              <b>
                <span data-counter="15" data-suffix="+">0+</span>
              </b>
              <span>Technologies</span>
            </div>
            <div className="stat">
              <b>
                <span data-counter="98" data-suffix="%">0%</span>
              </b>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head" data-reveal="fade">
            <span className="eyebrow">What We Build</span>
            <h2>
              Technology built
              <br />
              around <span className="accent-blue">your goals.</span>
            </h2>
            <p className="lead">Four core disciplines, one accountable team — from first sketch to shipped product.</p>
          </div>

          <div className="services-grid" data-reveal-group>
            <article className="service-card" data-reveal style={{ "--i": 0 } as React.CSSProperties}>
              <span className="sc-num">01</span>
              <span className="sc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </span>
              <h3>Website Development</h3>
              <p>Modern, fast and responsive websites designed to convert visitors into customers.</p>
              <Link href="/services#web" className="text-link">
                Explore Service{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>

            <article className="service-card" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <span className="sc-num">02</span>
              <span className="sc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </span>
              <h3>Mobile App Development</h3>
              <p>Scalable Android and iOS applications with intuitive user experiences.</p>
              <Link href="/services#mobile" className="text-link">
                Explore Service{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>

            <article className="service-card" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <span className="sc-num">03</span>
              <span className="sc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.4-1.6 3.4L12 13l-3.4-2.6C7.6 9.4 7 8.5 7 7a5 5 0 0 1 5-5Z" />
                  <path d="M12 13v9M8 22h8" />
                </svg>
              </span>
              <h3>AI Solutions</h3>
              <p>AI-powered automation, assistants, analytics and intelligent business solutions.</p>
              <Link href="/services#ai" className="text-link">
                Explore Service{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>

            <article className="service-card" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
              <span className="sc-num">04</span>
              <span className="sc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 9-5 3 5 3M16 9l5 3-5 3M13 5l-2 14" />
                </svg>
              </span>
              <h3>Custom Software</h3>
              <p>Business-specific software designed around your workflows and requirements.</p>
              <Link href="/services#custom" className="text-link">
                Explore Service{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============ WHY ARTECH ============ */}
      <section className="section section-soft">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-visual" data-reveal="left">
              <div className="grid-overlay" aria-hidden="true"></div>
              <svg viewBox="0 0 300 300" width="100%" height="100%" role="img" aria-label="Five reasons businesses choose Artech, connected around the Artech mark">
                <circle cx="150" cy="150" r="120" fill="none" stroke="#ffffff14" strokeWidth="1" strokeDasharray="2 6">
                  <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="50s" repeatCount="indefinite" />
                </circle>

                {/* connecting lines: hub to each node */}
                <line x1="150" y1="150" x2="150" y2="42" stroke="#ffffff26" strokeWidth="1.4" strokeDasharray="3 4" />
                <line x1="150" y1="150" x2="252.7" y2="116.6" stroke="#ffffff26" strokeWidth="1.4" strokeDasharray="3 4" />
                <line x1="150" y1="150" x2="213.5" y2="237.4" stroke="#ffffff26" strokeWidth="1.4" strokeDasharray="3 4" />
                <line x1="150" y1="150" x2="86.5" y2="237.4" stroke="#ffffff26" strokeWidth="1.4" strokeDasharray="3 4" />
                <line x1="150" y1="150" x2="47.3" y2="116.6" stroke="#ffffff26" strokeWidth="1.4" strokeDasharray="3 4" />

                {/* central hub — laptop / technology */}
                <circle cx="150" cy="150" r="38" fill="url(#whyHubGrad)" stroke="#ffffff30" />
                <g transform="translate(150,150)" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="-15" y="-14" width="30" height="20" rx="2" />
                  <path d="M-9.5 -8.5h13M-9.5 -3.5h9" strokeWidth="1.3" opacity="0.85" />
                  <path d="M-21 8.5h42l3 5.5h-48z" />
                </g>
                <circle cx="160" cy="141" r="2" fill="#D8342A" />

                {/* node 01 — Business First (target) */}
                <g transform="translate(150,42)">
                  <animateTransform attributeName="transform" type="translate" values="150,42; 150,36; 150,42" dur="6s" repeatCount="indefinite" />
                  <circle r="28" fill="url(#whyBlue)" stroke="#ffffff30" />
                  <g stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round">
                    <circle r="8" />
                    <circle r="3.6" />
                  </g>
                  <circle r="1.4" fill="#fff" />
                  <circle cx="20" cy="-20" r="10" fill="#D8342A" />
                  <text x="20" y="-16.5" textAnchor="middle" fontFamily="var(--font-display)" fontWeight={800} fontSize="10" fill="#fff">1</text>
                </g>

                {/* node 02 — Modern Technology (chip) */}
                <g transform="translate(252.7,116.6)">
                  <animateTransform attributeName="transform" type="translate" values="252.7,116.6; 252.7,110.6; 252.7,116.6" dur="7s" repeatCount="indefinite" />
                  <circle r="28" fill="url(#whyRed)" stroke="#ffffff30" />
                  <g stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="-6" y="-6" width="12" height="12" rx="1.6" />
                    <rect x="-2.2" y="-2.2" width="4.4" height="4.4" rx="0.8" />
                    <path d="M-6 -2.5h-2.4M-6 2.5h-2.4M6 -2.5h2.4M6 2.5h2.4M-2.5 -6v-2.4M2.5 -6v-2.4M-2.5 6v2.4M2.5 6v2.4" />
                  </g>
                  <circle cx="22" cy="-18" r="10" fill="#1B3A8C" />
                  <text x="22" y="-14.5" textAnchor="middle" fontFamily="var(--font-display)" fontWeight={800} fontSize="10" fill="#fff">2</text>
                </g>

                {/* node 03 — User Experience (person) */}
                <g transform="translate(213.5,237.4)">
                  <animateTransform attributeName="transform" type="translate" values="213.5,237.4; 213.5,231.4; 213.5,237.4" dur="6.5s" repeatCount="indefinite" />
                  <circle r="28" fill="url(#whyBlue)" stroke="#ffffff30" />
                  <g stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cy="-4.5" r="3.4" />
                    <path d="M-6.5 7.5c0-4 2.9-6.5 6.5-6.5s6.5 2.5 6.5 6.5" />
                  </g>
                  <circle cx="22" cy="20" r="10" fill="#D8342A" />
                  <text x="22" y="23.5" textAnchor="middle" fontFamily="var(--font-display)" fontWeight={800} fontSize="10" fill="#fff">3</text>
                </g>

                {/* node 04 — Scalable Solutions (bars) */}
                <g transform="translate(86.5,237.4)">
                  <animateTransform attributeName="transform" type="translate" values="86.5,237.4; 86.5,231.4; 86.5,237.4" dur="7.5s" repeatCount="indefinite" />
                  <circle r="28" fill="url(#whyRed)" stroke="#ffffff30" />
                  <path d="M-7 7V1M0 7V-6M7 7V-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="-22" cy="20" r="10" fill="#1B3A8C" />
                  <text x="-22" y="23.5" textAnchor="middle" fontFamily="var(--font-display)" fontWeight={800} fontSize="10" fill="#fff">4</text>
                </g>

                {/* node 05 — Long-Term Partnership (link) */}
                <g transform="translate(47.3,116.6)">
                  <animateTransform attributeName="transform" type="translate" values="47.3,116.6; 47.3,110.6; 47.3,116.6" dur="5.8s" repeatCount="indefinite" />
                  <circle r="28" fill="url(#whyBlue)" stroke="#ffffff30" />
                  <g stroke="#fff" strokeWidth="1.6" fill="none">
                    <circle cx="-3.4" r="4.4" />
                    <circle cx="3.4" r="4.4" />
                  </g>
                  <circle cx="-22" cy="-18" r="10" fill="#D8342A" />
                  <text x="-22" y="-14.5" textAnchor="middle" fontFamily="var(--font-display)" fontWeight={800} fontSize="10" fill="#fff">5</text>
                </g>

                <defs>
                  <radialGradient id="whyHubGrad" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#3B5FCC" />
                    <stop offset="100%" stopColor="#0F1830" />
                  </radialGradient>
                  <radialGradient id="whyBlue" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#6C87DE" />
                    <stop offset="100%" stopColor="#1B3A8C" />
                  </radialGradient>
                  <radialGradient id="whyRed" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#E85B4F" />
                    <stop offset="100%" stopColor="#B8241C" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">Why Artech</span>
                <h2>
                  Why businesses
                  <br />
                  <span className="accent-blue">choose</span> Artech.
                </h2>
              </div>
              <div className="why-list" data-reveal-group>
                {[
                  { n: "01", t: "Business First", d: "We understand the business problem before building the technology." },
                  { n: "02", t: "Modern Technology", d: "We use modern development frameworks and scalable architecture." },
                  { n: "03", t: "User Experience", d: "Every product is designed with the end user in mind." },
                  { n: "04", t: "Scalable Solutions", d: "Build today. Scale tomorrow." },
                  { n: "05", t: "Long-Term Partnership", d: "We don't just deliver software. We help businesses grow digitally." },
                ].map((item, i) => (
                  <div className="why-item" data-reveal key={item.n} style={{ "--i": i } as React.CSSProperties}>
                    <span className="why-num">{item.n}</span>
                    <div>
                      <h3>{item.t}</h3>
                      <p>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIGITAL TRANSFORMATION JOURNEY ============ */}
      <section className="section journey">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">Our Signature Process</span>
            <h2>
              From <span className="accent-blue">Idea</span> to <span className="accent-red">Impact</span>
            </h2>
            <p className="lead">Every product we ship travels the same disciplined path.</p>
          </div>

          <div className="journey-track">
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.7v.5h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0 0 12 3Z" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>Idea</h4>
                <p>Vision &amp; goals</p>
              </div>
            </div>
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 20l9-9-9-9-9 9 9 9Z" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>Design</h4>
                <p>Experience &amp; UI</p>
              </div>
            </div>
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m8 9-5 3 5 3M16 9l5 3-5 3M13 5l-2 14" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>Development</h4>
                <p>Build &amp; integrate</p>
              </div>
            </div>
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.4-1.6 3.4L12 13l-3.4-2.6C7.6 9.4 7 8.5 7 7a5 5 0 0 1 5-5Z" />
                  <path d="M12 13v9M8 22h8" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>AI &amp; Automation</h4>
                <p>Smarter workflows</p>
              </div>
            </div>
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2c2 2.5 3 5.5 3 8.5A3 3 0 0 1 12 14a3 3 0 0 1-3-3.5C9 7.5 10 4.5 12 2Z" />
                  <path d="M8.5 14 5 21l4-1.5M15.5 14 19 21l-4-1.5" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>Launch</h4>
                <p>Ship to production</p>
              </div>
            </div>
            <div className="jstage">
              <span className="jdot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 17 9 11l4 4 8-8M17 7h4v4" />
                </svg>
              </span>
              <div className="jstage-body">
                <h4>Growth</h4>
                <p>Measure &amp; scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGY ECOSYSTEM ============ */}
      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">Technology</span>
            <h2>
              Technology that moves
              <br />
              your business <span className="accent-blue">forward.</span>
            </h2>
          </div>
          <div className="tech-wrap" data-reveal="scale">
            <div className="tech-center">
              <img src="/assets/img/logo-icon.png" alt="Artech" width={148} height={142} />
            </div>
            <div className="tech-node" style={{ top: "10%", left: "8%" }}><i></i>Web</div>
            <div className="tech-node" style={{ top: "4%", left: "34%", animationDelay: ".4s" }}><i></i>Mobile</div>
            <div className="tech-node" style={{ top: "6%", right: "6%", animationDelay: ".8s" }}><i></i>Backend</div>
            <div className="tech-node" style={{ top: "44%", left: "1%", animationDelay: "1.2s" }}><i></i>AI</div>
            <div className="tech-node" style={{ top: "42%", right: "1%", animationDelay: "1.6s" }}><i></i>Cloud</div>
            <div className="tech-node" style={{ bottom: "10%", left: "10%", animationDelay: "2s" }}><i></i>Database</div>
            <div className="tech-node" style={{ bottom: "2%", right: "20%", animationDelay: "2.4s" }}><i></i>Automation</div>
            <div className="tech-node" style={{ bottom: "12%", right: "0%", animationDelay: "2.8s" }}><i></i>Analytics</div>
          </div>
        </div>
      </section>

      {/* ============ AI SECTION ============ */}
      <section className="section section-navy">
        <div className="wrap">
          <div className="ai-grid">
            <div className="ai-copy" data-reveal="left">
              <span className="eyebrow">Artech AI</span>
              <h2>
                Build smarter
                <br />
                with <span className="accent-red">AI.</span>
              </h2>
              <p className="lead">
                From intelligent automation to AI-powered applications, we help businesses turn data and ideas into
                smarter digital experiences.
              </p>
              <Link href="/services#ai" className="btn btn-accent" style={{ marginTop: "1.6rem" }}>
                Explore AI Solutions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="ai-panel" data-reveal="right">
              <div className="ai-panel-head">
                <i></i>
                <span>Artech AI Assistant — live session</span>
              </div>
              <div className="ai-chat-line user">
                <span className="who">You</span>
                <span className="bubble">Summarise this month&apos;s support tickets and flag urgent issues.</span>
              </div>
              <div className="ai-chat-line bot">
                <span className="who">AI</span>
                <span className="bubble">
                  Analysing 1,204 tickets… 6 urgent issues found. Drafting priority report{" "}
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

      {/* ============ SOLUTIONS ============ */}
      <SolutionsPreview />

      {/* ============ PROJECTS PREVIEW ============ */}
      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head" data-reveal="fade">
            <span className="eyebrow">Portfolio</span>
            <h2>
              Ideas we&apos;ve turned into
              <br />
              <span className="accent-blue">digital experiences.</span>
            </h2>
          </div>

          <div className="portfolio-list">
            {projects.slice(0, 2).map((p) => (
              <article className="project-card" data-reveal="fade" key={p.id}>
                <div className="project-media">
                  <span className="project-tag">{p.tag}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>
                    <strong>Problem:</strong> {p.problem}
                    <br />
                    <strong>Solution:</strong> {p.solution}
                    <br />
                    <strong>Result:</strong> {p.result}
                  </p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <Link href="/projects" className="text-link">
                    View Project{" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="center" style={{ marginTop: "2.5rem" }} data-reveal="fade">
            <Link href="/projects" className="btn btn-ghost">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS PREVIEW ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">How We Build</span>
            <h2>
              A process built for
              <br />
              <span className="accent-blue">clarity and quality.</span>
            </h2>
          </div>
          <div className="process-list" style={{ maxWidth: 700, marginInline: "auto" }}>
            <div className="process-item" data-reveal="fade">
              <span className="process-num">01</span>
              <div>
                <h3>Discover</h3>
                <p>Understand the business, users and goals.</p>
              </div>
            </div>
            <div className="process-item" data-reveal="fade">
              <span className="process-num">02</span>
              <div>
                <h3>Strategy</h3>
                <p>Define features, architecture and technology.</p>
              </div>
            </div>
            <div className="process-item" data-reveal="fade">
              <span className="process-num">03</span>
              <div>
                <h3>Design</h3>
                <p>Create the user experience and visual system.</p>
              </div>
            </div>
          </div>
          <div className="center" style={{ marginTop: "1rem" }} data-reveal="fade">
            <Link href="/process" className="text-link">
              See the full process{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT teaser ============ */}
      <section className="section section-soft">
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="section-head" data-reveal="fade">
                <span className="eyebrow">About Artech</span>
                <h2>
                  We build technology
                  <br />
                  <span className="accent-red">with purpose.</span>
                </h2>
                <p className="lead">
                  We combine business understanding with modern engineering to design products people actually use —
                  built for the long term, not just launch day.
                </p>
              </div>
              <Link href="/about" className="btn btn-primary" data-reveal="fade">
                Let&apos;s Build Something Great
              </Link>
            </div>
            <div className="why-visual" data-reveal="right">
              <div className="grid-overlay" aria-hidden="true"></div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: ".3rem" }} role="img" aria-label="Artech IT Solutions">
                  <img src="/assets/img/logo-mark-white.png" alt="" width={210} height={41} />
                  <div
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontWeight: 700,
                      fontSize: ".56rem",
                      letterSpacing: ".22em",
                      opacity: 0.85,
                      color: "#fff",
                      marginLeft: "125px",
                    }}
                  >
                    IT SOLUTIONS
                  </div>
                </div>
                <div style={{ display: "flex", gap: ".6rem", color: "#fff", fontFamily: "var(--font-display)", fontSize: ".78rem", fontWeight: 700 }}>
                  <span style={{ border: "1px solid rgba(255,255,255,.25)", padding: ".4rem .8rem", borderRadius: "100px" }}>Idea</span>
                  <span style={{ opacity: 0.4 }}>→</span>
                  <span style={{ border: "1px solid rgba(255,255,255,.25)", padding: ".4rem .8rem", borderRadius: "100px" }}>Technology</span>
                  <span style={{ opacity: 0.4 }}>→</span>
                  <span style={{ border: "1px solid rgba(255,255,255,.25)", padding: ".4rem .8rem", borderRadius: "100px", background: "var(--red-500)" }}>
                    Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLIENT JOURNEY ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">The Journey</span>
            <h2>
              Your idea. Our technology.
              <br />
              <span className="accent-blue">One journey.</span>
            </h2>
          </div>
          <div className="cjourney" data-reveal-group>
            {["You Tell Us", "We Understand", "We Design", "We Build", "You Launch", "Your Business Grows"].map((label, i) => (
              <Fragment key={label}>
                <div className="cj-step" data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <span className="cj-dot">{i + 1}</span>
                  <b>{label}</b>
                </div>
                {i < 5 && (
                  <div className="cj-arrow" data-reveal style={{ "--i": i + 1 } as React.CSSProperties}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">Testimonials</span>
            <h2>What our clients say.</h2>
            <p className="lead">Real feedback from the businesses we&apos;ve built with.</p>
          </div>

          <div className="tcarousel" data-reveal="fade">
            <div className="tcarousel-track">
              {reviews.map((t) => (
                <article className="tcard" key={t.id}>
                  <div className="stars">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <svg viewBox="0 0 20 20" key={s}>
                        <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 7.5l6.4-.6L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p>&quot;{t.quote}&quot;</p>
                  <div className="who">
                    <span className="avatar">{t.initials}</span>
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="tcarousel-nav">
              <button data-carousel="prev" aria-label="Previous testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button data-carousel="next" aria-label="Next testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head center" data-reveal="fade">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <button className="faq-q" aria-expanded="false">
                  <span>{item.q}</span>
                  <span className="plus"></span>
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section">
        <div className="wrap">
          <div className="final-cta" data-reveal="scale">
            <div className="cta-float" style={{ width: 90, height: 90, top: "8%", left: "6%" }}></div>
            <div className="cta-float" style={{ width: 60, height: 60, bottom: "12%", right: "10%", animationDelay: "1.4s" }}></div>
            <span className="eyebrow">Let&apos;s Talk</span>
            <h2>
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>
            <p className="lead">Tell us what you&apos;re planning. We&apos;ll help turn your idea into a digital product.</p>
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
