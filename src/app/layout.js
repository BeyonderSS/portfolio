"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Preloader from "@/components/PreLoader/Preloader";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
const milvenRegular = localFont({ src: "../../public/fonts/Milven-Regular.otf" })
const agraham = localFont({ src: "../../public/fonts/Agraham.otf" })
const amsterline = localFont({ src: "../../public/fonts/Amsterline.ttf" })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Run preloader only on initial page load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 8500); // 7s animation + 1.5s exit
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {loading ? <Preloader onComplete={() => setLoading(false)} /> : <main>
<Navbar/>

            {children}
            <Footer />
          </main>}
        </ThemeProvider>
      </body>
    </html>
  );
}
