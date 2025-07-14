"use client";

import { Components, Theme } from "@mui/material";

export const accordion: Components<Theme>["MuiAccordion"] = {
  styleOverrides: {
    root: {
      "&::before": {
        display: "none",
      },

      "&.Mui-expanded": {
        margin: 0,
      },
    },
  },
  variants: [
    {
      props: { variant: "light" },
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};
