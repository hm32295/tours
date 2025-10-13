"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { tours } from "@/app/data/tours";
import { themes } from "@/app/config/themeConfig";

export default function ToursPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isArabic = i18n.language === "ar";
  const currentTheme = themes[theme];

  return (
    <section
      className={`min-h-screen relative py-20 px-6 md:px-12 transition-all duration-500 ${currentTheme.background}`}
    >
      {/* خلفية زخرفية خفيفة */}
      <div className="absolute inset-0 bg-[url('/patterns/travel-bg.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* العنوان */}
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

        {/* شبكة الرحلات */}
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
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer border ${currentTheme.border} ${currentTheme.cardBg} transition-transform duration-500 hover:-translate-y-2`}
            >
              {/* الصورة */}
              <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={tour.img}
                  alt={isArabic ? tour.name_ar : tour.name_en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* المحتوى */}
              <div
                className={`p-6 ${
                  isArabic ? "text-right" : "text-left"
                } transition-all`}
              >
                <h3
                  className={`text-2xl font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {isArabic ? tour.name_ar : tour.name_en}
                </h3>

                <p className="text-lg font-semibold text-yellow-500 mb-3">
                  {tour.price}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-2 rounded-lg font-semibold shadow-md transition-colors ${currentTheme.buttonPrimary}`}
                >
                  {t("bookNow")}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
