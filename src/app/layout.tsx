import "./globals.css";

import { Inter, Space_Grotesk, Caveat } from "next/font/google";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import classNames from "classnames";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danizavala.com"),
  title: "Daniel Zavala - Resume",
  description:
    "Experienced Front End Developer and Designer adept at crafting captivating and functional visual interfaces.",
  keywords:
    "Frontend development, UI design, UX optimization, web development, creative coding, user interface, responsive design, JavaScript, HTML, CSS, digital innovation.",
  icons: {
    icon: [
      {
        url: "./favicon.ico",
      },
      {
        url: "./favicon.ico",
        rel: "maskable",
      },
      {
        url: "./favicon/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
      {
        url: "./favicon/favicon-32x32.png",
        rel: "icon",
        sizes: "32x32",
      },
      {
        url: "./favicon/favicon-16x16.png",
        rel: "icon",
        sizes: "16x16",
      },
    ],
  },
  manifest: "./favicon/site.webmanifest",
  openGraph: {
    images: [
      {
        url: "/og-reference.png",
        width: 1500,
        height: 624,
        alt: "Daniel Zavala - Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og-reference.png",
        width: 1500,
        height: 624,
        alt: "Daniel Zavala - Resume",
      },
    ],
  },
  other: {
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cls = classNames([inter.className, spaceGrotesk.variable, caveat.variable]);
  return (
    <html lang="en">
      <body className={cls}>
        <main className={"page text-white"}>
          <LanguageProvider>
            <Navbar />
            <div>
              {children}
            </div>
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
