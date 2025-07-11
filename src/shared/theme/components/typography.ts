"use client";

import { Components, Theme } from "@mui/material";

export const typography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) => ({
      fontSize: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(8),
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(10),
      },
    }),

    h2: ({ theme }) => ({
      fontSize: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(5),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(6),
      },
    }),

    h3: ({ theme }) => ({
      fontSize: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(3.5),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(4),
      },
    }),

    h4: ({ theme }) => ({
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(3),
      },
    }),

    h5: ({ theme }) => ({
      fontSize: theme.spacing(2.25),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2.5),
      },
    }),

    h6: ({ theme }) => ({
      fontSize: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2.25),
      },
    }),

    subtitle1: ({ theme }) => ({
      fontSize: theme.spacing(2),
    }),

    subtitle2: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
    }),

    body1: ({ theme }) => ({
      fontSize: theme.spacing(2),
    }),

    body2: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
    }),

    button: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
    }),

    caption: ({ theme }) => ({
      fontSize: theme.spacing(1.5),
    }),

    overline: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
    }),
  },
};
