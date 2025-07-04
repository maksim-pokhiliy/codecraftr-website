"use client";

import { Components, Theme } from "@mui/material";

export const alertTitle: Components<Theme>["MuiAlertTitle"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 700,
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.subtitle1.fontSize,
    }),
  },
};
