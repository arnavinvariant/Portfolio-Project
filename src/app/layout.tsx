import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavgupta.dev"),
  title: {
    default: "Arnav Gupta | Independent Researcher",
    template: "%s — Arnav Gupta",
  },
  description: "Independent researcher emerging in pure mathematics, with published research in machine learning theory and existentialist philosophy.",
  openGraph: {
    type: "website",
    siteName: "Arnav Gupta",
    title: "Arnav Gupta | Independent Researcher",
    description: "Independent researcher emerging in pure mathematics, with published research in machine learning theory and existentialist philosophy.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Arnav Gupta — Independent Researcher" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Gupta | Independent Researcher",
    description: "Independent researcher emerging in pure mathematics, with published research in machine learning theory and existentialist philosophy.",
    images: ["/profile.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/favicon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.variable}>
        <NavBar />
        <ScrollProgress />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
