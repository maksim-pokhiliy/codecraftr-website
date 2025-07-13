"use client";

import { CalendarMonth } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

interface CtaSectionProps {
  title?: string;
  highlighted?: string;
  description?: string;
  buttonText?: string;
  calendlyUrl?: string;
}

export function CtaSection({
  title = "Ready to build your",
  highlighted = "SaaS platform?",
  description = "Let's discuss your project in a 30-minute discovery call",
  buttonText = "Schedule Discovery Call",
}: CtaSectionProps) {
  const handleClick = () => {
    // Calendly integration coming soon...
  };

  return (
    <Section title={title} highlighted={highlighted} variant="primary" textAlign="center">
      <Stack sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography variant="h5">{description}</Typography>

        <Button
          variant="contained"
          size="large"
          color="success"
          startIcon={<CalendarMonth />}
          onClick={handleClick}
          sx={{ mt: 8 }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Section>
  );
}
