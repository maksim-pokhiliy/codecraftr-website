"use client";

import { alpha, Components, Theme } from "@mui/material";

export const chip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    filledPrimary: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    }),
  },
};
