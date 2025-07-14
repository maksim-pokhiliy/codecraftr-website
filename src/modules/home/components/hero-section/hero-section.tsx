"use client";

import { Grid } from "@mui/material";

import { PageHero } from "../../../../shared/components/ui/page-hero";
import { ServiceCard } from "../../../../shared/components/ui/service-card";

const services = [
  {
    id: 1,
    title: "SaaS MVP Development",
    subtitle: "Validate ideas",
    description:
      "Transform your SaaS concept into a scalable platform that attracts investors and early customers.",
    href: "/services/saas-mvp",
  },
  {
    id: 2,
    title: "Travel SaaS Platform",
    subtitle: "Drive bookings",
    description:
      "Build booking platforms with travel-specific workflows and real-time availability systems.",
    href: "/services/travel-saas",
  },
  {
    id: 4,
    title: "All Services of Our Agency",
    subtitle: "Find opportunities",
    description:
      "Explore our comprehensive suite of SaaS development services and technical expertise.",
    href: "/services",
  },
];

export function HeroSection() {
  return (
    <PageHero
      overline="SaaS development agency"
      animatedWords={["solutions.", "expertise.", "results."]}
      title={
        <>
          Strong partner for building scalable SaaS platforms with
          <br />
          enterprise-ready{" "}
        </>
      }
      actions={
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid
              key={service.id}
              size={{ xs: 12, sm: 4 }}
              sx={{
                alignItems: "stretch",
                display: "flex",
              }}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      }
    />
  );
}
