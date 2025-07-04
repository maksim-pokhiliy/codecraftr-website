"use client";

import { createMixins } from "@app/shared/theme/utils/mixins";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontFamilyMonospace: string;
  }

  interface TypographyVariantsOptions {
    fontFamilyMonospace?: string;
  }

  interface Mixins {
    hoverTransform: ReturnType<typeof createMixins>["hoverTransform"];
    smoothTransition: ReturnType<typeof createMixins>["smoothTransition"];
  }

  interface Theme {
    textShadows: string[];
  }

  interface ThemeOptions {
    textShadows?: string[];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cta: true;
  }
}
