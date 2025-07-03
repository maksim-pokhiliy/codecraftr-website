"use client";

import { Stack } from "@mui/material";

import { CTASection } from "../../shared/components/ui/cta-section";

import { ExpertiseSection } from "./components/expertise-section";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";

export function HomePage() {
  return (
    <Stack>
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />

      <CTASection
        title="Ready to Build Your SaaS Platform?"
        subtitle="From MVP to enterprise scale - let's create a platform that grows with your business."
        ctaText="Schedule Discovery Call"
        backgroundColor="primary"
      />
    </Stack>
  );
}
