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
      padding: theme.spacing(2),
      ...theme.typography.h4,

      transition: theme.transitions.create(["color", "padding", "font-size", "font-weight"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    }),

    expandIconWrapper: ({ theme }) => ({
      color: "inherit",

      transition: theme.transitions.create(["transform"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    }),
  },
};
