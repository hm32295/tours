"use client";
import { themes } from "@/app/config/themeConfig";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import {  Info } from "lucide-react";

type ToursProps = {
  id: number;
  img: string;
  name_ar: string;
  name_en: string;
  price: string;
};

export default function ToursCard({ tour }: { tour: ToursProps }) {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const isArabic = i18n.language === "ar";
  const currentTheme = themes[theme];

  const handleDetails = () => {
    router.push(`/tours/${tour.id}`);
  };

  return (
    <motion.div
      key={tour.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl border ${currentTheme.border} ${currentTheme.cardBg} shadow-2xl group cursor-pointer transition-transform duration-700 hover:-translate-y-3`}
    >
      {/* ===== Image Section ===== */}
      <div className="relative h-72 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={tour.img}
          alt={isArabic ? tour.name_ar : tour.name_en}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Floating Label */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-sm font-semibold px-3 py-1 rounded-full shadow-md text-gray-800 dark:text-gray-100">
          {t("tours_.details.features") || "رحلة مميزة"}
        </div>
      </div>

      {/* ===== Card Content ===== */}
      <div className={`p-6 flex flex-col justify-between h-[240px] ${isArabic ? "text-right" : "text-left"}`}>
        <div>
          <h3
            className={`text-2xl font-extrabold mb-2 ${currentTheme.titleGradient}`}
          >
            {isArabic ? tour.name_ar : tour.name_en}
          </h3>

          <p
            className={`text-lg font-semibold mb-3 ${
              theme === "dark" ? "text-amber-400" : "text-blue-600"
            }`}
          >
             {t("tours_.details.price") || "السعر"}: {tour.price}
          </p>

          {/* <p className={`text-sm ${currentTheme.textSecondary}`}>
            {t("tours_.details.desc") ||
              "استمتع بتجربة فريدة تشمل جولات مميزة وإقامة فاخرة وأنشطة ترفيهية رائعة."}
          </p> */}
        </div>


          {/* Details Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDetails}
            className={`relative z-10 flex capitalize items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm shadow-md border cursor-pointer ${currentTheme.buttonSecondary}`}
          >
            <Info className="w-4 h-4" />
            {t("tours_.moreDetails") || "عرض التفاصيل"}
          </motion.button>

      </div>

      {/* ===== Accent Blur Effect ===== */}
      <div
        className={`absolute -bottom-16 -left-16 w-64 h-64 ${currentTheme.accentBlur} opacity-50`}
      ></div>
    </motion.div>
  );
}
