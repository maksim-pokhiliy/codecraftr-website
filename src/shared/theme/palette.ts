"use client";

import { ThemeOptions } from "@mui/material";

export const palette: ThemeOptions["palette"] = {
  mode: "dark",

  primary: {
    main: "#C69BFF",
    dark: "#B088E8",
    light: "#d6b9fc",
    contrastText: "#0B0C0F",
  },

  secondary: {
    main: "#353945",
    dark: "#0B0C0F",
    light: "#777E90",
    contrastText: "#ffffff",
  },

  text: {
    primary: "#ffffff",
    secondary: "#B1B5C3",
    disabled: "#777E90",
  },

  background: {
    default: "#0B0C0F",
    paper: "#1c1f1f",
  },

  success: {
    main: "#00D68F",
    contrastText: "#0B0C0F",
  },

  warning: {
    main: "#FFA726",
    contrastText: "#0B0C0F",
  },

  error: {
    main: "#ff3b18",
    contrastText: "#ffffff",
  },

  info: {
    main: "#C69BFF",
    contrastText: "#0B0C0F",
  },

  grey: {
    50: "#F4F5F6",
    100: "#E6E8EC",
    200: "#B1B5C3",
    300: "#777E90",
    400: "#353945",
    500: "#353945",
    600: "#0B0C0F",
    700: "#0B0C0F",
    800: "#0B0C0F",
    900: "#0B0C0F",
  },

  divider: "#353945",

  action: {
    hover: "rgba(198, 155, 255, 0.08)",
    selected: "rgba(198, 155, 255, 0.12)",
    disabled: "rgba(177, 181, 195, 0.26)",
    disabledBackground: "rgba(177, 181, 195, 0.12)",
    focus: "rgba(198, 155, 255, 0.12)",
  },
};
