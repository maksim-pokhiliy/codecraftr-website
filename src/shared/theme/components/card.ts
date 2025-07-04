// src/shared/theme/components/card.ts
"use client";

import { alpha, Components, Theme } from "@mui/material";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    dashed: true;
    featured: true;
    info: true;
  }
}

export const card: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(2),
      padding: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
      },
    }),
  },

  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "solid",
        borderColor: theme.palette.grey[300],
      }),
    },
    {
      props: { variant: "dashed" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "dashed",
        borderColor: theme.palette.grey[300],
      }),
    },
    {
      props: { variant: "featured" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "dashed",
        borderColor: theme.palette.primary.main,
      }),
    },
    {
      props: { variant: "info" },
      style: ({ theme }) => ({
        background: alpha(theme.palette.secondary.main, 0.15),
        borderWidth: theme.spacing(0.25),
        borderStyle: "dashed",
        borderColor: theme.palette.secondary.main,
      }),
    },
  ],
};
