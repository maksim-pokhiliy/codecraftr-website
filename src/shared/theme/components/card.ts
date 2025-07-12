"use client";

import { Components, Theme } from "@mui/material";

export const card: Components<Theme>["MuiPaper"] = {
  styleOverrides: { root: { boxShadow: "none" } },
};
