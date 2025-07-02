"use client";

import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Button, Grid } from "@mui/material";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "GetPin",
    description:
      "Business management SaaS helping hundreds of companies manage their online presence with location-based services and customer engagement tools.",
    techStack: ["React", "Node.js", "MongoDB", "Google Maps API"],
    metrics: {
      users: "500+ users",
      growth: "Active growth",
      performance: "Scalable",
    },
    featured: true,
  },
  {
    name: "Torc",
    description:
      "AI-driven hiring platform with optimized recruitment workflows and intelligent candidate matching for modern HR teams.",
    techStack: ["React", "Express", "AI/ML", "PostgreSQL"],
    metrics: {
      users: "50+ users",
      growth: "Growing growth",
      performance: "Fast",
    },
  },
  {
    name: "2Smart Cloud",
    description:
      "IoT management platform with real-time device control and monitoring capabilities for enterprise IoT deployments.",
    techStack: ["React Native", "Node.js", "WebSocket", "AWS"],
    metrics: {
      users: "100+ users",
      growth: "Stable growth",
      performance: "Real-time",
    },
  },
];

export function ProjectsSection() {
  return (
    <ContentSection backgroundColor="default">
      <SectionHeader
        highlightedText="Successful"
        title="Projects"
        subtitle="Real SaaS platforms we've built for growing startups"
        gradientVariant={GradientVariant.SECONDARY}
      />

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              metrics={project.metrics}
              featured={project.featured}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="outlined"
          size="large"
          endIcon={<LaunchIcon />}
          color="secondary"
          sx={{ fontWeight: 600 }}
        >
          View All Projects
        </Button>
      </Box>

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.LARGE}
        position={{ top: "15%", left: "5%" }}
        color={ColorVariant.SECONDARY}
        rotation={-15}
      />

      <FloatingShape
        variant={ShapeVariant.CIRCLE}
        size={Size.MEDIUM}
        position={{ bottom: "20%", right: "8%" }}
        color={ColorVariant.PRIMARY}
        rotation={30}
        reverse
      />
    </ContentSection>
  );
}
