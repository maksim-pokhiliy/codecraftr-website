"use client";

import { Components, Theme } from "@mui/material";

export const accordion: Components<Theme>["MuiAccordion"] = {
  variants: [
    {
      props: { variant: "light" },
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};
