import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Artech IT Solutions privacy policy — how we collect, use and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: "1rem", fontSize: "clamp(2rem,4vw,3rem)" }}>Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="legal-content">
            <p className="legal-updated">Last updated: August 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Artech IT Solutions (&quot;Artech&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This
              Privacy Policy explains what information we collect through this website, how we use it, and the
              choices you have. This is a template policy — replace it with a policy reviewed by qualified legal
              counsel before publishing this site for real business use.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>Contact details you submit through our forms, such as name, company, email, phone number and project details.</li>
              <li>Basic technical data such as browser type, device type and pages visited, collected automatically for site performance and security.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to enquiries and discuss potential projects.</li>
              <li>To improve our website, services and communication.</li>
              <li>To comply with legal obligations where applicable.</li>
            </ul>

            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share limited information with trusted service
              providers who help us operate this website (such as hosting or email delivery), under confidentiality
              obligations.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect the information you share with us.
              No method of transmission over the internet is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>6. Cookies</h2>
            <p>This website may use basic cookies or similar technologies to support core functionality and understand aggregate site usage.</p>

            <h2>7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us using the details below.</p>

            <h2>8. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--blue-600)", fontWeight: 600 }}>
                {siteConfig.email}
              </a>{" "}
              or call{" "}
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
