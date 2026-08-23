# Artech IT Solutions — Website

The marketing site for **Artech IT Solutions** (Websites, Mobile Apps, AI Solutions, Custom Software), built with
[Next.js](https://nextjs.org) (App Router + TypeScript) and deployed on [Vercel](https://vercel.com).

Live domain: **artechitsolutions.in**

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Structure

```
app/
├── layout.tsx           Root layout — fonts, <Header>, <Footer>, <SiteEffects>, global metadata
├── globals.css          Full design system: tokens, components, sections, responsive rules
├── page.tsx             Home
├── about/page.tsx        About Us
├── services/page.tsx     Services (website / mobile / AI / custom software)
├── solutions/page.tsx    Interactive solutions explorer
├── projects/page.tsx     Portfolio (placeholder case studies — replace with real work)
├── process/page.tsx      How We Build (6-stage process)
├── contact/page.tsx      Contact page + project enquiry form
├── privacy/page.tsx      Privacy Policy (template — needs legal review)
├── terms/page.tsx        Terms & Conditions (template — needs legal review)
├── robots.ts             Dynamic robots.txt
└── sitemap.ts            Dynamic sitemap.xml

components/
├── Header.tsx            Sticky nav + mobile menu (client component)
├── Footer.tsx             Site footer
├── SiteEffects.tsx        Scroll-reveal, counters, FAQ accordion, testimonial carousel,
│                          solutions tabs, magnetic buttons, custom cursor, contact form —
│                          a client-side port of the original site's vanilla main.js
├── SolutionsTabs.tsx      Shared solutions explorer (home preview + full solutions page)
└── SolutionsPreview.tsx

lib/
├── site.ts                Shared site config (name, domain, phone, email, nav links)
├── solutions.ts           Solutions tab content
└── projects.tsx           Portfolio project content

public/assets/img/         Logo marks and favicons
```

## Design system

- **Brand colors**: royal blue `#1B3A8C`, brand red `#D8342A`, deep navy `#0A0F1E`, white, plus supporting tints —
  all defined as CSS custom properties in `app/globals.css` under `:root`.
- **Type**: Plus Jakarta Sans (display/headings) + Inter (body), self-hosted via `next/font/google`.
- **Accessibility**: semantic HTML, visible focus states, `prefers-reduced-motion` respected throughout, alt text on
  all images, labelled form fields.
- **Responsive**: tested at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920px.

## Known placeholders to replace before going live

- **Portfolio projects** (`lib/projects.tsx`) are clearly marked placeholders — swap in real case studies, screenshots
  and results.
- **Testimonials** on the home page (`app/page.tsx`) are placeholder quotes — replace with real client reviews.
- **Stats** in the trust strip (`40+ Projects`, `25+ Businesses`, etc.) are placeholders — update with real numbers.
- **Email address** `hello@artechitsolutions.in` — confirm/update to the real inbox.
- **Social links** in the footer (`components/Footer.tsx`) point to `#` — add real Instagram / LinkedIn / Facebook /
  YouTube URLs.
- **Privacy Policy & Terms** are starting templates only — have them reviewed by a lawyer before publishing.
- **Contact form** (`app/contact/page.tsx`) currently shows a success state on submit but does not send data
  anywhere — wire it up to an email service or serverless function (e.g. Resend, Formspree, a Next.js Route Handler).

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository — Vercel auto-detects Next.js, no
   config needed.
3. In **Project Settings → Domains**, add `artechitsolutions.in` (and `www.artechitsolutions.in` if desired) and
   point your domain registrar's DNS at Vercel per their on-screen instructions.
4. Every push to `main` deploys to production automatically; every PR gets its own preview URL.

No environment variables are required for the current feature set.
