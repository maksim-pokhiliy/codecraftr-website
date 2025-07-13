"use client";

import { CtaSection } from "@app/shared/components/ui/cta-section";

import { AdvantagesSection } from "./components/advantages-section";
import { FaqSection } from "./components/faq-section";
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
      <FaqSection />
      <CtaSection />
    </>
  );
}
