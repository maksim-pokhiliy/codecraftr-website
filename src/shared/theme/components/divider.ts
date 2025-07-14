"use client";

import { Components, Theme } from "@mui/material";

export const divider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: {
      borderBottomWidth: 2,
    },
  },
};
