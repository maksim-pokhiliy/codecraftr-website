"use client";

import { Stack } from "@mui/material";

import { ExpertiseSection } from "./components/expertise-section";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";

export function HomePage() {
  return (
    <Stack>
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
    </Stack>
  );
}
