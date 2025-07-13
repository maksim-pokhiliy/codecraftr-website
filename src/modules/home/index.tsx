"use client";

import { AdvantagesSection } from "./components/advantages-section";
import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { ServicesSection } from "./components/services-section";
import { StatisticsSection } from "./components/statistics-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ProcessSection />
      <AdvantagesSection />
      <ServicesSection />
    </>
  );
}
