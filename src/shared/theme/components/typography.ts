"use client";

import { Components, Theme } from "@mui/material";

export const typography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) => ({
      fontSize: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(9),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(11),
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(13),
      },
    }),

    h2: ({ theme }) => ({
      fontSize: theme.spacing(5),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(7),
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(8),
      },
    }),

    h3: ({ theme }) => ({
      fontSize: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(4.5),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(6),
      },
    }),

    h4: ({ theme }) => ({
      fontSize: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(3.5),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(4),
      },
    }),

    h5: ({ theme }) => ({
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(3),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(3.5),
      },
    }),

    h6: ({ theme }) => ({
      fontSize: theme.spacing(2.25),
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(2.5),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(3),
      },
    }),

    subtitle1: ({ theme }) => ({
      fontSize: theme.spacing(2.25),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2.5),
      },
    }),

    subtitle2: ({ theme }) => ({
      fontSize: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2.25),
      },
    }),

    body1: ({ theme }) => ({
      fontSize: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2.25),
      },
    }),

    body2: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2),
      },
    }),

    button: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2),
      },
    }),

    caption: ({ theme }) => ({
      fontSize: theme.spacing(1.5),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(1.75),
      },
    }),

    overline: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2),
      },
    }),
  },
};
