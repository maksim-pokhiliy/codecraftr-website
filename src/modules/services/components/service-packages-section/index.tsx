"use client";

import { Grid } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { servicePackages } from "../../data/service-packages";

import { ServicePackageCard } from "./service-package-card";

export function ServicePackagesSection() {
  return (
    <ContentSection backgroundColor="paper">
      <SectionHeader
        highlightedText="Our Service"
        title="Packages"
        subtitle="Flexible Time & Materials development services designed specifically for SaaS startups. Choose the package that fits your current stage and growth plans."
        gradientVariant={GradientVariant.PRIMARY}
      />

      <Grid container spacing={4}>
        {servicePackages.map((servicePackage, index) => (
          <Grid size={{ xs: 12, lg: 6 }} key={index}>
            <ServicePackageCard servicePackage={servicePackage} />
          </Grid>
        ))}
      </Grid>

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.MEDIUM}
        position={{ top: "15%", right: "8%" }}
        color={ColorVariant.PRIMARY}
        rotation={20}
      />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.SMALL}
        position={{ bottom: "20%", left: "5%" }}
        color={ColorVariant.SECONDARY}
        reverse
      />
    </ContentSection>
  );
}
