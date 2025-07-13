"use client";

import { ThemeOptions } from "@mui/material";

export const palette: ThemeOptions["palette"] = {
  mode: "dark",

  primary: {
    main: "#0b5cff",
    dark: "#004bee",
    light: "#7ea7f8",
    contrastText: "#ffffff",
  },

  secondary: {
    main: "#1c1f1f",
    dark: "#141616",
    light: "#becfcf",
    contrastText: "#ffffff",
  },

  text: {
    primary: "#ffffff",
    secondary: "#becfcf",
    disabled: "#7e8888",
  },

  background: {
    default: "#000000",
    paper: "#1a1a1a",
  },

  success: {
    main: "#d6ff79",
    dark: "#b8e358",
    light: "#d6ff79",
    contrastText: "#1c1f1f",
  },

  warning: {
    main: "#ffa726",
    contrastText: "#ffffff",
  },

  error: {
    main: "#0b5cff",
    contrastText: "#ffffff",
  },

  info: {
    main: "#7ea7f8",
    contrastText: "#ffffff",
  },

  grey: {
    50: "#fdfdfd",
    100: "#f2f6f6",
    200: "#dee7e7",
    300: "#e3e8e8",
    400: "#becfcf",
    500: "#7e8888",
    600: "#606262",
    700: "#3e3e3e",
    800: "#1c1f1f",
    900: "#262929",
  },

  divider: "#3e3e3e",

  action: {
    hover: "rgba(11, 92, 255, 0.08)",
    selected: "rgba(11, 92, 255, 0.12)",
    disabled: "rgba(190, 207, 207, 0.26)",
    disabledBackground: "rgba(190, 207, 207, 0.12)",
    focus: "rgba(11, 92, 255, 0.12)",
  },
};
