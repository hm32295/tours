"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { destinations } from "@/app/data/destinations";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import BookingButton from "@/components/BookingButton";

export default function DestinationDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const selectedTheme = themes[theme];

  const dest = destinations.find((d) => d.id === Number(id));
  if (!dest)
    return (
      <div
        className={`text-center mt-20 text-2xl font-semibold ${selectedTheme.textSecondary}`}
      >
        {t("details.notFound")}
      </div>
    );

      const message = encodeURIComponent(
        `مرحبًا! \nأرغب في حجز الرحلة التالية:\n\n الوجهة: ${t(
          dest.nameKey
        )}\n الدولة: ${dest.country}\n المدة: ${
          dest.duration
        }\n السعر: ${dest.price}\n التقييم: ${
          dest.rating
        }\n\nمن فضلك أرسل لي التفاصيل الكاملة للحجز.`
      );

  return (
    <div
      className={`${selectedTheme.background} min-h-screen flex flex-col items-center transition-all duration-500`}
    >
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl">
        <Image
          src={dest.image}
          alt={t(dest.nameKey)}
          fill
          className="object-cover scale-105 transition-transform duration-[8s]"
          priority
        />
        
        <div
          className={`absolute inset-0 ${"bg-gradient-to-b from-black/70 via-black/40 to-transparent" }`}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1
            className={`text-6xl md:text-7xl font-extrabold mb-4 
            text-white drop-shadow-[0_8px_15px_rgba(0,0,0,0.9)]`}
          >
            {t(dest.nameKey)}
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]`}
          >
            {t(dest.descKey)}
          </p>
        </motion.div>
      </section>

      {/* ==== INFO SECTION ==== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          {
            icon: <MapPin className={`${selectedTheme.iconColor} w-7 h-7`} />,
            label: dest.country,
          },
          {
            icon: <Clock className={`${selectedTheme.iconColor} w-7 h-7`} />,
            label: dest.duration,
          },
          {
            icon: <DollarSign className={`${selectedTheme.iconColor} w-7 h-7`} />,
            label: dest.price,
          },
          {
            icon: <Star className={`${selectedTheme.iconColor} w-7 h-7`} />,
            label: dest.rating,
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.3 }}
            className={`${selectedTheme.cardBg} rounded-2xl p-6 shadow-xl text-center border border-white/10 transition-all duration-500 hover:shadow-2xl`}
          >
            <div className="flex justify-center mb-3">{info.icon}</div>
            <p className={`text-lg font-semibold ${selectedTheme.text}`}>
              {info.label}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* ==== DETAILS SECTION ==== */}
      <section className="max-w-7xl mx-auto px-6 mt-28 space-y-20">
        {[{ title: t("details.highlights"), items: dest.highlightsKey },
          { title: t("details.activities"), items: dest.activitiesKey }]
          .map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl font-bold mb-12 text-center ${selectedTheme.text}`}
            >
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                  }}
                  className={`${selectedTheme.cardBg} rounded-2xl p-6 text-center transition-all duration-300`}
                >
                  <p
                    className={`text-lg font-medium ${selectedTheme.textSecondary}`}
                  >
                    {t(item)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

  <BookingButton message={message}/>

    </div>
  );
}
