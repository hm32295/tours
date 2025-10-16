"use client";

import { themes } from "@/app/config/themeConfig";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {  ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type PropsType = {
  service: {
    id: number;
    titleKey: string;
    descKey: string;
  };
  index: number;
  Icon: React.ElementType;
};

export default function ServicesCard({ service, index, Icon }: PropsType) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();

  const currentTheme = themes[theme as keyof typeof themes] || themes.blue;

  const handleDetails = () => {
    router.push(`/services/${service.id}`);
  };

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative ${currentTheme.text} group rounded-3xl p-8 shadow-lg border overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${currentTheme.cardBg} ${currentTheme.border}`}
    >
      {/* Floating Accent */}
      <motion.div
        className={`absolute -bottom-16 -right-16 w-64 h-64 ${currentTheme.accentBlur}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-5">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className={`p-5 rounded-full shadow-lg border-4 ${currentTheme.border} ${
            theme === "dark"
              ? "bg-gray-700 text-yellow-300"
              : "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
          }`}
        >
          <Icon className="w-10 h-10" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold">{t(service.titleKey)}</h3>

        {/* Description */}
        <p
          className={`${currentTheme.textSecondary} leading-relaxed max-w-md text-sm md:text-base`}
        >
          {t(service.descKey)}
        </p>

            <motion.button
            onClick={handleDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex capitalize cursor-pointer items-center gap-2 mt-4 px-5 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ${currentTheme.buttonPrimary}`}
            >
            {t("services_.common.moreDetails") || "عرض التفاصيل"}
            <ArrowRight className="w-4 h-4" />
            </motion.button>
      </div>

      {/* Hover Line */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[4px] bg-gradient-to-r ${currentTheme.gradient}`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}
