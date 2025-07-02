"use client";

import { Link, Typography } from "@mui/material";

import { GradientText } from "@app/shared/components/ui/gradient-text";
import { ROUTES } from "@app/shared/constants/routes";
import { ComponentSize, GradientVariant, LogoVariant } from "@app/shared/types";

interface LogoProps {
  variant?: LogoVariant;
  size?: ComponentSize;
  href?: string;
}

export function Logo({
  variant = LogoVariant.LIGHT,
  size = ComponentSize.MEDIUM,
  href = ROUTES.HOME,
}: LogoProps) {
  const getFontSize = () => {
    switch (size) {
      case ComponentSize.SMALL:
        return "h6";
      case ComponentSize.LARGE:
        return "h3";
      default:
        return "h5";
    }
  };

  const getTextColor = () => {
    return variant === LogoVariant.LIGHT ? "text.primary" : "grey.100";
  };

  return (
    <Link
      href={href}
      sx={{
        textDecoration: "none",
        display: "inline-block",
        "&:hover": {
          opacity: 0.8,
        },
      }}
    >
      <Typography
        variant={getFontSize()}
        sx={{
          fontWeight: 800,
          color: getTextColor(),
        }}
      >
        <GradientText variant={GradientVariant.PRIMARY}>Code</GradientText>craftr
      </Typography>
    </Link>
  );
}
