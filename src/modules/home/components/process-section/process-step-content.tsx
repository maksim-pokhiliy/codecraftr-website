"use client";

import { Chip, Stack, Typography } from "@mui/material";

interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

interface ProcessStepContentProps {
  step: ProcessStep;
}

export function ProcessStepContent({ step }: ProcessStepContentProps) {
  return (
    <Stack spacing={3}>
      <Stack>
        <Typography variant="h2" component="h2">
          {step.title}
        </Typography>

        <Typography
          variant="overline"
          sx={{
            color: "primary",
          }}
        >
          {step.duration}
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
        }}
      >
        {step.description}
      </Typography>

      <Stack
        direction="row"
        gap={{ xs: 1, sm: 2 }}
        sx={{
          flexWrap: "wrap",
        }}
      >
        {step.deliverables.map((deliverable) => (
          <Chip key={deliverable} label={deliverable} variant="outlined" size="medium" />
        ))}
      </Stack>
    </Stack>
  );
}
