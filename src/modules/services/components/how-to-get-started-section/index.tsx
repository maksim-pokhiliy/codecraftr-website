// src/modules/services/components/how-to-get-started-section/index.tsx
"use client";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { JourneyAccordion } from "./journey-accordion";

export function HowToGetStartedSection() {
  return (
    <ContentSection backgroundColor="default">
      <SectionHeader
        highlightedText="How to Get"
        title="Started"
        subtitle="From initial conversation to launched platform - here's how we partner with SaaS startups to build scalable solutions that grow with your business."
        gradientVariant={GradientVariant.SECONDARY}
      />

      <JourneyAccordion />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.MEDIUM}
        position={{ top: "20%", left: "8%" }}
        color={ColorVariant.SECONDARY}
        rotation={-15}
      />

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.SMALL}
        position={{ bottom: "25%", right: "10%" }}
        color={ColorVariant.PRIMARY}
        reverse
      />
    </ContentSection>
  );
}
