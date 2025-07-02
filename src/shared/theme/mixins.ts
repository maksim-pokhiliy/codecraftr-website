"use client";

import { Theme } from "@mui/material";

export const createMixins = (theme: Theme) => ({
  hoverTransform: {
    small: {
      transition: theme.transitions.create(["transform", "box-shadow"], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
      }),
      "&:hover": {
        transform: `translateY(${theme.spacing(-0.125)})`,
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },

    medium: {
      transition: theme.transitions.create(["transform", "box-shadow"], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
      }),
      "&:hover": {
        transform: `translateY(${theme.spacing(-0.5)})`,
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },
  },

  smoothTransition: (properties: string[]) => ({
    transition: theme.transitions.create(properties, {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  }),
});
