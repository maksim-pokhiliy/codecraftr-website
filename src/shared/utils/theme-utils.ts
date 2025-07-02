"use client";

import { Theme } from "@mui/material";

import { Size } from "@app/shared/types";

export const getResponsiveSize = (size: Size, theme: Theme) => {
  const sizes = {
    [Size.SMALL]: { xs: theme.spacing(6), md: theme.spacing(10) },
    [Size.MEDIUM]: { xs: theme.spacing(12), md: theme.spacing(16) },
    [Size.LARGE]: { xs: theme.spacing(20), md: theme.spacing(25) },
  };

  return sizes[size];
};
