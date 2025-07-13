"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      component={Link}
      href={service.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={(theme) => ({
        padding: 3,
        bgcolor: isHovered ? "primary.main" : "background.paper",
        textDecoration: "none",
        flex: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeOut,
        }),
      })}
    >
      <Stack spacing={2} sx={{ height: "100%", justifyContent: "space-between" }}>
        <Stack spacing={1}>
          <Typography variant="h4">{service.title}</Typography>

          <Typography
            variant="overline"
            sx={(theme) => ({
              fontWeight: 500,
              opacity: { xs: 0.6, lg: isHovered ? 0.6 : 0 },
              transform: `translateY(${isHovered ? 0 : 4}px)`,
              transition: theme.transitions.create(["opacity", "transform"], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeOut,
                delay: theme.transitions.duration.shortest,
              }),
            })}
          >
            {service.subtitle}
          </Typography>

          <Typography
            variant="body1"
            sx={(theme) => ({
              opacity: { xs: 1, lg: isHovered ? 1 : 0 },
              transform: `translateY(${isHovered ? 0 : 4}px)`,
              transition: theme.transitions.create(["opacity", "transform"], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeOut,
                delay: theme.transitions.duration.shortest * 2,
              }),
            })}
          >
            {service.description}
          </Typography>
        </Stack>

        <ArrowForwardIcon
          fontSize="large"
          sx={(theme) => ({
            opacity: 0.6,
            transform: `rotate(${isHovered ? 0 : -45}deg)`,
            transition: theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest,
              easing: theme.transitions.easing.easeOut,
            }),
          })}
        />
      </Stack>
    </Card>
  );
}
