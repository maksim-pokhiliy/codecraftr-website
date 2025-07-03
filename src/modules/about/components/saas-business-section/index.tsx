"use client";

import { Grid } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { saasBusinessChallenges } from "../../data/saas-business";

import { BusinessChallengeCard } from "./business-challenge-card";

export function SaaSBusinessSection() {
  return (
    <ContentSection backgroundColor="paper">
      <SectionHeader
        highlightedText="SaaS Business"
        title="Understanding"
        subtitle="Beyond code - we understand SaaS economics, growth metrics, and the real challenges founders face every day"
        gradientVariant={GradientVariant.PRIMARY}
      />

      <Grid container spacing={4}>
        {saasBusinessChallenges.map((challenge, index) => (
          <Grid size={{ xs: 12, lg: 6 }} key={index}>
            <BusinessChallengeCard challenge={challenge} />
          </Grid>
        ))}
      </Grid>

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.LARGE}
        position={{ top: "10%", right: "5%" }}
        color={ColorVariant.PRIMARY}
        rotation={15}
      />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.MEDIUM}
        position={{ bottom: "15%", left: "8%" }}
        color={ColorVariant.SECONDARY}
        reverse
      />
    </ContentSection>
  );
}
