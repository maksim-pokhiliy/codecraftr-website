"use client";

import { Button, Card, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  metric?: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, metric, href }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      variant="outlined"
      component={Button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
      disableRipple
      sx={{
        cursor: href ? "pointer" : "default",
        textAlign: "left",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          height: "100%",
          textDecoration: "none",
          color: "inherit",
          alignItems: "flex-start",
        }}
      >
        <Stack
          sx={(theme) => ({
            width: 60,
            height: 60,
            p: 1.2,
            borderRadius: "50%",
            backgroundColor: isHovered ? theme.palette.success.main : theme.palette.common.white,
            alignItems: "center",
            justifyContent: "center",

            transition: theme.transitions.create("background-color", {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut,
            }),
          })}
        >
          <Typography variant="h5">{icon}</Typography>
        </Stack>

        <Stack spacing={4} sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              textDecoration: isHovered ? "underline" : "none",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 300,
            }}
          >
            {description}
          </Typography>
        </Stack>

        {metric && (
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: isHovered ? theme.palette.text.primary : theme.palette.success.main,
              fontWeight: 600,
              mt: "auto",

              transition: theme.transitions.create("color", {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
            })}
          >
            {metric}
          </Typography>
        )}
      </Stack>
    </Card>
  );
}
