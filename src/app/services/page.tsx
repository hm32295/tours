"use client";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { services } from "../data/services";
import ServicesCard from "@/components/ServicesCard";

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
            <ServicesCard key={index} Icon={Icon} index={index} service={service}/>
          );
        })}
      </div>
    </section>
  );
}
