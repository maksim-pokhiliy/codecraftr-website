"use client";

import { createTheme } from "@mui/material/styles";

import "@app/shared/types/mui-extensions";

import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";
import { createMixins, shape, spacing, textShadows } from "./utils";

const baseTheme = createTheme({
  palette,
  spacing,
  shape,
  typography,
  components,
  textShadows,
});

export const theme = createTheme(baseTheme, {
  mixins: {
    ...baseTheme.mixins,
    ...createMixins(baseTheme),
  },
});
