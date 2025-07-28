"use client";

import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  href?: string;
}

export function ProjectCard({ description, technologies, imageUrl, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      component={Button}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: 500,
      }}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: isHovered ? "brightness(1)" : "brightness(0.4)",
          transform: isHovered ? "scale(1.05)" : "scale(1)",

          transition: theme.transitions.create(["filter", "transform"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        })}
      />

      <Stack
        direction="row"
        gap={1}
        sx={(theme) => ({
          position: "absolute",
          top: theme.spacing(4),
          left: theme.spacing(4),
          right: theme.spacing(4),
          transform: isHovered ? `translateY(${theme.spacing(-2)})` : "translateY(0)",
          opacity: isHovered ? 0 : 1,
          flexWrap: "wrap",

          transition: theme.transitions.create(["opacity", "transform"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        })}
      >
        {technologies.map((tech, index) => (
          <Chip key={index} label={tech} size="medium" color="primary" variant="filled" />
        ))}
      </Stack>

      <Stack
        sx={(theme) => ({
          position: "absolute",
          bottom: theme.spacing(4),
          left: theme.spacing(4),
          right: theme.spacing(4),
          transform: isHovered ? `translateY(${theme.spacing(2)})` : "translateY(0)",
          opacity: isHovered ? 0 : 1,

          transition: theme.transitions.create(["opacity", "transform"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        })}
      >
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Card>
  );
}
