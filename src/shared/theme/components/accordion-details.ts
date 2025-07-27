"use client";

import { Components, Theme } from "@mui/material";

export const accordionDetails: Components<Theme>["MuiAccordionDetails"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      transition: theme.transitions.create(["color", "padding"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),

      ...theme.typography.h6,
    }),
  },
};
