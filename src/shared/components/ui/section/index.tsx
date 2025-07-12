"use client";

import { Container, ContainerProps, Stack, StackProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type SectionVariant = "default" | "paper";

interface SectionProps extends Omit<StackProps, "children" | "maxWidth"> {
  children: ReactNode;
  title?: string;
  highlighted?: string;
  variant?: SectionVariant;
  maxWidth?: ContainerProps["maxWidth"];
}

export function Section({
  children,
  title,
  highlighted,
  variant = "default",
  maxWidth = "xl",
  ...stackProps
}: SectionProps) {
  const bgcolor = variant === "paper" ? "background.paper" : "background.default";

  return (
    <Stack
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor,
      }}
      {...stackProps}
    >
      <Container maxWidth={maxWidth}>
        <Stack spacing={6}>
          {title && (
            <Typography variant="h1">
              {title}
              {highlighted && (
                <Typography component="span" variant="h1" color="primary">
                  {" "}
                  {highlighted}
                </Typography>
              )}
            </Typography>
          )}

          {children}
        </Stack>
      </Container>
    </Stack>
  );
}
