"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const isArabic = i18n.language === "ar";

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com" },
  ];

  return (
    <footer
      className={`relative py-14 px-6 sm:px-12 transition-all duration-700 ${currentTheme.background} ${currentTheme.text}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* خلفية متحركة */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* العمود الأول */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Logo />
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } leading-relaxed`}
          >
            {t("footer_description")}
          </p>
        </motion.div>

        {/* العمود الثاني */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">{t("quick_links")}</h3>
          <ul className="space-y-2 text-base">
            {[
              { href: "/", label: t("home") },
              { href: "/about", label: t("about") },
              { href: "/tours", label: t("tours") },
              { href: "/contact", label: t("contact") },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:underline hover:text-blue-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* العمود الثالث */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">{t("follow_us")}</h3>
          <div className="flex gap-4 text-xl">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "bg-gray-800 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
                    : theme === "blue"
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white"
                    : "bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white"
                }`}
                whileHover={{ rotate: 10 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* الخط السفلي */}
      <motion.div
        className="relative z-10 mt-12 border-t border-gray-400/30 pt-6 text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          © {new Date().getFullYear()} {t("brand_name")}. {t("rights_reserved")}
        </p>
      </motion.div>
    </footer>
  );
}
