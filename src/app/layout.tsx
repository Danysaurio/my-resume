import "./globals.css";

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Image from "next/image";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" date-theme="dim">
      <body className={inter.className}>
        <main className={"page bg-site text-white bg-cover bg-no-repeat relative"}>
          <Header />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
