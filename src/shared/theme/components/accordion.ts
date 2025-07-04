"use client";

import { alpha, Components, Theme } from "@mui/material";

export const accordion: Components<Theme>["MuiAccordion"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(2),
      border: `2px dashed ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.background.default,
      overflow: "hidden",
      boxShadow: "none",
      marginBottom: theme.spacing(3),
      transition: theme.transitions.create(["border-color", "box-shadow", "background-color"], {
        duration: theme.transitions.duration.standard,
      }),
      "&:hover": {
        borderColor: alpha(theme.palette.secondary.main, 0.3),
      },
      "&.Mui-expanded": {
        margin: `0 0 ${theme.spacing(3)} 0`,
        borderColor: theme.palette.secondary.main,
        backgroundColor: alpha(theme.palette.secondary.main, 0.02),
      },
      "&:first-of-type, &:last-of-type": {
        borderRadius: theme.spacing(2),
      },
    }),
  },
};
