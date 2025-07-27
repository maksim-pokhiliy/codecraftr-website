"use client";

import { Grid } from "@mui/material";

import { ProjectCard } from "@app/shared/components/ui/project-card";
import { Section } from "@app/shared/components/ui/section";

import { projects } from "./data";

export function ProjectsSection() {
  return (
    <Section
      title="Successful {SaaS} projects{.}"
      subtitle="Platforms we've built that scale from MVP to thousands of users"
      variant="dark"
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {projects.map((project, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
