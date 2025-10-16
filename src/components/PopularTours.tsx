"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { tours } from "@/app/data/tours";
import ToursCard from "./ToursCard";


export default function PopularTours() {
  const toursShow = tours.slice(0,4)
  const { t } = useTranslation();
  const { theme } = useTheme();

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-b from-gray-950 to-gray-900"
      : theme === "blue"
      ? "bg-gradient-to-b from-blue-50 to-white"
      : "bg-gradient-to-b from-orange-50 to-white";

  const textColor =
    theme === "dark"
      ? "text-white"
      : theme === "blue"
      ? "text-blue-900"
      : "text-gray-800";

  return (
    <section
      className={`relative w-full py-20 px-6 md:px-12 overflow-hidden ${bgColor}`}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/travel-bg.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${textColor}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("popular_tours")}
        </motion.h2>

        <motion.p
          className={`text-lg md:text-xl mb-14 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("choose_your_next_destination")}
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {toursShow.map((tour, index) => (

            <ToursCard tour={tour} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
