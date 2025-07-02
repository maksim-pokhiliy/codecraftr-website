"use client";

import { Theme } from "@mui/material";

const animationDurations = {
  float: 6000,
  floatReverse: 8000,
} as const;

export const createAnimations = (theme: Theme) => ({
  float: {
    "@keyframes float": {
      "0%, 100%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: `translateY(${theme.spacing(-2.5)})`,
      },
    },
    animation: `float ${animationDurations.float}ms ease-in-out infinite`,
  },

  floatReverse: {
    "@keyframes float": {
      "0%, 100%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: `translateY(${theme.spacing(-2.5)})`,
      },
    },
    animation: `float ${animationDurations.floatReverse}ms ease-in-out infinite reverse`,
  },
});
