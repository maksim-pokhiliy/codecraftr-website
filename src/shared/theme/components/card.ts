"use client";

import { Components, Theme } from "@mui/material";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    dashed: true;
    featured: true;
  }
}

export const card: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(2),
      padding: theme.spacing(3),
      ...theme.mixins.hoverTransform.medium,
      "&:hover": {
        ...theme.mixins.hoverTransform.medium["&:hover"],
        boxShadow: theme.shadows[8],
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
      },
    }),
  },

  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "solid",
        borderColor: theme.palette.grey[300],
        "&:hover": {
          borderColor: theme.palette.grey[400],
        },
      }),
    },
    {
      props: { variant: "dashed" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "dashed",
        borderColor: theme.palette.grey[300],
        "&:hover": {
          borderStyle: "solid",
          borderColor: theme.palette.grey[400],
        },
      }),
    },
    {
      props: { variant: "featured" },
      style: ({ theme }) => ({
        borderWidth: theme.spacing(0.25),
        borderStyle: "dashed",
        borderColor: theme.palette.primary.main,
        "&:hover": {
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        },
      }),
    },
  ],
};
