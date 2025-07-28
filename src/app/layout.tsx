import type { Metadata } from "next";

import "./globals.css";

import TopBar from "@/components/TopBar";
import { lufga } from "@/utils/fonts";
import BreadCrumbs from "@/components/BreadCrumbs";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "On Bazar",
  description: "Shop your fullest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lufga.variable}>
        <CartProvider>
          <TopBar />
          <BreadCrumbs />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
