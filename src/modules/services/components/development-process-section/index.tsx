"use client";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { ProcessTimeline } from "./process-timeline";

export function DevelopmentProcessSection() {
  return (
    <ContentSection backgroundColor="default">
      <SectionHeader
        highlightedText="Development"
        title="Process"
        subtitle="Transparent weekly breakdown of how we build your SaaS platform from concept to launch"
        gradientVariant={GradientVariant.PRIMARY}
      />

      <ProcessTimeline />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.MEDIUM}
        position={{ top: "20%", left: "5%" }}
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
