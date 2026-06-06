import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimaks Skill Marketplace",
  description: "把好書與思考模型，變成可立即使用的 AI 技能包",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main style={{ minHeight: 'calc(100vh - 70px)' }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
