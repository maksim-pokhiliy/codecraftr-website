"use client";

import { Components, Theme } from "@mui/material";

export const button: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },

  styleOverrides: {
    containedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(2, 4),
      ...theme.typography.h6,

      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h5,
      },
    }),

    containedSuccess: ({ theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,

      transition: theme.transitions.create(["color", "background-color"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),

      "&:hover": {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.success.main,
      },
    }),
  },
};
