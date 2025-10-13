"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { useRouter } from "next/navigation";

export default function CallToAction() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const lang = i18n.language;

  const currentTheme = themes[theme];
  const isArabic = lang === "ar";

  return (
    <section
      className={`relative w-full overflow-hidden py-24 px-6 sm:px-12 transition-all duration-700 ${currentTheme.background}`}
    >
        
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-yellow-400/10 animate-pulse-slow"></div>


      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl sm:text-5xl font-extrabold mb-6 leading-tight ${
            theme === "dark"
              ? "text-white"
              : theme === "blue"
              ? "text-blue-900"
              : "text-gray-800"
          }`}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={`text-lg sm:text-xl mb-10 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("description")}
        </motion.p>

        <motion.div
          className={`flex flex-wrap justify-center gap-5 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button
            onClick={() => router.push("/book")}
            className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
                : theme === "blue"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {t("bookNow")}
          </button>

          <button
            onClick={() => router.push("/contact")}
            className={`px-8 py-3 rounded-full text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900"
                : theme === "blue"
                ? "border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white"
                : "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {t("contactUs")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
