import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Artech IT Solutions website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Terms &amp; Conditions</span>
          </div>
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: "1rem", fontSize: "clamp(2rem,4vw,3rem)" }}>Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="legal-content">
            <p className="legal-updated">Last updated: August 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to these Terms &amp; Conditions. This is a template document —
              replace it with terms reviewed by qualified legal counsel before publishing this site for real business
              use.
            </p>

            <h2>2. Services</h2>
            <p>
              Artech IT Solutions provides website development, mobile application development, AI solutions and
              custom software development services. Specific project terms, deliverables, timelines and pricing are
              agreed separately in a signed proposal or contract for each engagement.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all content on this website, including the Artech IT Solutions
              name, logo and visual identity, is the property of Artech IT Solutions and may not be reproduced
              without permission.
            </p>

            <h2>4. Use of Website</h2>
            <ul>
              <li>You agree not to misuse this website or attempt to interfere with its normal operation.</li>
              <li>Content on this site is provided for general informational purposes and does not constitute a binding offer.</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>
              Artech IT Solutions is not liable for any indirect or consequential loss arising from the use of this
              website. Liability related to delivered projects is governed separately by the relevant signed
              agreement.
            </p>

            <h2>6. Changes to These Terms</h2>
            <p>We may update these Terms &amp; Conditions from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>

            <h2>7. Contact Us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--blue-600)", fontWeight: 600 }}>
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a href={siteConfig.phoneHref} style={{ color: "var(--blue-600)", fontWeight: 600 }}>
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
