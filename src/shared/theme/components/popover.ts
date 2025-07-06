"use client";

import { Components, Theme } from "@mui/material";

export const popover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    root: {
      pointerEvents: "none",
    },
    paper: ({ theme }) => ({
      maxWidth: theme.spacing(42),
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    }),
  },
};
