"use client";

import { PageHero } from "@app/shared/components/ui/page-hero";

import { ProcessSection } from "./components/process-section";
import { ServicesSection } from "./components/services-section";
import { SolutionsSection } from "./components/solutions-section";
import { TechStackSection } from "./components/tech-stack-section";

export function ServicesPage() {
  return (
    <>
      <PageHero
        overline="Our services"
        title="Professional SaaS development"
        animatedWords={["services.", "solutions.", "expertise.", "platforms."]}
        description="MERN stack expertise for startups and growing companies. From MVP to scale, we build platforms that drive business growth."
      />

      <ServicesSection />
      <ProcessSection />
      <SolutionsSection />
      <TechStackSection />
    </>
  );
}
