"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { GradientText } from "@app/shared/components/ui/gradient-text";
import { lineHeights } from "@app/shared/theme/common";
import { gradients } from "@app/shared/theme/gradients";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  variant?: "primary" | "secondary";
  backgroundColor?: "default" | "paper" | "primary";
}

export function CTASection({
  title = "Ready to Build Your SaaS Platform?",
  subtitle = "Let's discuss your vision and create a platform that scales with your business from day one.",
  ctaText = "Schedule Discovery Call",
  variant = "primary",
  backgroundColor = "default",
}: CTASectionProps) {
  const theme = useTheme();

  const isPrimaryBackground = backgroundColor === "primary";

  const getBackground = () => {
    if (isPrimaryBackground) {
      return theme.palette.background.paper;
    }

    return variant === "primary"
      ? gradients.background.primary(theme, 135)
      : gradients.background.secondary(theme, 135);
  };

  const getShapeColor = (isFirst: boolean) => {
    if (isPrimaryBackground) {
      return isFirst ? ColorVariant.PRIMARY : ColorVariant.SECONDARY;
    }

    if (variant === "primary") {
      return isFirst ? ColorVariant.SECONDARY : ColorVariant.PRIMARY;
    }

    return isFirst ? ColorVariant.PRIMARY : ColorVariant.SECONDARY;
  };

  const shouldUseGradientText = variant === "primary" && !isPrimaryBackground;

  return (
    <ContentSection backgroundColor={backgroundColor} spacing="large">
      <Box
        sx={({ spacing }) => ({
          textAlign: "center",
          position: "relative",
          py: spacing(8),
          px: spacing(3),
          borderRadius: spacing(3),
          background: getBackground(),
          overflow: "hidden",
        })}
      >
        <Typography
          variant="h3"
          sx={({ spacing }) => ({
            fontWeight: 800,
            mb: spacing(3),
            lineHeight: lineHeights.snug,
            color: isPrimaryBackground ? "text.primary" : "inherit",
          })}
        >
          {shouldUseGradientText ? (
            <GradientText variant={GradientVariant.PRIMARY}>{title}</GradientText>
          ) : (
            title
          )}
        </Typography>

        <Typography
          variant="h6"
          sx={({ spacing }) => ({
            maxWidth: 700,
            mx: "auto",
            lineHeight: lineHeights.relaxed,
            fontWeight: 400,
            mb: spacing(5),
            color: isPrimaryBackground ? "text.secondary" : "text.secondary",
          })}
        >
          {subtitle}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            fontWeight: 700,
            px: 6,
            py: 2,
            fontSize: theme.typography.h6.fontSize,
            boxShadow: theme.shadows[8],
            ...(isPrimaryBackground && {
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }),
            "&:hover": {
              boxShadow: theme.shadows[12],
            },
          }}
        >
          {ctaText}
        </Button>

        <FloatingShape
          variant={ShapeVariant.CIRCLE}
          size={Size.SMALL}
          position={{ top: "10%", right: "15%" }}
          color={getShapeColor(true)}
          rotation={30}
        />

        <FloatingShape
          variant={ShapeVariant.BLOB}
          size={Size.MEDIUM}
          position={{ bottom: "15%", left: "10%" }}
          color={getShapeColor(false)}
          reverse
        />
      </Box>
    </ContentSection>
  );
}
