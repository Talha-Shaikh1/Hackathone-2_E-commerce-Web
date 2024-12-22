import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from 'react';


export const metadata: Metadata = {
  title: "Comforty",
  description: "Generated by create Comforty app",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}