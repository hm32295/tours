"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";

export default function AboutPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const currentTheme = themes[theme as keyof typeof themes];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const floatAnim = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as Transition["ease"],
      },
    },
  };

  return (
    <section
      className={`relative overflow-hidden min-h-screen px-6 md:px-20 py-24 ${currentTheme.background} ${currentTheme.text} transition-all duration-700`}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-50 blur-3xl"
        style={{
          background: currentTheme.gradient,
          maskImage:
            "radial-gradient(circle at 50% 50%, white 10%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* HERO SECTION */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl mx-auto mb-28"
      >
        <h1
          className={`text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent ${currentTheme.titleGradient}`}
        >
          {t("about_.title")}
        </h1>
        <p className={`${currentTheme.textSecondary} text-xl leading-relaxed`}>
          {t("about_.subtitle")}
        </p>
      </motion.div>

      {/* MISSION SECTION */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid md:grid-cols-2 gap-12 items-center mb-28"
      >
        <motion.div {...floatAnim} className="relative">
          <div
            className={`absolute -top-10 -left-10 w-48 h-48 ${currentTheme.accentBlur}`}
          />
          <Image
            src="/mission.webp"
            alt="Mission"
            width={520}
            height={400}
            className={`rounded-3xl shadow-2xl object-cover relative z-10 ${currentTheme.imageShadow}`}
          />
        </motion.div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{t("about_.mission.title")}</h2>
          <p className={`${currentTheme.textSecondary} text-lg leading-relaxed`}>
            {t("about_.mission.desc")}
          </p>
        </div>
      </motion.div>

      {/* VALUES SECTION */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid md:grid-cols-2 gap-12 items-center mb-28"
      >
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-3xl font-bold">{t("about_.values.title")}</h2>
          <ul className="space-y-3 text-lg">
            {["item1", "item2", "item3"].map((key, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                className={`${currentTheme.textSecondary}`}
              >
                {["🌟", "💡", "🤝"][i]} {t(`about_.values.${key}`)}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div {...floatAnim} className="order-1 md:order-2 relative">
          <div className={`absolute bottom-0 right-0 w-56 h-56 ${currentTheme.accentBlur}`} />
          <Image
            src="/values.jpeg"
            alt="Values"
            width={520}
            height={400}
            className={`rounded-3xl shadow-2xl object-cover relative z-10 ${currentTheme.imageShadow}`}
          />
        </motion.div>
      </motion.div>

      {/* TEAM SECTION */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-center"
      >
        <h2 className="text-3xl font-bold mb-8">{t("about_.team.title")}</h2>
        <p
          className={`${currentTheme.textSecondary} max-w-2xl mx-auto mb-12 text-lg`}
        >
          {t("about_.team.desc")}
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`relative p-8 rounded-2xl shadow-lg border ${currentTheme.cardBg} ${currentTheme.border} hover:shadow-2xl transition-all duration-500`}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <Image
                src="/founder.png"
                alt="Founder"
                width={120}
                height={120}
                className="rounded-full shadow-lg border-4 border-white dark:border-gray-800"
              />
            </div>
            <div className="pt-16">
              <h3 className="font-semibold text-xl">{t("about_.team.name")}</h3>
              <p className={`${currentTheme.textSecondary} text-sm`}>
                {t("about_.team.role")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
