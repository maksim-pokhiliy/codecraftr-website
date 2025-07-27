"use client";

import { Components, Theme } from "@mui/material";

export const accordion: Components<Theme>["MuiAccordion"] = {
  defaultProps: {
    disableGutters: true,
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.black,
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(2, 4),
      borderRadius: "0 !important",

      transition: theme.transitions.create(["background-color", "color", "padding"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),

      "&::before": {
        height: 2,
        backgroundColor: theme.palette.grey[200],
      },

      "&.Mui-expanded": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
};
