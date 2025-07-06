"use client";

import { Grid } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { technologies } from "../../data/technologies";

import { TechnologyCard } from "./technology-card";

export function TechnologyStackSection() {
  return (
    <ContentSection backgroundColor="paper">
      <SectionHeader
        highlightedText="Our Technology"
        title="Stack"
        subtitle="Enterprise-ready MERN architecture with TypeScript for scalable, maintainable SaaS platforms that grow with your business."
        gradientVariant={GradientVariant.SECONDARY}
      />

      <Grid container spacing={3}>
        {technologies.map((technology) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={technology.id}>
            <TechnologyCard technology={technology} />
          </Grid>
        ))}
      </Grid>

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.MEDIUM}
        position={{ top: "15%", left: "5%" }}
        color={ColorVariant.PRIMARY}
        rotation={20}
      />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.SMALL}
        position={{ bottom: "20%", right: "8%" }}
        color={ColorVariant.SECONDARY}
        reverse
      />
    </ContentSection>
  );
}
