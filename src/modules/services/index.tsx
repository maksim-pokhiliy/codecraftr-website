"use client";

import { PageHero } from "@app/shared/components/ui/page-hero";

import { ServicesSection } from "./components/services-section";

// import { IndustriesSection } from "./components/industries-section";
// import { ServicesSection } from "./components/services-section";
// import { SolutionsSection } from "./components/solutions-section";
// import { TechStackSection } from "./components/tech-stack-section";

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

      {/* <SolutionsSection />
      <IndustriesSection />
      <TechStackSection />
      <CtaSection
        title="Ready to discuss your"
        highlighted="project?"
        description="Let's talk about your SaaS idea and create a roadmap for success"
      /> */}
    </>
  );
}
