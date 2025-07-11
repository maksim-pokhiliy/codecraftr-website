"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { JSX, useState } from "react";

interface Service {
  id: number;
  title: JSX.Element;
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
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeOut,
        }),
      })}
    >
      <Stack spacing={2} sx={{ height: "100%", justifyContent: "space-between" }}>
        <Stack spacing={1}>
          <Typography variant="h3">{service.title}</Typography>

          <Typography
            variant="overline"
            sx={(theme) => ({
              fontWeight: 500,
              opacity: { xs: 0.4, lg: isHovered ? 0.4 : 0 },
              transition: theme.transitions.create(["opacity"], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeOut,
              }),
            })}
          >
            {service.subtitle}
          </Typography>

          <Typography
            variant="h6"
            sx={(theme) => ({
              opacity: { xs: 1, lg: isHovered ? 1 : 0 },
              transition: theme.transitions.create(["opacity"], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeOut,
              }),
            })}
          >
            {service.description}
          </Typography>
        </Stack>

        <Stack
          sx={(theme) => ({
            width: isHovered ? "100%" : theme.spacing(3),
            alignItems: "flex-end",
            transition: theme.transitions.create(["width"], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeOut,
            }),
          })}
        >
          <ArrowForwardIcon
            fontSize="medium"
            sx={(theme) => ({
              color: isHovered ? "primary.contrastText" : "text.secondary",
              opacity: 0.6,
              transition: theme.transitions.create("color", {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeOut,
              }),
            })}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
