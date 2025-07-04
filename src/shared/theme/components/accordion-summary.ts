"use client";

import { alpha, Components, Theme } from "@mui/material";

export const accordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(4),
      minHeight: "auto",
      "&.Mui-expanded": {
        minHeight: "auto",
        borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.15)}`,
      },
    }),
    content: {
      margin: 0,
      "&.Mui-expanded": {
        margin: 0,
      },
    },
    expandIconWrapper: ({ theme }) => ({
      color: theme.palette.secondary.main,
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    }),
  },
};
