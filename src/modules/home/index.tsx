"use client";

import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { StatisticsSection } from "./components/statistics-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ProcessSection />
    </>
  );
}
