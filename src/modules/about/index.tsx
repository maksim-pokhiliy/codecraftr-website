"use client";

import { Stack } from "@mui/material";

import { FounderStorySection } from "./components/founder-story-section";
import { SaaSBusinessSection } from "./components/saas-business-section";

export function AboutPage() {
  return (
    <Stack>
      <FounderStorySection />
      <SaaSBusinessSection />
    </Stack>
  );
}
