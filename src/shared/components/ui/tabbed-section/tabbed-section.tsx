"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { ReactNode, useState } from "react";

import { Section } from "../section";

import { TabbedSectionProps } from "./types";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return <Box hidden={value !== index}>{value === index && children}</Box>;
}

export function TabbedSection({
  title,
  highlighted,
  variant = "dark",
  tabs,
  defaultTab = 0,
}: TabbedSectionProps) {
  const [value, setValue] = useState(defaultTab);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Section title={title} highlighted={highlighted} variant={variant}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <TabPanel key={tab.id} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Section>
  );
}
