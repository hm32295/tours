'use client'
import { themes } from "@/app/config/themeConfig";
import { contactData } from "@/app/data/contactData";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BookingButton({message}:{message:string}) {
     const { theme } = useTheme();

      const selectedTheme = themes[theme];
     const { t } = useTranslation();

      const phoneNumber = contactData.phone;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 mt-20"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex capitalize items-center gap-3 px-10 py-5 ${selectedTheme.buttonPrimary} text-white text-xl font-semibold rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105`}
        >
          <MessageCircle className="w-7 h-7" />
          {t("details.bookNow") || "احجز الآن عبر واتساب"}
        </a>
      </motion.div>
  )
}
