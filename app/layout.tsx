import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/content/site";

// Space Mono — every heading, label and button on the page.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["monospace"],
});

// Inter Display — paragraph copy (self-hosted).
const interDisplay = localFont({
  src: "./InterDisplay-400.woff2",
  weight: "400",
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

const DOMAIN = SITE.domain;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: SITE.meta.title,
    template: "%s — VENQOR Studios",
  },
  description: SITE.meta.description,
  keywords: SITE.meta.keywords,
  authors: [{ name: "VENQOR Studios", url: DOMAIN }],
  creator: "VENQOR Studios",
  publisher: "VENQOR Studios",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: DOMAIN,
    siteName: "VENQOR Studios",
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: [
      {
        url: "/assets/brand/og.jpg",
        width: 1200,
        height: 630,
        alt: "VENQOR Studios — We Build Websites That Move",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: ["/assets/brand/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/brand/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/assets/brand/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f4f4",
};

// --- JSON-LD structured data ---

function jsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VENQOR Studios",
    url: DOMAIN,
    logo: `${DOMAIN}/assets/brand/logo-m.svg`,
    email: SITE.contact.email,
    foundingDate: "2024",
    founders: [
      { "@type": "Person", name: "Neil Verma", jobTitle: "Founder — Engineering" },
      { "@type": "Person", name: "Yojasvi", jobTitle: "Founder — Marketing & Operations" },
    ],
    areaServed: ["India", "Germany", "United States"],
    knowsAbout: [
      "3D Websites",
      "WebGL",
      "Three.js",
      "MERN Stack",
      "Next.js",
      "Flutter",
      "Swift",
      "iOS App Development",
      "E-Commerce",
      "Portfolio Websites",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VENQOR Studios",
    url: DOMAIN,
    description: SITE.meta.description,
    publisher: { "@type": "Organization", name: "VENQOR Studios" },
    inLanguage: "en-IN",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const services = SITE.services.items.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.long,
    provider: { "@type": "Organization", name: "VENQOR Studios" },
    areaServed: "Worldwide",
  }));

  return [org, website, faqPage, ...services];
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schemas = jsonLd();

  return (
    <html lang="en" className={`${spaceMono.variable} ${interDisplay.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
