import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/img/logo-horizontal.png" alt="Artech IT Solutions" />
            <p>Turning Business Ideas into Digital Solutions.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43C21.99 8.94 22 9.3 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47C15.06 21.99 14.7 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 1.8c-2.66 0-2.98.01-4.03.06-.86.04-1.33.18-1.64.3-.41.16-.71.35-1.02.66-.31.31-.5.61-.66 1.02-.12.31-.26.78-.3 1.64C4.31 9.02 4.3 9.34 4.3 12s.01 2.98.06 4.03c.04.86.18 1.33.3 1.64.16.41.35.71.66 1.02.31.31.61.5 1.02.66.31.12.78.26 1.64.3 1.05.05 1.37.06 4.03.06s2.98-.01 4.03-.06c.86-.04 1.33-.18 1.64-.3.41-.16.71-.35 1.02-.66.31-.31.5-.61.66-1.02.12-.31.26-.78.3-1.64.05-1.05.06-1.37.06-4.03s-.01-2.98-.06-4.03c-.04-.86-.18-1.33-.3-1.64a2.8 2.8 0 0 0-.66-1.02 2.8 2.8 0 0 0-1.02-.66c-.31-.12-.78-.26-1.64-.3C14.98 3.81 14.66 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.35-1.98a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.63c0-1.34-.02-3.07-1.88-3.07-1.88 0-2.17 1.44-2.17 2.97V21h-4V9z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M13.5 21v-8.14h2.7l.4-3.2h-3.1V7.6c0-.93.25-1.56 1.6-1.56h1.7V3.14C15.98 3.06 15.02 3 13.9 3c-2.28 0-3.84 1.4-3.84 3.96v2.7H7.36v3.2h2.7V21h3.44z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.4 4 12 4 12 4h-.01s-3.4 0-6.54.12c-.43.05-1.36.05-2.19.92-.66.66-.87 2.16-.87 2.16S2.18 8.96 2.18 10.7v1.6c0 1.74.21 3.5.21 3.5s.21 1.5.87 2.16c.83.87 1.92.84 2.4.94C7.36 19 12 19 12 19s3.4 0 6.54-.13c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.16.87-2.16s.21-1.75.21-3.5v-1.6c0-1.74-.21-3.5-.21-3.5zM9.95 14.5V8.9l5.6 2.8-5.6 2.8z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#web">Websites</Link></li>
              <li><Link href="/services#mobile">Mobile Apps</Link></li>
              <li><Link href="/services#ai">AI Solutions</Link></li>
              <li><Link href="/services#custom">Custom Software</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li><Link href="/contact">Send a project enquiry →</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span>{year}</span> Artech IT Solutions. All Rights Reserved.</span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
