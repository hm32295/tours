"use client";
import CallToAction from "@/components/CallToAction";
import Destinations from "@/components/Destinations";
import HeroSection from "@/components/HeroSection";
import PopularTours from "@/components/PopularTours";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      
      <HeroSection  />
      <Destinations />
      <Services />
      <TestimonialsSection />
      <PopularTours />

      <CallToAction />
      {/* <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <p className="text-lg">{t("services")}</p> */}
    </div>
  );
}
