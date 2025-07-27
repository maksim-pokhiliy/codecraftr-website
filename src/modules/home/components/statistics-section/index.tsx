"use client";

import { Grid, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

import { statistics } from "./data";

export function StatisticsSection() {
  return (
    <Section title="Codecraftr by the {numbers.}" variant="light" direction="column">
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

              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
