"use client";

import { Container, Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

interface FullscreenSectionProps extends Omit<StackProps, "children" | "maxWidth"> {
  children: ReactNode;
}

export function FullscreenSection({ children, ...stackProps }: FullscreenSectionProps) {
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
      <Container maxWidth={false} sx={{ px: { xs: 4, sm: 8 } }}>
        {children}
      </Container>
    </Stack>
  );
}
