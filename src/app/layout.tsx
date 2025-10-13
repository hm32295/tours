"use client";

import { useState, useEffect } from "react";
import "@/lib/i18n"; 
import { themes } from "@/app/config/themeConfig";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
type ThemeKey = keyof typeof themes;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [theme] = useState<ThemeKey>("blue");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const currentLang = i18n.language;
    const newDir = currentLang === "ar" ? "rtl" : "ltr";
    setDirection(newDir);
    document.documentElement.dir = newDir;
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  const currentTheme = themes[theme];

  return (
    <html lang={i18n.language} dir={direction}>
      <body
        className={`
          min-h-screen
          ${currentTheme.background} 
          ${currentTheme.text}
          transition-all duration-700 ease-in-out
        `}
        style={{
          transitionProperty: "background-color, color",
        }}
      >
      
        <ThemeProvider>
          <Navbar />
          <main className="mt-5 transition-all duration-700 ease-in-out transform-gpu">
          
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
