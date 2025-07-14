"use client";

import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

import { Section } from "@app/shared/components/ui/section";

import { ProcessStepContent } from "./process-step-content";
import { TabPanel } from "./tab-panel";

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "1-2 weeks",
    description:
      "The discovery session is the first and foremost stage of SaaS development. We collect information about your business model, target audience, core functionality, and technical requirements. We identify potential bottlenecks and offer suitable solutions to overcome them. This way, we deliver SaaS platforms that meet market demand and provide precise time and cost estimates.",
    deliverables: [
      "PRODUCT VISION",
      "PROJECT ROADMAP",
      "BACKLOG",
      "DESIGN PROTOTYPE",
      "USER FLOW",
      "PROJECT ARCHITECTURE",
      "ACCURATE ESTIMATES",
      "TEAM COMPOSITION",
    ],
  },
  {
    id: "design",
    title: "Design",
    duration: "2-3 weeks",
    description:
      "Once SaaS requirements are documented, our UX/UI team analyzes them to ensure correct information architecture. We create wireframes showcasing key screens and interface elements, then convert them into clickable prototypes for first user interaction. These prototypes are then developed into the final UI design optimized for SaaS workflows.",
    deliverables: [
      "DESIGN ESTIMATES",
      "UX FLOW",
      "MOCKUPS",
      "USER STORIES",
      "UI DESIGN",
      "CUSTOM THEMES AND ICONS",
    ],
  },
  {
    id: "development",
    title: "Development",
    duration: "4-6 weeks",
    description:
      "Our SaaS development process follows Agile principles to minimize risks and ensure constant improvement. We divide development into short sprints with task prioritization, MERN stack implementation, and thorough testing. Each functionality is tested by QA engineers before release to production, ensuring high-quality SaaS platforms.",
    deliverables: ["PLAN", "DESIGN", "DEVELOP", "TEST", "DEMO", "LAUNCH"],
  },
  {
    id: "release",
    title: "Release",
    duration: "1 week",
    description:
      "Release involves distributing your SaaS platform to end-users. This final development stage occurs when all bugs are fixed and enhancements are complete. We deploy your solution to production and create release notes with vital information about fixes and improvements to help engage users and raise awareness.",
    deliverables: ["DEPLOY", "BUG FIX", "DOCUMENTATION"],
  },
  {
    id: "support",
    title: "Support",
    duration: "Ongoing",
    description:
      "To ensure your SaaS platform remains bug-free and accessible 24/7, we provide comprehensive support and maintenance services. We continuously improve your product with new features to satisfy growing user demands. You can purchase monthly support hours or collect tasks for efficient batch processing.",
    deliverables: ["MAINTANENCE", "QA", "ADJUSTMENT"],
  },
];

interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export function ProcessSection() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Section title="Our SaaS development" highlighted="process.">
      <Tabs value={value} onChange={handleChange}>
        {processSteps.map((step) => (
          <Tab key={step.id} label={step.title} />
        ))}
      </Tabs>

      {processSteps.map((step, index) => (
        <TabPanel key={step.id} value={value} index={index}>
          <ProcessStepContent step={step} />
        </TabPanel>
      ))}
    </Section>
  );
}
