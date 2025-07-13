"use client";

import { Components, Theme } from "@mui/material";

export const tabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    indicator: {
      height: 4,
    },
  },
};
