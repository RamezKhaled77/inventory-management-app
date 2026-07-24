import type { Metadata } from "next";
import { HexclaveProvider, HexclaveTheme } from "@hexclave/next";
import { hexclaveClientApp } from "../stack/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inventory Management App",
  description:
    "Manage your inventory with ease and efficiency using our intuitive web application. Keep track of your products, monitor stock levels, and gain valuable insights to optimize your business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HexclaveProvider app={hexclaveClientApp}>
          <HexclaveTheme>{children}</HexclaveTheme>
        </HexclaveProvider>
      </body>
    </html>
  );
}
