"use client";

import { Box, Button, Grid, Typography } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { lineHeights } from "@app/shared/theme/common";
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

      <Box sx={({ spacing }) => ({ textAlign: "center", mt: spacing(8) })}>
        <Typography
          variant="h5"
          sx={({ spacing }) => ({
            fontWeight: 600,
            mb: spacing(2),
          })}
        >
          Ready to Build Your SaaS Platform?
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={({ spacing }) => ({
            maxWidth: 600,
            mx: "auto",
            lineHeight: lineHeights.relaxed,
            mb: spacing(4),
          })}
        >
          Let&apos;s discuss your SaaS vision and how we can help you build a platform that scales
          with your business from day one.
        </Typography>

        <Button variant="contained" size="large" sx={{ fontWeight: 600 }}>
          Schedule Discovery Call
        </Button>
      </Box>

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
