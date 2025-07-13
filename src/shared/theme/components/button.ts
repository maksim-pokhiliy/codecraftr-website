"use client";

import { Components, Theme } from "@mui/material";

export const button: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    containedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(2, 6),
      ...theme.typography.h6,
    }),
  },
};
