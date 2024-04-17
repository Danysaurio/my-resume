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
    "Discover a world of creativity and innovation with a seamless blend of design and development. Explore captivating user interfaces and cutting-edge solutions crafted by a skilled frontend developer. Connect with me to elevate your digital presence.",
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={cls}>
        <main className={"page text-white md:h-screen h-[100dvh]"}>
          {/* <div className="p-10 fixed z-50 w-full bg-amber-300 sm:bg-red-500 md:bg-blue-800 lg:bg-green-400"></div> */}
          <Header />
          <ResponsiveNav className="md:hidden" />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
