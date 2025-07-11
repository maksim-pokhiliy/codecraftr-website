"use client";

import { Container, ContainerProps, Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

interface FullscreenSectionProps extends Omit<StackProps, "children" | "maxWidth"> {
  children: ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
}

export function FullscreenSection({
  children,
  maxWidth = "xl",
  ...stackProps
}: FullscreenSectionProps) {
  return (
    <Stack
      component="section"
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
      }}
      {...stackProps}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Stack>
  );
}
