"use client";

import { HeroSection } from "./components/hero-section";
import { OurApproachSection } from "./components/our-approach-section";
import { ProjectsSection } from "./components/projects-section";
import { SaasExpertiseSection } from "./components/saas-expertise-section";
import { StatisticsSection } from "./components/statistics-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <SaasExpertiseSection />
      <OurApproachSection />
      <ProjectsSection />
    </>
  );
}
