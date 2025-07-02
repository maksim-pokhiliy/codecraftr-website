"use client";

import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  metrics: {
    users?: string;
    growth?: string;
    performance?: string;
  };
  featured?: boolean;
}

export function ProjectCard({
  name,
  description,
  techStack,
  metrics,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      variant={featured ? "featured" : "dashed"}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" sx={({ spacing }) => ({ alignItems: "center", mb: spacing(2) })}>
        <CodeIcon
          fontSize="small"
          sx={({ spacing }) => ({
            color: featured ? "primary.main" : "text.secondary",
            mr: spacing(1),
          })}
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: featured ? "primary.main" : "text.primary",
            flex: 1,
          }}
        >
          {name}
        </Typography>

        {featured && <StarIcon fontSize="small" sx={{ color: "warning.main" }} />}
      </Stack>

      <Typography
        variant="body1"
        sx={({ spacing }) => ({
          color: "text.secondary",
          mb: spacing(3),
          flex: 1,
          lineHeight: 1.5,
        })}
      >
        {description}
      </Typography>

      <Stack direction="row" gap={1} sx={({ spacing }) => ({ flexWrap: "wrap", mb: spacing(3) })}>
        {techStack.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            size="small"
            sx={{
              backgroundColor: featured ? "primary.main" : "grey.200",
              color: featured ? "primary.contrastText" : "text.secondary",
              fontWeight: 500,
            }}
          />
        ))}
      </Stack>

      <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
        {metrics.users && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <TrendingUpIcon
              sx={({ spacing }) => ({ fontSize: spacing(2), color: "success.main" })}
            />

            <Typography variant="caption" color="text.secondary">
              {metrics.users}
            </Typography>
          </Box>
        )}

        {metrics.growth && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={({ spacing }) => ({ fontSize: spacing(2), color: "warning.main" })} />

            <Typography variant="caption" color="text.secondary">
              {metrics.growth}
            </Typography>
          </Box>
        )}

        {metrics.performance && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CodeIcon sx={({ spacing }) => ({ fontSize: spacing(2), color: "info.main" })} />

            <Typography variant="caption" color="text.secondary">
              {metrics.performance}
            </Typography>
          </Box>
        )}
      </Stack>
    </Card>
  );
}
