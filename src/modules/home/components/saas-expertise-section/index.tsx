"use client";

import { Grid } from "@mui/material";

import { FeatureCard } from "@app/shared/components/ui/feature-card";
import { Section } from "@app/shared/components/ui/section";

import { features } from "./data";

export function SaasExpertiseSection() {
  return (
    <Section
      title="We understand {SaaS} challenges{.}"
      subtitle="Because we've built platforms that scale from MVP to thousands of users"
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {features.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
