"use client";

import { alpha, Components, Theme } from "@mui/material";

export const accordionDetails: Components<Theme>["MuiAccordionDetails"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(4),
      paddingTop: theme.spacing(2),
      backgroundColor: alpha(theme.palette.secondary.main, 0.01),
    }),
  },
};
