"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export function TabPanel({ children, value, index }: TabPanelProps) {
  return <Box hidden={value !== index}>{value === index && children}</Box>;
}
