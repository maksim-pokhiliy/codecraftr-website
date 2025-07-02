"use client";

import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { gradients } from "@app/shared/theme/gradients";
import { GradientVariant } from "@app/shared/types";

interface GradientTextProps {
  children: ReactNode;
  variant?: GradientVariant;
  component?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function GradientText({
  children,
  variant = GradientVariant.PRIMARY,
  component = "span",
}: GradientTextProps) {
  const theme = useTheme();

  return (
    <Box
      component={component}
      sx={{
        background: gradients.text[variant](theme),
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline",
      }}
    >
      {children}
    </Box>
  );
}
