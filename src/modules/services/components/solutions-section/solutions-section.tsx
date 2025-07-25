"use client";

import { Card, Grid, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

const solutions = [
  {
    id: 1,
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS applications with subscription billing, user management, and scalable architecture for B2B businesses.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Travel Booking Systems",
    description:
      "Real-time availability, payment processing, and booking workflows for travel agencies and hospitality businesses.",
    icon: "✈️",
  },
  {
    id: 3,
    title: "Business Automation Tools",
    description:
      "Workflow automation platforms, team collaboration tools, and productivity enhancement systems for enterprises.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "IoT Management Platforms",
    description:
      "Device management systems, real-time monitoring dashboards, and cloud-to-device communication platforms.",
    icon: "📡",
  },
  {
    id: 5,
    title: "Marketplace Platforms",
    description:
      "Multi-vendor marketplaces with payment processing, vendor management, and comprehensive transaction systems.",
    icon: "🏪",
  },
  {
    id: 6,
    title: "Analytics Dashboards",
    description:
      "Real-time data visualization, business intelligence reporting, and decision-making support systems.",
    icon: "📊",
  },
];

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SolutionCardProps {
  solution: Solution;
}

function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Card variant="dark">
      <Stack spacing={2}>
        <Typography variant="h2">{solution.icon}</Typography>

        <Typography variant="h4">{solution.title}</Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          {solution.description}
        </Typography>
      </Stack>
    </Card>
  );
}

export function SolutionsSection() {
  return (
    <Section title="Solutions we" highlighted="build." variant="light">
      <Grid container spacing={4}>
        {solutions.map((solution) => (
          <Grid key={solution.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: "flex" }}>
            <SolutionCard solution={solution} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
