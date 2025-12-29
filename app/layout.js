"use client"

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import OnScreenSearch from "@/components/OnScreenSearch";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <CartProvider>
        <Navbar />
        <OnScreenSearch />
        <main className="page">
          {children}
        </main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}