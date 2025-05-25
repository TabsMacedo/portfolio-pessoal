// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Tábata Macedo",
  description: "Portfólio moderno com Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-tr from-black via-zinc-900 to-black text-white font-sans relative overflow-x-hidden md:overflow-x-auto">
        {children}
        <Footer />
      </body>
    </html>
  );
}