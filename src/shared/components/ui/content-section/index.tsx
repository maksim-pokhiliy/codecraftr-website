"use client";

import { Box, Container, Theme } from "@mui/material";
import { ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  backgroundColor?: "default" | "paper" | "primary";
  spacing?: "small" | "medium" | "large";
}

export function ContentSection({
  children,
  backgroundColor = "default",
  spacing = "medium",
}: ContentSectionProps) {
  const getPadding = () => {
    switch (spacing) {
      case "small":
        return { xs: 6, md: 8 };
      case "large":
        return { xs: 10, md: 15 };
      default:
        return { xs: 8, md: 12 };
    }
  };

  const getBackgroundStyle = () => {
    switch (backgroundColor) {
      case "paper":
        return (theme: Theme) =>
          `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`;
      case "primary":
        return "primary.main";
      default:
        return "background.default";
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: getPadding(),
        background: backgroundColor === "paper" ? getBackgroundStyle() : undefined,
        backgroundColor: backgroundColor !== "paper" ? getBackgroundStyle() : undefined,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
