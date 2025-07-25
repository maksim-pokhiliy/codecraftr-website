import { ReactNode } from "react";

import { SectionVariant } from "../section";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabbedSectionProps {
  title?: string;
  highlighted?: string;
  variant?: SectionVariant;
  tabs: TabItem[];
  defaultTab?: number;
}
