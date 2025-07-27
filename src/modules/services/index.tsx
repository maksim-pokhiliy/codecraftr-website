"use client";

import { CtaSection } from "../../shared/components/ui/cta-section";

import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { ServicesSection } from "./components/services-section";
import { SolutionsSection } from "./components/solutions-section";
import { TechStackSection } from "./components/tech-stack-section";

export function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SolutionsSection />
      <TechStackSection />
      <CtaSection />
    </>
  );
}
