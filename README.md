# Artech IT Solutions — Website

A premium, responsive marketing site for **Artech IT Solutions** (Websites, Mobile Apps, AI Solutions, Custom Software). Built as static HTML/CSS/JS — no build step, no framework, no dependencies. Open `index.html` in a browser or deploy the folder as-is to any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

## Structure

```
/
├── index.html          Home
├── about.html           About Us
├── services.html        Services (website / mobile / AI / custom software)
├── solutions.html       Interactive solutions explorer
├── projects.html        Portfolio (placeholder case studies — replace with real work)
├── process.html         How We Build (6-stage process)
├── contact.html         Contact page + project enquiry form
├── privacy.html         Privacy Policy (template — needs legal review)
├── terms.html           Terms & Conditions (template — needs legal review)
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css     Full design system: tokens, components, sections, responsive rules
    ├── js/main.js        Nav, scroll-reveal, counters, FAQ, carousel, solutions tabs, cursor, form
    └── img/              Logo marks (light + dark variants) and favicons, generated from the source logo
```

## Design system

- **Brand colors** pulled from the supplied logo: royal blue `#1B3A8C`, brand red `#D8342A`, deep navy `#0A0F1E`, white, plus supporting tints — all defined as CSS custom properties in `assets/css/style.css` under `:root`.
- **Type:** Plus Jakarta Sans (display/headings) + Inter (body), loaded from Google Fonts with system-font fallbacks.
- **No JS framework** — vanilla JS only, so there's nothing to build or install. `main.js` is one file, organized by feature (nav, reveal-on-scroll, counters, FAQ accordion, testimonial carousel, solutions tabs, magnetic buttons, custom cursor, contact form).
- **Accessibility:** semantic HTML, visible focus states, `prefers-reduced-motion` respected throughout, alt text on all images, labelled form fields.
- **Responsive:** tested at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920px — no horizontal overflow at any width.

## Known placeholders to replace before going live

- **Portfolio projects** (`projects.html`, and the preview on `index.html`) are clearly marked placeholders — swap in real case studies, screenshots and results.
- **Testimonials** on the home page are placeholder quotes — replace with real client reviews.
- **Stats** in the trust strip (`40+ Projects`, `25+ Businesses`, etc.) are placeholders — update with real numbers.
- **Email address** `hello@artechitsolutions.com` and canonical URLs (`www.artechitsolutions.com`) are placeholders — update to your real domain and inbox.
- **Social links** in the footer point to `#` — add real Instagram / LinkedIn / Facebook / YouTube URLs.
- **Privacy Policy & Terms** are starting templates only — have them reviewed by a lawyer before publishing.
- **Contact form** currently shows a success state on submit but does not send data anywhere — wire it up to your email service, form backend (e.g. Formspree, a serverless function, etc.) of choice.

## Local preview

No build tools needed. From this folder, run any static server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

Push this folder to a GitHub repo and enable **GitHub Pages** (Settings → Pages → deploy from `main` branch, root folder), or drag-and-drop the folder into Netlify/Vercel. No environment variables or build commands required.
