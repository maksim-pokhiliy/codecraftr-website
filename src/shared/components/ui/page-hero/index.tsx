"use client";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";

import { FullscreenSection } from "@app/shared/components/ui/fullscreen-section";

interface PageHeroProps {
  overline?: string;
  title: string | ReactNode;
  animatedWords?: string[];
  highlightedText?: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHero({
  overline,
  title,
  animatedWords,
  highlightedText,
  description,
  actions,
}: PageHeroProps) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FullscreenSection>
      <Stack spacing={8}>
        <Stack spacing={2}>
          {overline && (
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
              }}
            >
              {overline}
            </Typography>
          )}

          <Typography variant={isMobile ? "h2" : "h1"} component="h1">
            {title}
            {animatedWords && (
              <>
                <Typography
                  component="span"
                  variant={isMobile ? "h2" : "h1"}
                  sx={{ color: "primary.main" }}
                >
                  {" "}
                  <TypeAnimation
                    sequence={animatedWords.flatMap((word) => [word, 2000])}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Typography>
              </>
            )}

            {highlightedText && (
              <>
                <Typography
                  component="span"
                  variant={isMobile ? "h2" : "h1"}
                  sx={{ color: "primary.main" }}
                >
                  {" "}
                  {highlightedText}
                </Typography>
              </>
            )}
          </Typography>

          {description && (
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: 800,
              }}
            >
              {description}
            </Typography>
          )}
        </Stack>

        {actions && actions}
      </Stack>
    </FullscreenSection>
  );
}
