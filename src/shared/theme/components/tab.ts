"use client";

import { Components, Theme } from "@mui/material";

export const tab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.h5,
      padding: theme.spacing(2, 4),
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
      width: "100%",
      transition: theme.transitions.create(["color", "background-color"], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeOut,
      }),

      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
};
