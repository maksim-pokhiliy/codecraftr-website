"use client";

import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { useState } from "react";

import { Section } from "@app/shared/components/ui/section";

import { approaches } from "./data";

export function OurApproachSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <Section
      title="Our approach to {SaaS} development{.}"
      subtitle="MERN stack expertise meets startup thinking"
      variant="light"
    >
      <Stack>
        {approaches.map((approach, index) => (
          <Accordion
            key={index}
            expanded={expandedItem === index}
            onMouseEnter={() => setExpandedItem(index)}
          >
            <AccordionSummary>
              <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                {approach.title}
              </Stack>
            </AccordionSummary>

            <AccordionDetails>{approach.description}</AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Section>
  );
}
