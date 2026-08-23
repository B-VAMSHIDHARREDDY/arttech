import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Artech IT Solutions | Websites, Mobile Apps & AI Solutions",
    template: "%s | Artech IT Solutions",
  },
  description:
    "Artech IT Solutions builds modern websites, mobile applications, AI solutions and custom software that help businesses grow and transform digitally.",
  icons: {
    icon: [
      { url: "/assets/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/img/favicon-180.png",
  },
  openGraph: {
    type: "website",
    siteName: "Artech IT Solutions",
    url: siteConfig.url,
    images: ["/assets/img/favicon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/img/favicon-512.png"],
  },
};

export const viewport = {
  themeColor: "#0A0F1E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Artech IT Solutions",
              url: siteConfig.url,
              logo: `${siteConfig.url}/assets/img/favicon-512.png`,
              description:
                "Artech IT Solutions builds modern websites, mobile applications, AI solutions and custom software.",
              telephone: "+91-83745-24994",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main" className="visually-hidden" style={{ position: "absolute", left: "-9999px", top: 0 }}>
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
