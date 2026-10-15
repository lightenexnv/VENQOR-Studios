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
  // Fall back to the system monospace (like the reference) so glyphs missing from the
  // subset — e.g. "→" — render identically.
  adjustFontFallback: false,
  fallback: ["monospace"],
});

// Inter Display — paragraph copy (self-hosted, same file the original serves).
const interDisplay = localFont({
  src: "./InterDisplay-400.woff2",
  weight: "400",
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
  icons: {
    icon: "/assets/brand/favicon.png",
    apple: "/assets/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: ["/assets/brand/og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f4f4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${interDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
