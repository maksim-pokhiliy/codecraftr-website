"use client";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "./index";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
