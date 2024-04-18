import "./globals.css";

import { Kaushan_Script, Montserrat } from "next/font/google";

import Header from "@/components/Header";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import classNames from "classnames";
import { ResponsiveNav } from "@/components/Navbar/ResponsiveNav";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
});

export const metadata: Metadata = {
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
      {
        url: "./favicon/site.webmanifest",
        rel: "manifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cls = classNames([inter.className, kaushan.variable]);
  return (
    <html lang="en">
      <meta property="og:image" content="/og-reference.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="624" />
      <meta property="og:image:alt" content="Daniel Zavala - Resume" />

      <meta property="twitter:image" content="/og-reference.png" />
      <meta property="twitter:image:type" content="image/png" />
      <meta property="twitter:image:width" content="1500" />
      <meta property="twitter:image:height" content="624" />
      <meta property="twitter:image:alt" content="Daniel Zavala - Resume" />

      <body className={cls}>
        <main className={"page text-white md:h-screen h-[100dvh]"}>
          <Header />
          <ResponsiveNav className="md:hidden" />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
