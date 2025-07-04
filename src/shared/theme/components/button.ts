// src/shared/theme/components/button.ts
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

  variants: [
    {
      props: { variant: "cta" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: theme.typography.h6.fontSize,
        padding: theme.spacing(2.5, 5),
        borderRadius: theme.spacing(2),
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: theme.transitions.create(["transform", "box-shadow"], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: theme.palette.grey[50],
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
        },
        "&:active": {
          transform: "translateY(-2px)",
        },
      }),
    },
  ],
};
