"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "../components/Card";
import cards from "./data/Cards";
import { CartProvider, useCart } from "@/context/CartContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <CartProvider>
          <Navbar />
          <main className="page">
            <div className="grid">
              {cards.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}