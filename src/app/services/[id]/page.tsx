"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { services } from "@/app/data/services";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const currentTheme = themes[theme] || themes.blue;

  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center text-center p-10 ${currentTheme.background} ${currentTheme.text}`}
      >
        <p className="text-2xl font-semibold opacity-80">
          {t("services_.common.serviceNotFound")}
        </p>
        <button
          onClick={() => router.back()}
          className={`mt-6 px-6 py-3 rounded-full font-semibold ${currentTheme.buttonPrimary}`}
        >
          {t("services_.common.back")}
        </button>
      </div>
    );
  }

  // ====== إعداد رسالة واتساب أنيقة ======
  const serviceName = `📌 *${t(service.titleKey)}*`;
  const servicePrice = service.priceRange
    ? `💰 السعر: *${service.priceRange}*`
    : "";
  const serviceDuration = service.duration
    ? `⏱ المدة: *${service.duration}*`
    : "";
  const serviceRating = service.rating
    ? `⭐ التقييم: *${service.rating}/5*`
    : "";
  const serviceFeatures =
    service.features && service.features.length > 0
      ? `📋 المميزات:\n${service.features
          .map((f) => "• " + t(f))
          .join("\n")}`
      : "";
  const serviceNotes = service.notes
    ? `📝 ملاحظات:\n${service.notes}`
    : "";

  const message = `مرحبًا! 👋\nأود الاستفسار عن الخدمة التالية:\n\n${serviceName}\n${servicePrice}\n${serviceDuration}\n${serviceRating}\n\n${serviceFeatures}\n${serviceNotes}\n\nهل يمكنني معرفة التفاصيل الكاملة وطريقة الحجز؟ 🤝✨`;

  const Icon = service.icon;

  return (
    <div
      className={`min-h-screen pt-28 pb-24 relative overflow-hidden ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* ====== خلفية الثيم ====== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute w-[600px] h-[600px] ${currentTheme.accentBlur} top-10 left-20`}
        ></div>
        <div
          className={`absolute w-[500px] h-[500px] ${currentTheme.accentBlur} bottom-10 right-10 opacity-50`}
        ></div>
      </div>

      {/* ====== Header ====== */}
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col justify-center sm:flex-row sm:justify-start items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`p-5 rounded-2xl ${currentTheme.cardBg}`}
            >
              <Icon className={`w-16 h-16 ${currentTheme.iconColor}`} />
            </motion.div>

            <div className="flex justify-center items-center flex-col text-center sm:text-start sm:block">
              <h1
                className={`text-4xl md:text-5xl font-extrabold ${currentTheme.titleGradient}`}
              >
                {t(service.titleKey)}
              </h1>
              <p
                className={`text-lg mt-3 ${currentTheme.textSecondary} max-w-2xl`}
              >
                {t(service.descKey)}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className={`flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full font-medium ${currentTheme.buttonSecondary}`}
          >
            <ArrowLeft className="w-5 h-5" /> {t("services_.common.back")}
          </motion.button>
        </motion.div>

        {/* ====== تفاصيل الخدمة ====== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`mt-16 rounded-3xl shadow-2xl p-10 border ${currentTheme.cardBg}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-lg">
              {service.priceRange && (
                <p>
                  💰{" "}
                  <span className="font-semibold">
                    {t("services_.details.price")}:
                  </span>{" "}
                  {service.priceRange}
                </p>
              )}
              {service.duration && (
                <p>
                  ⏱{" "}
                  <span className="font-semibold">
                    {t("services_.details.duration")}:
                  </span>{" "}
                  {service.duration}
                </p>
              )}
              {service.rating && (
                <p className="flex items-center">
                  ⭐{" "}
                  <span className="mx-2 font-semibold">
                    {t("services_.details.rating")}:
                  </span>
                  {service.rating}/5
                  <Star className="w-5 h-5 text-yellow-400 ml-2" />
                </p>
              )}
              {service.notes && (
                <p className={`mt-6 leading-relaxed ${currentTheme.textSecondary}`}>
                  {service.notes}
                </p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-5">
                {t("services_.details.features")}
              </h2>
              <ul className="space-y-3">
                {service.features?.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 ${currentTheme.textSecondary}`}
                  >
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    {t(feature)}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* ====== زر واتساب للحجز ====== */}
          <div className="mt-16 flex justify-center">
            <BookingButton message={message} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
