"use client";

import ArrowForward from "@mui/icons-material/ArrowForward";
import { Components, Theme } from "@mui/material";
import { createElement } from "react";

export const accordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  defaultProps: {
    expandIcon: createElement(ArrowForward, {
      fontSize: "large",
    }),
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,

      transition: theme.transitions.create("color", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),

      "&:hover": {
        color: theme.palette.primary.main,
      },

      "&.Mui-expanded": {
        color: theme.palette.primary.main,
      },
    }),
    expandIconWrapper: {
      color: "inherit",
    },
  },
};
