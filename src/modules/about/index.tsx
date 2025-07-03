"use client";

import { Stack } from "@mui/material";

import { CTASection } from "@app/shared/components/ui/cta-section";

import { FounderStorySection } from "./components/founder-story-section";
import { SaaSBusinessSection } from "./components/saas-business-section";

export function AboutPage() {
  return (
    <Stack>
      <FounderStorySection />
      <SaaSBusinessSection />

      <CTASection
        title="Ready to Partner with Us?"
        subtitle="Join the founders who've built successful SaaS platforms with our expertise. Let's discuss how we can help you achieve your vision."
        ctaText="Start the Conversation"
        backgroundColor="primary"
      />
    </Stack>
  );
}
