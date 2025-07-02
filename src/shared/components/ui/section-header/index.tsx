"use client";

import { Box, Typography } from "@mui/material";

import { GradientText } from "@app/shared/components/ui/gradient-text";
import { GradientVariant } from "@app/shared/types";

interface SectionHeaderProps {
  title: string;
  highlightedText?: string;
  subtitle: string;
  gradientVariant?: GradientVariant;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  highlightedText,
  subtitle,
  gradientVariant = GradientVariant.PRIMARY,
  align = "center",
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 6, md: 8 },
      }}
    >
      <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
        {highlightedText ? (
          <>
            <GradientText variant={gradientVariant}>{highlightedText}</GradientText> {title}
          </>
        ) : (
          title
        )}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontWeight: 400,
          mx: align === "center" ? "auto" : 0,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
