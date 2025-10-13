"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { services } from "@/app/data/services";

export default function Services() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const ViewServices = services.slice(0,3)
  const cardColors: Record<string, string> = {
    blue: "from-blue-100 to-blue-200",
    sand: "from-yellow-100 to-orange-100",
    dark: "from-gray-800 to-gray-900",
  };

  const iconBgColors: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-700 text-white",
    sand: "bg-gradient-to-br from-orange-400 to-yellow-500 text-white",
    dark: "bg-gradient-to-br from-gray-700 to-gray-600 text-yellow-300",
  };

  const contentTextClass = themes[theme]?.text ?? "text-gray-900";
  const iconBorderClass = theme === "dark" ? "border-gray-700" : "border-white/30";

  return (
    <section
      id="services"
      className={`w-full py-24 px-6 transition-all duration-500 ${themes[theme].background}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className={`text-4xl sm:text-5xl font-extrabold mb-16 ${themes[theme].text}`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("services_.title")}
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
        >
          {ViewServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`relative overflow-hidden rounded-3xl p-8 shadow-xl border ${themes[theme].border} bg-gradient-to-br ${cardColors[theme]} backdrop-blur-md transition-transform hover:shadow-2xl group`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                  {/* Icon */}
                  <motion.div
                    className={`p-5 rounded-full cursor-pointer shadow-lg border-4 ${iconBorderClass} ${iconBgColors[theme]}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold ${themes[theme].text}`}>
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className={`${contentTextClass} leading-relaxed`}>
                    {t(service.descKey)}
                  </p>
                </div>

                {/* Gradient Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 w-0 h-[4px] bg-gradient-to-r ${themes[theme].gradient}`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
