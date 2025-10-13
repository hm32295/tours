"use client";
import { useTranslation } from "react-i18next";
import { themes } from "@/app/config/themeConfig";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { t } = useTranslation();
   const { theme } = useTheme();
  const currentTheme = themes[theme] || themes.blue;

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  // Dynamic particles based on theme
  const particleColors = {
    blue: ["bg-blue-400/30", "bg-cyan-400/40"],
    sand: ["bg-orange-300/40", "bg-yellow-400/40"],
    dark: ["bg-gray-700/40", "bg-gray-500/40"],
  };

  const [color1, color2] = particleColors[theme] || particleColors.blue;

  return (
    <section
      className={`relative w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 transition-all duration-700 ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 opacity-70 bg-gradient-to-br ${currentTheme.gradient} animate-gradient-slow`}
      ></div>

      {/* Floating particles */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className={`absolute top-20 left-10 w-28 h-28 ${color1} blur-3xl rounded-full`}
      ></motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className={`absolute bottom-20 right-16 w-44 h-44 ${color2} blur-3xl rounded-full`}
      ></motion.div>

      {/* Text Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-xl text-center md:text-left space-y-8"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
        >
          {t("discover")}{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-orange-400 dark:to-yellow-500"
            animate={{
              backgroundPosition: ["200%", "0%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {t("the_world_with_us")}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg opacity-90 leading-relaxed drop-shadow-sm"
        >
          {t(
            "explore_new_destinations_and_experiences_with_our_professional_team"
          )}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex justify-center md:justify-start gap-4 mt-10"
        >
        
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold cursor-pointer shadow-lg ${currentTheme.buttonSecondary}`}
          >
            {t("learn_more")}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Section with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-full md:w-[45%] mt-12 md:mt-0"
      >
        <motion.img
          whileHover={{ y: -10, rotate: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
          src={"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"}
          alt="Travel"
          className="w-full rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  );
}
