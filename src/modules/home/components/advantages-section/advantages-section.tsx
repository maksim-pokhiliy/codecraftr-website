"use client";

import Architecture from "@mui/icons-material/Architecture";
import Code from "@mui/icons-material/Code";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import TrendingUp from "@mui/icons-material/TrendingUp";
import { Card, Grid, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

const advantages: Advantage[] = [
  {
    id: "saas-experts",
    title: "SaaS Architecture Experts",
    description:
      "Deep understanding of multi-tenant systems, scalable databases, and subscription billing. We build SaaS platforms that grow with your business.",
    icon: Architecture,
  },
  {
    id: "mern-masters",
    title: "MERN Stack Masters",
    description:
      "7+ years of MERN expertise with modern patterns. React, Node.js, MongoDB, and Express - we know them inside out.",
    icon: Code,
  },
  {
    id: "startup-mindset",
    title: "Startup Mindset",
    description:
      "We understand time-to-market pressure and budget constraints. Fast delivery without compromising on quality.",
    icon: RocketLaunch,
  },
  {
    id: "business-first",
    title: "Business-First Approach",
    description:
      "Focus on business results, not just code. We build features that drive user engagement and revenue growth.",
    icon: TrendingUp,
  },
];

interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export function AdvantagesSection() {
  return (
    <Section title="Why choose" highlighted="Codecraftr?" variant="light">
      <Grid container spacing={4}>
        {advantages.map((advantage) => {
          const IconComponent = advantage.icon;

          return (
            <Grid key={advantage.id} size={{ xs: 12, md: 6 }} component={Card} variant="light">
              <Stack spacing={2}>
                <IconComponent
                  sx={{
                    fontSize: 48,
                    color: "primary.main",
                  }}
                />

                <Typography variant="h4" component="h3">
                  {advantage.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {advantage.description}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
