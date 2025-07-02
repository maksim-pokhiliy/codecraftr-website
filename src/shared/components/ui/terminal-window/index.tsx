"use client";

import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  height?: number;
}

export function TerminalWindow({ title = "terminal", children, height }: TerminalWindowProps) {
  return (
    <Box
      sx={({ palette, shadows }) => ({
        mx: "auto",
        backgroundColor: palette.grey[900],
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: shadows[12],
      })}
    >
      <Stack
        direction="row"
        sx={({ palette, spacing }) => ({
          alignItems: "center",
          backgroundColor: palette.grey[800],
          p: spacing(1.5),
          borderBottomWidth: spacing(0.125),
          borderBottomStyle: "solid",
          borderBottomColor: palette.grey[700],
        })}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={({ spacing }) => ({
              width: spacing(1.5),
              height: spacing(1.5),
              borderRadius: "50%",
              backgroundColor: "error.main",
            })}
          />

          <Box
            sx={({ spacing }) => ({
              width: spacing(1.5),
              height: spacing(1.5),
              borderRadius: "50%",
              backgroundColor: "warning.main",
            })}
          />

          <Box
            sx={({ spacing }) => ({
              width: spacing(1.5),
              height: spacing(1.5),
              borderRadius: "50%",
              backgroundColor: "success.main",
            })}
          />
        </Box>

        <Typography
          variant="caption"
          sx={({ palette, spacing, typography }) => ({
            color: palette.grey[400],
            ml: spacing(2),
            fontFamily: typography.fontFamilyMonospace,
          })}
        >
          {title}
        </Typography>
      </Stack>

      <Box
        sx={({ spacing, palette, typography }) => ({
          p: spacing(3),
          fontFamily: typography.fontFamilyMonospace,
          lineHeight: 1.6,
          minHeight: height ? spacing(height) : spacing(37.5),
          backgroundColor: palette.grey[900],
        })}
      >
        {children}
      </Box>
    </Box>
  );
}
