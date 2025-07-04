"use client";

import { alpha, Theme } from "@mui/material";

import { ColorVariant, GradientVariant } from "@app/shared/types";

export const gradients = {
  text: {
    [GradientVariant.PRIMARY]: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%)`,
    [GradientVariant.SECONDARY]: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
    [GradientVariant.WARNING]: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.primary.main} 100%)`,
  },

  background: {
    [ColorVariant.PRIMARY]: (theme: Theme, rotation = 45) =>
      `linear-gradient(${rotation}deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.primary.light, 0.08)} 100%)`,
    [ColorVariant.SECONDARY]: (theme: Theme, rotation = 45) =>
      `linear-gradient(${rotation}deg, ${alpha(theme.palette.secondary.main, 0.15)} 0%, ${alpha(theme.palette.secondary.light, 0.08)} 100%)`,
  },

  cta: {
    primary: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    secondary: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
};
