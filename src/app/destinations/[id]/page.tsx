"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { destinations } from "@/app/data/destinations";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";

export default function DestinationDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const selectedTheme = themes[theme];

  const dest = destinations.find((d) => d.id === Number(id));

  if (!dest)
    return (
      <div
        className={`${selectedTheme.text} text-center mt-20 text-xl font-semibold`}
      >
        {t("details.notFound")}
      </div>
    );

  return (
    <div
      className={`${selectedTheme.background} min-h-screen pb-20 transition-colors duration-500`}
    >
      {/* ===== Hero Section ===== */}
      <section className="relative h-[75vh] overflow-hidden rounded-b-[3rem]">
        <Image
          src={dest.image}
          alt={t(dest.nameKey)}
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center max-w-4xl px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl"
          >
            {t(dest.nameKey)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-gray-200 text-lg md:text-xl leading-relaxed"
          >
            {t(dest.descKey)}
          </motion.p>
        </div>
      </section>

      {/* ===== Info & Highlights ===== */}
      <section className="max-w-7xl mx-auto mt-20 px-6 grid lg:grid-cols-3 gap-10">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl p-8 shadow-lg backdrop-blur-md border ${selectedTheme.border} ${selectedTheme.cardBg}`}
        >
          <h2
            className={`text-2xl font-semibold mb-6 border-b pb-3 ${selectedTheme.text}`}
          >
            {t("details.information")}
          </h2>
          <ul className={`space-y-4 text-base ${selectedTheme.textSecondary}`}>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-500" />
              <span>{dest.country}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>{dest.duration}</span>
            </li>
            <li className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span>{dest.price}</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>{dest.rating}</span>
            </li>
          </ul>
          <p className={`mt-6 text-sm ${selectedTheme.textSecondary}`}>
            <strong>{t("details.bestTime")}:</strong> {dest.bestTime}
          </p>
        </motion.div>

        {/* Highlights & Activities */}
        <div className="lg:col-span-2 space-y-12">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl p-8 shadow-md border ${selectedTheme.border} ${selectedTheme.cardBg}`}
          >
            <h3
              className={`text-3xl font-semibold mb-8 text-center ${selectedTheme.text}`}
            >
              {t("details.highlights")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dest.highlightsKey.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`p-5 rounded-xl border ${selectedTheme.border} backdrop-blur-md  shadow-sm text-center transition`}
                >
                  <p className={selectedTheme.text}>{t(item)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`rounded-3xl p-8 shadow-md border ${selectedTheme.border} ${selectedTheme.cardBg}`}
          >
            <h3
              className={`text-3xl font-semibold mb-8 text-center ${selectedTheme.text}`}
            >
              {t("details.activities")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dest.activitiesKey.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`p-5 rounded-xl border ${selectedTheme.border} backdrop-blur-md text-center shadow-sm transition`}
                >
                  <p className={selectedTheme.text}>{t(item)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Gallery Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mt-24 px-6"
      >
        <h3
          className={`text-3xl font-semibold mb-10 text-center ${selectedTheme.text}`}
        >
          {t("details.gallery")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dest.gallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={img}
                alt={t(dest.nameKey)}
                width={600}
                height={400}
                className="w-full h-56 object-cover hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
