"use client";

import { Grid, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

interface Statistic {
  value: string;
  label: string;
}

const statistics: Statistic[] = [
  {
    value: "2019",
    label: "Year of foundation",
  },
  {
    value: "10+",
    label: "Industries covered",
  },
  {
    value: "20+",
    label: "Successfully delivered projects",
  },
  {
    value: "8-12",
    label: "Weeks average delivery time",
  },
];

export function StatisticsSection() {
  return (
    <Section title="Codecraftr by the" highlighted="numbers." variant="paper">
      <Grid container spacing={{ xs: 4, md: 0 }}>
        {statistics.map((stat, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 12 / statistics.length }}>
            <Stack>
              <Typography
                variant="h2"
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                }}
              >
                {stat.value}
              </Typography>

              <Typography variant="body1" component="span">
                {stat.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
