"use client";

import { Components, Theme } from "@mui/material";

export const card: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: theme.spacing(2),
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      borderRadius: 0,

      transition: theme.transitions.create(["background-color", "border-color"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),

      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(4),
      },

      ...(ownerState.variant === "outlined" && {
        border: `4px dashed ${theme.palette.divider}`,

        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      }),
    }),
  },
};
