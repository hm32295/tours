"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

const tours = [
  {
    id: 1,
    name_en: "Paris Adventure",
    name_ar: "مغامرة باريس",
    price: "$499",
    img: "/tours1.jpeg",
  },
  {
    id: 2,
    name_en: "Bali Paradise",
    name_ar: "جنة بالي",
    price: "$699",
    img: "/tours2.jpeg",
  },
  {
    id: 3,
    name_en: "Swiss Alps",
    name_ar: "جبال الألب السويسرية",
    price: "$899",
    img: "/tours4.jpeg",
  },
  {
    id: 4,
    name_en: "Egyptian Pyramids",
    name_ar: "أهرامات مصر",
    price: "$399",
    img: "/tours3.jpeg",
  },
  {
    id: 5,
    name_en: "Hurghada",
    name_ar: "الغردقة",
    price: "$399",
    img: "/tours6.jpeg",
  },
];

export default function PopularTours() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isArabic = i18n.language === "ar";

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
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={`relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-800"
                  : theme === "blue"
                  ? "bg-white/70 backdrop-blur"
                  : "bg-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={tour.img}
                  alt={isArabic ? tour.name_ar : tour.name_en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`absolute bottom-6 left-6 right-6 text-left transition-all duration-500 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-1 text-white drop-shadow-lg`}
                  >
                    {isArabic ? tour.name_ar : tour.name_en}
                  </h3>
                  <p className="text-lg font-medium text-yellow-300 mb-3">
                    {tour.price}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`px-5 py-2 rounded-lg font-semibold shadow-md ${
                      theme === "dark"
                        ? "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
                        : theme === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    {t("book_now")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
