"use client";

import { Container, Grid, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { parseHighlightedText } from "../../utils/parse-highlighted-text";

interface SectionProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  direction?: "row" | "column";
  children?: ReactNode;
}

export function Section({
  title,
  subtitle,
  variant = "dark",
  direction = "row",
  children,
}: SectionProps) {
  const theme = useTheme();

  const backgroundColor =
    variant === "dark" ? theme.palette.background.default : theme.palette.grey[50];

  const textColor = variant === "dark" ? theme.palette.text.primary : theme.palette.common.black;

  return (
    <Container maxWidth={false} sx={{ p: { xs: 3, sm: 8 }, backgroundColor }}>
      <Grid spacing={4} container>
        {(title ?? subtitle) && (
          <Grid
            size={{ xs: 12, xl: direction === "row" ? 4 : 12 }}
            spacing={2}
            direction="column"
            sx={(theme) => ({
              alignSelf: "flex-start",

              [theme.breakpoints.up("xl")]: {
                top: theme.spacing(4),
                position: direction === "row" ? "sticky" : "static",
              },
            })}
            container
          >
            {title && (
              <Typography
                variant={direction === "row" ? "h2" : "h1"}
                component="h2"
                sx={{ color: textColor }}
              >
                {parseHighlightedText(title, theme)}
              </Typography>
            )}

            {subtitle && (
              <Typography variant="body1" sx={{ color: textColor }}>
                {parseHighlightedText(subtitle, theme)}
              </Typography>
            )}
          </Grid>
        )}

        <Grid size={{ xs: 12, xl: direction === "row" ? 8 : 12 }}>{children}</Grid>
      </Grid>
    </Container>
  );
}
