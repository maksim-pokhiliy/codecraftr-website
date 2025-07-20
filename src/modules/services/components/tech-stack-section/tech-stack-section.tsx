"use client";

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { Section } from "@app/shared/components/ui/section";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: "/icons/tech/react.svg" },
      { name: "Next.js", icon: "/icons/tech/nextjs.svg" },
      { name: "Material-UI", icon: "/icons/tech/mui.svg" },
      { name: "Redux", icon: "/icons/tech/redux.svg" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: "/icons/tech/nodejs.svg" },
      { name: "Express.js", icon: "/icons/tech/express.svg" },
      { name: "REST APIs", icon: "/icons/tech/api.svg" },
      { name: "GraphQL", icon: "/icons/tech/graphql.svg" },
      { name: "WebSocket", icon: "/icons/tech/websocket.svg" },
    ],
  },
  {
    title: "Languages",
    technologies: [
      { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
      { name: "JavaScript", icon: "/icons/tech/javascript.svg" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "MongoDB", icon: "/icons/tech/mongodb.svg" },
      { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
      { name: "Redis", icon: "/icons/tech/redis.svg" },
      { name: "Elasticsearch", icon: "/icons/tech/elasticsearch.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "/icons/tech/aws.svg" },
      { name: "Vercel", icon: "/icons/tech/vercel.svg" },
      { name: "Docker", icon: "/icons/tech/docker.svg" },
      { name: "CI/CD", icon: "/icons/tech/cicd.svg" },
      { name: "Monitoring", icon: "/icons/tech/monitoring.svg" },
    ],
  },
  {
    title: "SaaS Features",
    technologies: [
      { name: "Stripe Integration", icon: "/icons/tech/stripe.svg" },
      { name: "Multi-tenancy", icon: "/icons/tech/multitenancy.svg" },
      { name: "Authentication", icon: "/icons/tech/auth0.svg" },
      { name: "Real-time Updates", icon: "/icons/tech/realtime.svg" },
    ],
  },
  {
    title: "Mobile",
    technologies: [
      { name: "React Native", icon: "/icons/tech/react-native.svg" },
      { name: "iOS", icon: "/icons/tech/ios.svg" },
      { name: "Android", icon: "/icons/tech/android.svg" },
      { name: "Cross-platform", icon: "/icons/tech/crossplatform.svg" },
    ],
  },
];

interface Technology {
  name: string;
  icon: string;
}

interface TechCategoryProps {
  title: string;
  technologies: Technology[];
}

function TechCategory({ title, technologies }: TechCategoryProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>

      <Stack spacing={1}>
        {technologies.map((tech) => (
          <Stack
            key={tech.name}
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={24}
              height={24}
              style={{
                flexShrink: 0,
                objectFit: "contain",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
              }}
            >
              {tech.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export function TechStackSection() {
  return (
    <Section title="Technology" highlighted="stack." variant="light">
      <Grid container spacing={4}>
        {techCategories.map((category) => (
          <Grid key={category.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <TechCategory title={category.title} technologies={category.technologies} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
