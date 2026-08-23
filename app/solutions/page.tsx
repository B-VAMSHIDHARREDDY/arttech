import type { Metadata } from "next";
import Link from "next/link";
import SolutionsTabs from "@/components/SolutionsTabs";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Business automation, customer portals, e-commerce, booking platforms, CRM, AI assistants, dashboards and custom enterprise applications.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Artech IT Solutions",
    description:
      "Solutions built around your business — automation, portals, e-commerce, CRM, AI assistants, dashboards and enterprise apps.",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Solutions</span>
          </div>
          <span className="eyebrow">Solutions</span>
          <h1 style={{ marginTop: "1rem" }}>
            Solutions built around
            <br />
            <span style={{ color: "#1B3A8C" }}>your business.</span>
          </h1>
          <p className="lead">Select a category to see how we approach it.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SolutionsTabs />
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="split-cta" data-reveal="fade">
            <div>
              <h3>Don&apos;t see your exact use case?</h3>
              <p style={{ color: "var(--text-muted)", marginTop: ".4rem" }}>Most of our best projects started as a one-line idea.</p>
            </div>
            <Link href="/contact" className="btn btn-accent">
              Describe Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
