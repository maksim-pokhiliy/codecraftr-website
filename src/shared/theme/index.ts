"use client";

import { createTheme } from "@mui/material/styles";

import "@app/shared/types/mui-extensions";

import { shape, spacing } from "./common";
import * as components from "./components";
import { createMixins } from "./mixins";
import { palette } from "./palette";
import { typography } from "./typography";

export { gradients } from "./gradients";

const baseTheme = createTheme({
  palette,
  spacing,
  shape,
  typography,
  components,
});

export const theme = createTheme(baseTheme, {
  mixins: {
    ...baseTheme.mixins,
    ...createMixins(baseTheme),
  },
});
