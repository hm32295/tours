"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { tours } from "@/app/data/tours";
import { themes } from "@/app/config/themeConfig";
import ToursCard from "@/components/ToursCard";

export default function ToursPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section
      className={`min-h-screen relative py-20 px-6 md:px-12 transition-all duration-500 ${currentTheme.background}`}
    >
      <div className="absolute inset-0 bg-[url('/patterns/travel-bg.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto z-10">
  
        <motion.h1
          className={`text-4xl md:text-5xl font-extrabold mb-6 text-center ${currentTheme.titleGradient}`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("tours_.title")}
        </motion.h1>

        <motion.p
          className={`text-center text-lg md:text-xl mb-16 ${currentTheme.textSecondary}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("tours_.subtitle")}
        </motion.p>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {tours.map((tour,index) => (
              <ToursCard key={index} tour={tour}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
