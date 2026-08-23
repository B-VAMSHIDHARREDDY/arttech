"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="siteHeader">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="Artech IT Solutions — Home">
            <img src="/assets/img/logo-horizontal.png" alt="Artech IT Solutions" width={168} height={49} />
          </Link>
          <nav className="nav-primary" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-accent btn-sm nav-cta">
              Let&apos;s Talk
            </Link>
            <button
              className={`hamburger${navOpen ? " is-active" : ""}`}
              id="hamburger"
              aria-label="Open menu"
              aria-expanded={navOpen}
              aria-controls="mobileNav"
              onClick={() => setNavOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${navOpen ? " is-open" : ""}`} id="mobileNav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-accent mnav-cta">
          Let&apos;s Talk
        </Link>
        <p className="mnav-contact">
          Call us — <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        </p>
      </div>
    </>
  );
}
