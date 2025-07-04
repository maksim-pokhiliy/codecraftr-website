"use client";

import { Stack } from "@mui/material";

import { CTASection } from "@app/shared/components/ui/cta-section";

import { HowToGetStartedSection } from "./components/how-to-get-started-section";
import { ServicePackagesSection } from "./components/service-packages-section";

export function ServicesPage() {
  return (
    <Stack>
      <ServicePackagesSection />
      <HowToGetStartedSection />

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your SaaS vision and create a development plan that fits your timeline and budget."
        ctaText="Schedule Discovery Call"
        backgroundColor="primary"
      />
    </Stack>
  );
}
