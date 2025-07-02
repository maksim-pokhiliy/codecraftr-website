"use client";

import { ThemeOptions } from "@mui/material";

export const spacing: ThemeOptions["spacing"] = 8;

export const shape: ThemeOptions["shape"] = {
  borderRadius: 8,
};

export const lineHeights = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 1.7,
} as const;
