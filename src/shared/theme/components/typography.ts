"use client";

import { Components, Theme } from "@mui/material";

export const typography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) => ({
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h2.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h3.fontSize,
      },
    }),

    h2: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.h2.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h3.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h4.fontSize,
      },
    }),

    h3: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.h3.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h4.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h5.fontSize,
      },
    }),

    h4: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.h4.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h5.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h6.fontSize,
      },
    }),

    h5: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.h5.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h6.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.subtitle1.fontSize,
      },
    }),

    h6: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.h6.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.subtitle1.fontSize,
      },
    }),

    subtitle1: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.subtitle1.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.subtitle2.fontSize,
      },
    }),

    subtitle2: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.subtitle2.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body1.fontSize,
      },
    }),

    body1: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        fontSize: `calc(${theme.typography.body1.fontSize} * 1.2)`,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body2.fontSize,
      },
    }),
  },
};
