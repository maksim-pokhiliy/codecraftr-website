"use client";

import { Button, ButtonProps, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

import { FullscreenSection } from "@app/shared/components/ui/fullscreen-section";

interface ButtonConfig {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
}

interface PageHeroProps {
  overline?: string;
  title: string | ReactNode;
  highlightedText?: string;
  description?: string;
  actions?: ReactNode;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

export function PageHero({
  overline,
  title,
  highlightedText,
  description,
  actions,
  primaryButton,
  secondaryButton,
}: PageHeroProps) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const renderButton = (config: ButtonConfig, isPrimary = true) => {
    const buttonProps = {
      variant: config.variant ?? (isPrimary ? "contained" : "contained"),
      color: config.color ?? (isPrimary ? "success" : "primary"),
      size: "large" as const,
      fullWidth: isMobile,
      onClick: config.onClick,
    };

    const buttonContent = config.text;

    if (config.href) {
      return (
        <Button component={Link} href={config.href} {...buttonProps}>
          {buttonContent}
        </Button>
      );
    }

    return <Button {...buttonProps}>{buttonContent}</Button>;
  };

  const renderActions = () => {
    if (actions) {
      return actions;
    }

    if (primaryButton ?? secondaryButton) {
      return (
        <Stack direction={{ lg: "row" }} spacing={{ xs: 2, sm: 4 }}>
          {primaryButton && renderButton(primaryButton, true)}
          {secondaryButton && renderButton(secondaryButton, false)}
        </Stack>
      );
    }

    return null;
  };

  return (
    <FullscreenSection>
      <Stack spacing={8}>
        <Stack spacing={2} sx={{ maxWidth: { xs: "unset", sm: "80%" } }}>
          {overline && (
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {overline}
            </Typography>
          )}

          <Typography variant={isMobile ? "h2" : "h1"} component="h1">
            {title}

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
              variant="h6"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                maxWidth: { xs: "unset", sm: "80%" },
              }}
            >
              {description}
            </Typography>
          )}
        </Stack>

        {renderActions()}
      </Stack>
    </FullscreenSection>
  );
}
