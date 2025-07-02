"use client";

import { Container, Stack, Theme } from "@mui/material";
import { ReactNode } from "react";

interface FullscreenSectionProps {
  children: ReactNode;
  variant?: "hero" | "feature" | "cta";
  backgroundColor?: "default" | "paper" | "primary";
  withGradient?: boolean;
}

export function FullscreenSection({
  children,
  variant = "hero",
  backgroundColor = "default",
  withGradient = false,
}: FullscreenSectionProps) {
  const getBackgroundStyle = () => {
    if (withGradient) {
      return (theme: Theme) =>
        `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[200]} 50%, ${theme.palette.primary.main}08 100%)`;
    }

    switch (backgroundColor) {
      case "paper":
        return "background.paper";
      case "primary":
        return "primary.main";
      default:
        return "background.default";
    }
  };

  const getPadding = () => {
    switch (variant) {
      case "hero":
        return { xs: 10, sm: 12, md: 15 };
      case "feature":
        return { xs: 8, sm: 10, md: 12 };
      case "cta":
        return { xs: 6, sm: 8, md: 10 };
      default:
        return { xs: 8, sm: 10, md: 12 };
    }
  };

  return (
    <Stack
      direction="row"
      component="section"
      sx={{
        minHeight: variant === "hero" ? "100vh" : "auto",
        py: getPadding(),
        background: withGradient ? getBackgroundStyle() : undefined,
        backgroundColor: !withGradient ? getBackgroundStyle() : undefined,
        alignItems: variant === "hero" ? "center" : "flex-start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%" }}>
        {children}
      </Container>
    </Stack>
  );
}
