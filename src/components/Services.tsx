"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { services } from "@/app/data/services";
import ServicesCard from "./ServicesCard";

export default function Services() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const ViewServices = services.slice(0,3)

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
          {ViewServices.map((service ,index) => {
            const Icon = service.icon;
            return (
              <ServicesCard key={index} Icon={Icon} index={index} service={service}/>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
