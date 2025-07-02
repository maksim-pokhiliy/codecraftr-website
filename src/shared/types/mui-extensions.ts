"use client";

import { createMixins } from "@app/shared/theme/mixins";

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
}
