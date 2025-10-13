"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { themes } from "@/app/config/themeConfig";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import Logo from "./Logo";

export default function NavbarModal() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const currentTheme = themes[theme];

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  if (!mounted) return null;

  return createPortal(
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[90%] md:w-[85%] 
      rounded-2xl px-6 py-3 backdrop-blur-xl shadow-2xl border ${currentTheme.border} 
      transition-all duration-700 ${currentTheme.background} ${currentTheme.text}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-semibold">
          {["home", "about", "services", "tours", "contact"].map((key) => (
            <button
              key={key}
              className="relative cursor-pointer group transition-all duration-300"
            >
              <span className="group-hover:text-blue-500 transition-all duration-300">
                {t(key)}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={changeLanguage}
            className="px-3 py-1 text-sm cursor-pointer border rounded-xl hover:scale-105 transition-all"
          >
            {t("language")}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer hover:rotate-180 transition-transform duration-500"
          >
            {theme.includes("dark") ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden flex flex-col items-center gap-4 transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0 pointer-events-none"
        }`}
      >
        {["home", "about", "services", "tours", "contact"].map((key) => (
          <button
            key={key}
            className="hover:text-blue-500 text-lg transition duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            {t(key)}
          </button>
        ))}

        <div className="flex gap-3 mt-3">
          <button
            onClick={changeLanguage}
            className="border px-3 py-1 rounded-xl hover:scale-105 transition-all cursor-pointer"
          >
            {t("language")}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:rotate-180 transition-transform duration-500 cursor-pointer"
          >
            {theme.includes("dark") ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>,
    document.body
  );
}
