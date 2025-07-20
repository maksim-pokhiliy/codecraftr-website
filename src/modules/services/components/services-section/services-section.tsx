"use client";

import { Grid } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";
import { ServiceCard } from "@app/shared/components/ui/service-card";

const services = [
  {
    id: 1,
    title: "SaaS MVP Development",
    subtitle: "8-12 weeks delivery",
    description:
      "Transform your SaaS concept into a production-ready platform with user management, subscription billing, and scalable MERN architecture that attracts investors.",
    href: "/services/saas-mvp-development",
  },
  {
    id: 2,
    title: "Travel SaaS Platform",
    subtitle: "Travel expertise",
    description:
      "Specialized booking systems with real-time availability, payment processing, and travel-specific workflows backed by proven industry experience.",
    href: "/services/travel-saas-platform",
  },
  {
    id: 3,
    title: "Platform Modernization",
    subtitle: "Legacy upgrade",
    description:
      "Eliminate technical debt and refactor legacy SaaS systems. Improve performance, add modern features, and prepare your platform for scale.",
    href: "/services/platform-modernization",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    subtitle: "Full-stack expertise",
    description:
      "Complete JavaScript solutions using React, Node.js, MongoDB, and Express with modern patterns and enterprise-grade architecture.",
    href: "/services/mern-stack-development",
  },
  {
    id: 5,
    title: "API Development",
    subtitle: "Integration-ready",
    description:
      "RESTful APIs with webhook systems, third-party integrations, and microservices architecture for seamless platform connectivity.",
    href: "/services/api-development",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    subtitle: "Ongoing partnership",
    description:
      "24/7 monitoring, performance optimization, security updates, and feature additions to keep your SaaS platform competitive and growing.",
    href: "/services/support-maintenance",
  },
];

export function ServicesSection() {
  return (
    <Section title="Our core" highlighted="services." variant="light">
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
