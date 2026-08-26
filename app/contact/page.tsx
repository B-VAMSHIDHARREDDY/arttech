import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Artech IT Solutions. Call +91 83745 24994 or send us your project details and we'll get back to you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Artech IT Solutions",
    description: "Let's build something together. Send us your project enquiry.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Artech IT Solutions",
            url: `${siteConfig.url}/contact`,
            telephone: "+91-83745-24994",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <span className="eyebrow">Get In Touch</span>
          <h1 style={{ marginTop: "1rem" }}>
            Let&apos;s build something
            <br />
            <span style={{ color: "#D8342A" }}>together.</span>
          </h1>
          <p className="lead">Tell us about your project and we&apos;ll get back to you shortly.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info-card" data-reveal="left">
              <h3 style={{ color: "#fff", marginBottom: "1.6rem" }}>Contact details</h3>
              <div className="cinfo-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9db2f2" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.25a2 2 0 0 1 2.11-.45c.94.32 1.91.55 2.9.68A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <b>Phone</b>
                  <span>
                    <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                  </span>
                </div>
              </div>
              <div className="cinfo-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9db2f2" strokeWidth="1.8">
                    <path d="M4 4h16v16H4z" opacity="0" />
                    <path d="m3 6 9 6 9-6" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                  </svg>
                </span>
                <div>
                  <b>Email</b>
                  <span>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </span>
                </div>
              </div>
              <div className="cinfo-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9db2f2" strokeWidth="1.8">
                    <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <b>Location</b>
                  <span>Available for remote &amp; on-site engagements</span>
                </div>
              </div>
              <div className="cinfo-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9db2f2" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </span>
                <div>
                  <b>Working hours</b>
                  <span>Mon – Sat, 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="form-card" data-reveal="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
