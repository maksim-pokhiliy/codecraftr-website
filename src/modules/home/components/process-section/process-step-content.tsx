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

        <Typography variant="overline" color="primary">
          {step.duration}
        </Typography>
      </Stack>

      <Typography variant="body1" color="text.secondary">
        {step.description}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
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
