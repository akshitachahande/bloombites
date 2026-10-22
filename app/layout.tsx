import type { Metadata, Viewport } from "next";
import { Aldrich, Oswald } from "next/font/google";
import { FormsProvider } from "@/components/forms/FormsProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { SearchProvider } from "@/components/search/SearchContext";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

const TITLE = "Bloom Bites NYC — Matcha Café";
const DESCRIPTION =
  "Fine matcha with floral touches. Matcha bakes, lattes and cozy branches across NYC.";

export const metadata: Metadata = {
  // Absolute base for social images. On Vercel, Next falls back to the
  // production URL automatically; set SITE_URL for a custom domain.
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Bloom Bites NYC",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#f3ebd8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${aldrich.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only rounded-pill bg-olive text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-5 focus:py-3"
        >
          Skip to content
        </a>
        <FormsProvider>
          <SearchProvider>
            <Header />
            {children}
          </SearchProvider>
        </FormsProvider>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
