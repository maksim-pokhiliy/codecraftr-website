"use client";

import { Grid } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";
import { ServiceCard } from "@app/shared/components/ui/service-card";

const services = [
  {
    id: 1,
    title: "SaaS MVP Development",
    subtitle: "8-12 weeks",
    description:
      "Build and validate your SaaS idea with production-ready MVP using MERN stack and scalable architecture that attracts investors.",
    href: "/services#saas-mvp",
  },
  {
    id: 2,
    title: "Travel SaaS Platform",
    subtitle: "10-14 weeks",
    description:
      "Specialized booking systems with real-time availability and payment processing backed by travel industry expertise.",
    href: "/services#travel-saas",
  },
  {
    id: 3,
    title: "Platform Modernization",
    subtitle: "12-16 weeks",
    description:
      "Upgrade legacy SaaS systems with technical debt elimination and architecture refactoring for growth.",
    href: "/services#modernization",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    subtitle: "6-10 weeks",
    description:
      "Full-stack JavaScript solutions with React, Node.js, MongoDB using modern enterprise patterns.",
    href: "/services#mern-development",
  },
  {
    id: 5,
    title: "SaaS API Development",
    subtitle: "4-8 weeks",
    description:
      "RESTful APIs for integrations with webhook systems and scalable microservices architecture.",
    href: "/services#api-development",
  },
  {
    id: 6,
    title: "Support Maintenance",
    subtitle: "Ongoing",
    description:
      "24/7 monitoring, performance optimization, feature additions, and security updates for your SaaS.",
    href: "/services#support",
  },
];

export function ServicesSection() {
  return (
    <Section title="Our" highlighted="services." variant="light">
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: "flex" }}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
