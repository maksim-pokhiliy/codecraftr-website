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

export const textShadows = [
  "none",
  "0 1px 2px rgba(0,0,0,0.2)",
  "0 2px 4px rgba(0,0,0,0.3)",
  "0 4px 8px rgba(0,0,0,0.4)",
];
