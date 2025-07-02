"use client";

import { ThemeOptions } from "@mui/material";

export const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#ff6b35",
    dark: "#e55a2b",
    light: "#ff8a65",
    contrastText: "#ffffff",
  },

  secondary: {
    main: "#004e89",
    dark: "#003d6b",
    light: "#1976d2",
    contrastText: "#ffffff",
  },

  text: {
    primary: "#0f172a",
    secondary: "#475569",
    disabled: "#94a3b8",
  },

  background: {
    default: "#ffffff",
    paper: "#f8fafc",
  },

  success: {
    main: "#10b981",
  },

  warning: {
    main: "#ffa726",
  },

  error: {
    main: "#ef4444",
  },

  info: {
    main: "#06b6d4",
  },

  grey: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },

  divider: "#e2e8f0",

  action: {
    hover: "rgba(0, 0, 0, 0.04)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    focus: "rgba(0, 0, 0, 0.12)",
  },
};
