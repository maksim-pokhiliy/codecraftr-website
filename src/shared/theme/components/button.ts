"use client";

import { Components, Theme } from "@mui/material";

export const button: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      fontWeight: 600,
      borderRadius: theme.spacing(1.5),
      ...theme.mixins.smoothTransition(["all"]),
    }),

    contained: ({ theme }) => ({
      boxShadow: theme.shadows[2],
      ...theme.mixins.hoverTransform.small,
      "&:hover": {
        ...theme.mixins.hoverTransform.small["&:hover"],
        boxShadow: theme.shadows[6],
      },
    }),

    outlined: ({ theme }) => ({
      borderWidth: theme.spacing(0.25),
      ...theme.mixins.hoverTransform.small,
      "&:hover": {
        ...theme.mixins.hoverTransform.small["&:hover"],
        borderWidth: theme.spacing(0.25),
      },
    }),

    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(2, 4),
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 600,
    }),
  },
};
