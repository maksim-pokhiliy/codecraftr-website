"use client";

import { alpha, Box, Grid, Stack, Typography } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { lineHeights } from "@app/shared/theme/common";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

const paragraphs = [
  "After years of enterprise development, I discovered my passion for the startup world. The challenge of building scalable SaaS platforms from scratch, the pressure of time-to-market, and the need for technical excellence from day one - this is where I thrive.",
  "Through projects like GetPin, Torc, and 2Smart Cloud, I've learned that successful SaaS development isn't just about writing code - it's about understanding business models, scalability challenges, and the unique pressures of growing startups.",
  "Today, Codecraftr combines enterprise-grade technical expertise with startup speed and flexibility. We're not just developers - we're technical partners who understand your business challenges.",
];

const stats = [
  {
    stat: "5+",
    title: "Years MERN Stack",
    subtitle: "Deep expertise in React, Node.js, MongoDB, Express",
  },
  {
    stat: "15+",
    title: "SaaS Platforms",
    subtitle: "From MVP to enterprise-scale applications",
  },
  {
    stat: "100%",
    title: "Client Satisfaction",
    subtitle: "Every project delivered on time and budget",
  },
];

export function FounderStorySection() {
  return (
    <ContentSection backgroundColor="default" spacing="large">
      <SectionHeader
        highlightedText="Founder"
        title="Story"
        subtitle="From enterprise development to startup-focused SaaS architecture"
        gradientVariant={GradientVariant.PRIMARY}
      />

      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "text.primary",
              }}
            >
              Building SaaS platforms that actually scale
            </Typography>

            <Stack spacing={3}>
              {paragraphs.map((text) => (
                <Typography
                  key={text}
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: lineHeights.loose,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={({ palette }) => ({
              p: 4,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${alpha(palette.primary.main, 0.08)} 0%, ${alpha(palette.warning.main, 0.05)} 100%)`,
              border: `1px solid ${alpha(palette.primary.main, 0.15)}`,
            })}
          >
            {stats.map((stat) => (
              <Stack key={stat.stat} spacing={1}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: "primary.main",
                  }}
                >
                  {stat.stat}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {stat.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {stat.subtitle}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.LARGE}
        position={{ top: "20%", right: "5%" }}
        color={ColorVariant.PRIMARY}
        rotation={15}
      />
    </ContentSection>
  );
}
