"use client";

import { Components, Theme } from "@mui/material";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    dark: true;
    light: true;
  }
}

export const card: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: "none",
      padding: theme.spacing(4),
    }),
  },
  variants: [
    {
      props: { variant: "dark" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }),
    },
    {
      props: { variant: "light" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.background.default,
      }),
    },
  ],
};
