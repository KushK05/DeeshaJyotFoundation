import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CartProvider } from "@/components/providers/cart-context";
import { NGO_INFO } from "@/lib/constants";
import "@/styles/globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${NGO_INFO.name} | ${NGO_INFO.tagline}`,
    template: `%s | ${NGO_INFO.name}`,
  },
  description: NGO_INFO.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: NGO_INFO.name,
    description: NGO_INFO.tagline,
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-on-surface">
        <CartProvider>
          <div aria-hidden="true" className="grain-overlay" />
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
