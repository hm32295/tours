"use client";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = themes[theme as keyof typeof themes] || themes.blue;

  return (
    <section
      className={`min-h-screen py-20 px-6 transition-all duration-700 ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Section Title */}
      <motion.h2
        className={`text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent ${currentTheme.titleGradient}`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("services_.title")}
      </motion.h2>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group rounded-3xl p-8 shadow-lg border overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${currentTheme.cardBg} ${currentTheme.border}`}
            >
              {/* Floating Accent */}
              <motion.div
                className={`absolute -bottom-16 -right-16 w-64 h-64 ${currentTheme.accentBlur}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className={`p-5 rounded-full shadow-lg border-4 ${currentTheme.border} ${theme === "dark" ? "bg-gray-700 text-yellow-300" : "bg-gradient-to-br from-blue-500 to-blue-700 text-white"} `}
                >
                  <Icon className="w-10 h-10" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold">{t(service.titleKey)}</h3>

                {/* Description */}
                <p className={`${currentTheme.textSecondary} leading-relaxed`}>
                  {t(service.descKey)}
                </p>
              </div>

              {/* Hover Line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-[4px] bg-gradient-to-r ${currentTheme.gradient}`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
