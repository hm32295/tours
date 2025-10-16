"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import { themes } from "@/app/config/themeConfig";
import { destinations } from "@/app/data/destinations";
import Link from "next/link";

export default function Destinations() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const cardColors: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300",
    sand: "bg-gradient-to-br from-yellow-100 via-orange-100 to-orange-200",
    dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  };

  const overlayColors: Record<string, string> = {
    blue: "from-blue-900/70 via-blue-700/40 to-transparent",
    sand: "from-orange-900/70 via-yellow-700/40 to-transparent",
    dark: "from-black/80 via-gray-800/60 to-transparent",
  };

  const contentTextClass = themes[theme]?.text ?? "text-gray-900";

  
  const truncateDescription = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 5) return text;
    return words.slice(0, 5).join(" ") + " ...";
  };

  return (
    <section
      className={`w-full relative py-24 px-6 transition-all duration-500 ${themes[theme].background}`}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className={`text-5xl capitalize sm:text-6xl font-extrabold mb-20 tracking-tight ${themes[theme].text}`}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("destinations.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              className={`relative group rounded-3xl overflow-hidden shadow-lg border ${themes[theme].border} ${cardColors[theme]} hover:shadow-2xl transition-all duration-500`}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
            >
              {/* ====== الصورة ====== */}
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  className={`absolute inset-0 z-10 bg-gradient-to-t ${overlayColors[theme]} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <motion.div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={dest.image}
                    alt={t(dest.nameKey)}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.h3
                  className="absolute bottom-6 left-6 z-20 text-2xl font-bold text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {t(dest.nameKey)}
                </motion.h3>
              </div>

              <div className="p-6 text-left flex flex-col justify-between h-auto relative z-10">
                <p className={`${contentTextClass} mb-6 leading-relaxed text-sm`}>
                  {truncateDescription(t(dest.descKey))}
                </p>

                <Link href={`/destinations/${dest.id}`} className="z-20">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer relative z-20 ${themes[theme].buttonPrimary} px-6 py-2.5 rounded-full text-sm font-semibold shadow-md`}
                  >
                    {t("destinations.explore")}
                  </motion.button>
                </Link>
              </div>

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${themes[theme].gradient}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
