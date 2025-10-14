import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "ग्राम पंचायत - अधिकृत वेबसाइट",
  description: "ग्राम पंचायत की आधिकारिक वेबसाइट - समुदाय की सेवा करना",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <TopBar />
          <Header />
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
