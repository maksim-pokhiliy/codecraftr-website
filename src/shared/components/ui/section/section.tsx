"use client";

import { Container, ContainerProps, Stack, StackProps, Typography } from "@mui/material";
import { ReactNode } from "react";

import { SectionVariant } from "./types";

const getBackgroundColor = (variant: SectionVariant) => {
  switch (variant) {
    case "light":
      return "grey.100";
    case "primary":
      return "primary.main";
    case "dark":
    default:
      return "background.default";
  }
};

const getTextColor = (variant: SectionVariant) => {
  switch (variant) {
    case "light":
      return "background.default";
    case "primary":
      return "primary.contrastText";
    case "dark":
    default:
      return "text.primary";
  }
};

interface SectionProps extends Omit<StackProps, "children" | "maxWidth"> {
  children: ReactNode;
  title?: string;
  highlighted?: string;
  variant?: SectionVariant;
  maxWidth?: ContainerProps["maxWidth"];
}

export function Section({
  children,
  title,
  highlighted,
  variant = "dark",
  maxWidth = "xl",
  ...stackProps
}: SectionProps) {
  return (
    <Stack
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: getBackgroundColor(variant),
        color: getTextColor(variant),
      }}
      {...stackProps}
    >
      <Container maxWidth={maxWidth}>
        <Stack spacing={6}>
          {title && (
            <Typography variant="h1">
              {title}
              {highlighted && (
                <Typography
                  component="span"
                  variant="h1"
                  color={variant === "primary" ? "primary.contrastText" : "primary.main"}
                >
                  {" "}
                  {highlighted}
                </Typography>
              )}
            </Typography>
          )}

          {children}
        </Stack>
      </Container>
    </Stack>
  );
}
