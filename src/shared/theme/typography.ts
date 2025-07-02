"use client";

import { ThemeOptions } from "@mui/material";

import { lineHeights } from "./common";

export const typography: ThemeOptions["typography"] = {
  fontFamily:
    'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  fontFamilyMonospace: 'Monaco, Consolas, "Courier New", monospace',

  h1: {
    fontWeight: 700,
    lineHeight: lineHeights.tight,
  },

  h2: {
    fontWeight: 600,
    lineHeight: lineHeights.snug,
  },

  h3: {
    fontWeight: 600,
    lineHeight: lineHeights.snug,
  },

  h4: {
    fontWeight: 600,
    lineHeight: lineHeights.snug,
  },

  h5: {
    fontWeight: 600,
    lineHeight: lineHeights.snug,
  },

  h6: {
    fontWeight: 600,
    lineHeight: lineHeights.snug,
  },

  subtitle1: {
    fontWeight: 400,
    lineHeight: lineHeights.normal,
  },

  subtitle2: {
    fontWeight: 500,
    lineHeight: lineHeights.normal,
  },

  body1: {
    fontWeight: 400,
    lineHeight: lineHeights.normal,
  },

  body2: {
    fontWeight: 400,
    lineHeight: lineHeights.normal,
  },

  button: {
    fontWeight: 500,
    textTransform: "none",
  },

  caption: {
    fontWeight: 400,
    lineHeight: lineHeights.normal,
  },

  overline: {
    fontWeight: 500,
    textTransform: "uppercase",
  },
};
