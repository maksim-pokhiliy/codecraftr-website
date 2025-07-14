"use client";

import { Components, Theme } from "@mui/material";

export const tab: Components<Theme>["MuiTab"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.h5,
      padding: theme.spacing(2, 4),
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
      transition: theme.transitions.create(["color", "background-color"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeOut,
      }),

      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
};
