"use client";

import { Button, Container, Stack, Typography } from "@mui/material";

import { gradients, lineHeights } from "../../../theme/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundColor?: "primary" | "secondary";
}

export function CTASection({
  title = "Ready to Build Your SaaS Platform?",
  subtitle = "Let's discuss your vision and create a platform that scales with your business from day one.",
  ctaText = "Schedule Discovery Call",
  ctaHref = "#",
  backgroundColor = "primary",
}: CTASectionProps) {
  return (
    <Stack
      component="section"
      sx={({ spacing }) => ({
        py: spacing(12),
        background: gradients.cta[backgroundColor],
        color: "common.white",
        textAlign: "center",
      })}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: 700 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={({ textShadows }) => ({
                fontWeight: 800,
                textShadow: textShadows[2],
                lineHeight: lineHeights.tight,
              })}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              sx={({ textShadows }) => ({
                opacity: 0.95,
                lineHeight: lineHeights.relaxed,
                textShadow: textShadows[1],
                fontWeight: 400,
              })}
            >
              {subtitle}
            </Typography>
          </Stack>

          <Button variant="cta" size="large" href={ctaHref}>
            {ctaText}
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}
