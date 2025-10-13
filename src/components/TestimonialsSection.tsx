"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/app/config/themeConfig";
import { useEffect } from "react";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = lang === "ar";

  const testimonials = [
    {
      name: "Ali Hassan",
      country: "Egypt",
      image: "/users1.jpg",
      text_en:
        "SkyTrip made my honeymoon unforgettable. The service was perfect and the guides were very professional.",
      text_ar:
        "سكاي تريب جعلت شهر العسل لا يُنسى. الخدمة كانت ممتازة والمرشدين محترفين للغاية.",
    },
    {
      name: "Sarah Johnson",
      country: "UK",
      image: "/users2.jpeg",
      text_en:
        "Everything was perfectly organized. I loved how smooth the whole experience was!",
      text_ar: "كل شيء كان منظمًا تمامًا. أحببت مدى سلاسة التجربة بالكامل!",
    },
    {
      name: "Omar Al-Farouq",
      country: "Saudi Arabia",
      image: "/users3.jpeg",
      text_en:
        "Best travel agency I’ve ever dealt with! I highly recommend SkyTrip for everyone.",
      text_ar: "أفضل شركة سياحة تعاملت معها! أنصح الجميع بشركة سكاي تريب بشدة.",
    },
    {
      name: "Emma Brown",
      country: "USA",
      image: "/users2.jpeg",
      text_en:
        "The trip exceeded all expectations! From hotels to transportation — everything was top-notch!",
      text_ar:
        "الرحلة فاقت كل التوقعات! من الفنادق إلى وسائل النقل — كل شيء كان رائعًا!",
    },
    {
      name: "Ahmed Nasser",
      country: "UAE",
      image: "/users3.jpeg",
      text_en:
        "Professional service and friendly staff. I’ll definitely book again!",
      text_ar: "خدمة احترافية وطاقم ودود. بالتأكيد سأحجز معهم مرة أخرى!",
    },
  ];

  // إعداد السلايدر مع دعم RTL
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    rtl: isRTL,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.5, spacing: 20 } },
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 28 } },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const timer = setInterval(() => instanceRef.current?.next(), 4500);
    return () => clearInterval(timer);
  }, [instanceRef]);

  const prev = () =>
    isRTL ? instanceRef.current?.next() : instanceRef.current?.prev();
  const next = () =>
    isRTL ? instanceRef.current?.prev() : instanceRef.current?.next();

  return (
    <section
      className={`relative w-full py-20 ${currentTheme.background} ${currentTheme.text} transition-all duration-700`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14">
          {t("testimonials_title") ||
            (isRTL ? "آراء عملائنا" : "What Our Clients Say")}
        </h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider pb-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center px-2 sm:px-4"
              >
                <div
                  className={`w-full max-w-sm rounded-3xl border ${currentTheme.border} p-8 shadow-lg transition-all duration-500 hover:scale-[1.02]
                  ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100"
                      : theme === "sand"
                      ? "bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-800"
                      : "bg-gradient-to-br from-white to-blue-50 text-gray-700"
                  }`}
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="italic text-base sm:text-lg leading-relaxed">
                      “{isRTL ? item.text_ar : item.text_en}”
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold mt-2">
                      {item.name}
                    </h3>
                    <span className="text-sm opacity-75">{item.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 px-4">
            <button
              onClick={prev}
              className="p-2 sm:p-3 rounded-full shadow-md bg-white/70 dark:bg-gray-800/70 hover:bg-blue-100 dark:hover:bg-gray-700 transition-transform hover:scale-110"
            >
              <ChevronLeft
                className={`w-6 h-6 sm:w-7 sm:h-7 ${
                  isRTL ? "rotate-180" : ""
                } text-blue-600 dark:text-blue-400`}
              />
            </button>
            <button
              onClick={next}
              className="p-2 sm:p-3 rounded-full shadow-md bg-white/70 dark:bg-gray-800/70 hover:bg-blue-100 dark:hover:bg-gray-700 transition-transform hover:scale-110"
            >
              <ChevronRight
                className={`w-6 h-6 sm:w-7 sm:h-7 ${
                  isRTL ? "rotate-180" : ""
                } text-blue-600 dark:text-blue-400`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
