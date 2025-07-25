"use client";

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@app/shared/components/ui/section";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: "/icons/tech/react.svg", url: "https://reactjs.org/" },
      { name: "Next.js", icon: "/icons/tech/nextjs.svg", url: "https://nextjs.org/" },
      { name: "Material-UI", icon: "/icons/tech/mui.svg", url: "https://mui.com/" },
      { name: "Redux", icon: "/icons/tech/redux.svg", url: "https://redux.js.org/" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: "/icons/tech/nodejs.svg", url: "https://nodejs.org/" },
      { name: "Express.js", icon: "/icons/tech/express.svg", url: "https://expressjs.com/" },
      { name: "GraphQL", icon: "/icons/tech/graphql.svg", url: "https://graphql.org/" },
      { name: "Socket.io", icon: "/icons/tech/socketio.svg", url: "https://socket.io/" },
    ],
  },
  {
    title: "Languages",
    technologies: [
      {
        name: "TypeScript",
        icon: "/icons/tech/typescript.svg",
        url: "https://typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: "/icons/tech/javascript.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "MongoDB", icon: "/icons/tech/mongodb.svg", url: "https://mongodb.com/" },
      { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg", url: "https://postgresql.org/" },
      { name: "Redis", icon: "/icons/tech/redis.svg", url: "https://redis.io/" },
      { name: "Elasticsearch", icon: "/icons/tech/elasticsearch.svg", url: "https://elastic.co/" },
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "/icons/tech/aws.svg", url: "https://aws.amazon.com/" },
      { name: "Vercel", icon: "/icons/tech/vercel.svg", url: "https://vercel.com/" },
      { name: "Docker", icon: "/icons/tech/docker.svg", url: "https://docker.com/" },
      {
        name: "GitHub Actions",
        icon: "/icons/tech/github.svg",
        url: "https://github.com/features/actions",
      },
    ],
  },
  {
    title: "Third-party Services",
    technologies: [
      { name: "Stripe", icon: "/icons/tech/stripe.svg", url: "https://stripe.com/" },
      { name: "Auth0", icon: "/icons/tech/auth0.svg", url: "https://auth0.com/" },
      { name: "SendGrid", icon: "/icons/tech/sendgrid.svg", url: "https://sendgrid.com/" },
      { name: "Cloudflare", icon: "/icons/tech/cloudflare.svg", url: "https://cloudflare.com/" },
    ],
  },
  {
    title: "Mobile",
    technologies: [
      { name: "React Native", icon: "/icons/tech/react.svg", url: "https://reactnative.dev/" },
      { name: "Expo", icon: "/icons/tech/expo.svg", url: "https://expo.dev/" },
    ],
  },
];

interface Technology {
  name: string;
  icon: string;
  url: string;
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

      <Stack gap={2} direction="row" sx={{ flexWrap: "wrap" }}>
        {technologies.map((tech) => (
          <Stack
            key={tech.name}
            component={Link}
            href={tech.url}
            direction="row"
            target="_blank"
            spacing={1}
            sx={(theme) => ({
              alignItems: "center",
              bgcolor: theme.palette.background.paper,
              p: theme.spacing(1, 2),
              color: "inherit",
              textDecoration: "none",
              transition: theme.transitions.create("background-color", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),

              "&:hover": {
                bgcolor: theme.palette.grey[700],
              },
            })}
          >
            <Image src={tech.icon} alt={tech.name} width={24} height={24} style={{}} />

            <Typography variant="caption">{tech.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export function TechStackSection() {
  return (
    <Section title="Technology" highlighted="stack." variant="dark">
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
