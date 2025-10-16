"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { contactData } from "@/app/data/contactData";

export default function ConnectPage() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isArabic = i18n.language === "ar";
  const currentTheme = themes[theme];

  return (
    <section
      className="relative min-h-screen py-20 px-6 md:px-12 transition-all duration-500 overflow-hidden"
      style={{
        background: currentTheme.gradient,
      }}
    >
      {/* خلفية أنيميشن ناعمة */}
      <div className="absolute inset-0 bg-[url('/patterns/travel-bg.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          className={`text-4xl md:text-5xl font-extrabold mb-6 text-center ${currentTheme.titleGradient}`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isArabic ? contactData.title_ar : contactData.title_en}
        </motion.h1>

        <motion.p
          className={`text-center text-lg md:text-xl mb-16 ${currentTheme.textSecondary}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {isArabic ? contactData.subtitle_ar : contactData.subtitle_en}
        </motion.p>

        {/* قسم المعلومات */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactData.info.map((item, index) => (
            <motion.div
              key={item.id}
              className={`p-6 rounded-2xl text-center shadow-xl border ${currentTheme.border}`}
              style={{
                background:
                  theme === "dark"
                    ? "rgba(30, 30, 30, 0.8)"
                    : "rgba(255, 255, 255, 0.85)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-yellow-400">
                {isArabic ? item.label_ar : item.label_en}
              </h4>
              <p className={currentTheme.text}>
                {isArabic ? item.value_ar : item.value_en}
              </p>
            </motion.div>
          ))}
        </div>

        {/* نموذج التواصل */}
        <motion.form
          className={`max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl border ${currentTheme.border}`}
          style={{
            background:
              theme === "dark"
                ? "rgba(25, 25, 25, 0.9)"
                : "rgba(255, 255, 255, 0.95)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={`grid md:grid-cols-2 gap-6 mb-6 ${isArabic ? "text-right" : "text-left"}`}>
           <input
              type="text"
              placeholder={isArabic ? "الاسم الكامل" : "Full Name"}
              className={`w-full p-4 rounded-lg border ${currentTheme.border} bg-transparent ${currentTheme.inputText} focus:outline-none focus:ring-2 ${currentTheme.focusRing}`}
            />

            <input
              type="email"
              placeholder={isArabic ? "البريد الإلكتروني" : "Email Address"}
              className={`w-full p-4 rounded-lg border ${currentTheme.border} bg-transparent ${currentTheme.inputText} focus:outline-none focus:ring-2 ${currentTheme.focusRing}`}
            />
          </div>
       <textarea
  rows={5}
  placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message..."}
  className={`w-full p-4 rounded-lg border ${currentTheme.border} bg-transparent ${currentTheme.inputText} focus:outline-none focus:ring-2 ${currentTheme.focusRing} mb-6`}
/>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`w-full cursor-pointer py-3 rounded-lg font-semibold text-lg shadow-md ${currentTheme.buttonPrimary}`}
          >
            {isArabic ? "إرسال الرسالة" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
