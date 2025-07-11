"use client";

import { Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import { FullscreenSection } from "@app/shared/components/ui/fullscreen-section";

import { ServiceCard } from "./service-card";

const services = [
  {
    id: 1,
    title: (
      <>
        SaaS MVP
        <br />
        Development
      </>
    ),
    subtitle: "Validate ideas",
    description:
      "Transform your SaaS concept into a scalable platform that attracts investors and early customers.",
    href: "/services/saas-mvp",
  },
  {
    id: 2,
    title: (
      <>
        Travel SaaS
        <br />
        Platform
      </>
    ),
    subtitle: "Drive bookings",
    description:
      "Build booking platforms with travel-specific workflows and real-time availability systems.",
    href: "/services/travel-saas",
  },
  {
    id: 3,
    title: (
      <>
        Platform
        <br />
        Modernization
      </>
    ),
    subtitle: "Scale growth",
    description:
      "Modernize existing SaaS platforms with scalable architecture and performance optimization.",
    href: "/services/modernization",
  },
  {
    id: 4,
    title: (
      <>
        All Services of
        <br />
        Our Agency
      </>
    ),
    subtitle: "Find opportunities",
    description:
      "Explore our comprehensive suite of SaaS development services and technical expertise.",
    href: "/services",
  },
];

export function HeroSection() {
  return (
    <FullscreenSection>
      <Stack spacing={8}>
        <Stack spacing={3}>
          <Typography variant="overline" color="text.secondary">
            SaaS development agency
          </Typography>

          <Typography variant="h1" component="h1">
            Strong partner for building scalable SaaS platforms with
            <br />
            enterprise-ready{" "}
            <Typography
              component="span"
              variant="h1"
              sx={{ color: "primary.main", fontWeight: 700 }}
            >
              <TypeAnimation
                sequence={[
                  "architecture",
                  2000,
                  "solutions",
                  2000,
                  "expertise",
                  2000,
                  "results",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Typography>
          </Typography>
        </Stack>

        <Stack
          direction={{ lg: "row" }}
          spacing={{ sm: 4 }}
          sx={{ width: "100%", justifyContent: "center", alignItems: "stretch" }}
        >
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </Stack>
      </Stack>
    </FullscreenSection>
  );
}
