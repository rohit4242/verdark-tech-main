import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/providers/toast-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/NavBar";
import { marketingConfig } from "@/config/marketing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedark Tech",
  description: "A Platform that provides Tailored AI bot Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar items={marketingConfig.mainNav} scroll={true} />
        <ToastProvider />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
