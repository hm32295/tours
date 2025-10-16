"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { tours } from "@/app/data/tours";
import BookingButton from "@/components/BookingButton";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";

export default function TourDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const currentTheme = themes[theme || "blue"];

  const tour = tours.find((t) => t.id === Number(id));
  const lang = i18n.language;

  if (!tour) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center text-center p-10 ${currentTheme.text}`}>
        <p className="text-2xl font-semibold">{t("tours_.common.tourNotFound")}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className={`mt-6 px-6 py-3 rounded-full ${currentTheme.buttonPrimary}`}
        >
          {t("tours_.common.back")}
        </motion.button>
      </div>
    );
  }

  // ===== WhatsApp Message =====
  const tourName = lang === "ar" ? tour.name_ar : tour.name_en;
  const message = `👋 مرحبًا، أود الاستفسار عن الرحلة التالية:
📍 الاسم: ${tourName}
💰 السعر: ${tour.price}
هل يمكنكم تزويدي بالمزيد من التفاصيل والحجز؟`;

  return (
    <div
      className={`min-h-screen pt-28 pb-24 relative overflow-hidden transition-all duration-700 ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute w-[600px] h-[600px] ${currentTheme.accentBlur} top-10 left-20`}></div>
        <div className={`absolute w-[500px] h-[500px] ${currentTheme.accentBlur} bottom-10 right-10`}></div>
      </div>

      {/* ===== Header ===== */}
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative w-44 h-44 rounded-3xl overflow-hidden ${currentTheme.imageShadow}`}
            >
              <Image
                src={tour.img}
                alt={tourName}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="text-center lg:text-left">
              <h1
                className={`text-4xl md:text-5xl font-extrabold ${currentTheme.titleGradient}`}
              >
                {tourName}
              </h1>
              <p className={`text-lg mt-3 ${currentTheme.textSecondary}`}>
                {t("tours_.details.subtitle")}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className={`flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full ${currentTheme.buttonSecondary}`}
          >
            <ArrowLeft className={`w-5 h-5 ${currentTheme.iconColor}`} />{" "}
            {t("tours_.common.back")}
          </motion.button>
        </motion.div>

        {/* ===== Details Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`mt-16 ${currentTheme.cardBg} rounded-3xl p-10 shadow-2xl border ${currentTheme.border}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className={`space-y-4 text-lg ${currentTheme.textSecondary}`}>
              <p>
                💰 <span className="font-semibold">{t("tours_.details.price")}:</span>{" "}
                {tour.price}
              </p>
              <p>
                ⏱ <span className="font-semibold">{t("tours_.details.duration")}:</span>{" "}
                5 {t("tours_.details.days")} / 4 {t("tours_.details.nights")}
              </p>
              <p className="flex items-center">
                ⭐ <span className="mx-2 font-semibold">{t("tours_.details.rating")}:</span>{" "}
                4.8/5
                <Star className="w-5 h-5 text-yellow-400 ml-2" />
              </p>
              <p className="mt-6 leading-relaxed">
                {t("tours_.details.desc")}
              </p>
            </div>

            {/* Right Side */}
            <div>
              <h2 className="text-2xl font-semibold mb-5">
                {t("tours_.details.features")}
              </h2>
              <ul className="space-y-3">
                {[
                  t("الإقامة في فندق 4 نجوم"),
                  t("وجبات فطور يومية"),
                  t("جولات سياحية منظمة"),
                  t("مرشد سياحي محترف"),
                  t("خدمة التوصيل من المطار وإليه"),
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 ${currentTheme.text}`}
                  >
                    <CheckCircle2 className={`w-5 h-5 text-green-500`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== WhatsApp Booking ===== */}
          <div className="mt-16 flex justify-center">
            <BookingButton message={message} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
