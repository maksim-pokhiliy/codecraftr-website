"use client";

import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";

import { lineHeights } from "@app/shared/theme/utils";

import { ServicePackage } from "../../data/service-packages";

interface ServicePackageCardProps {
  servicePackage: ServicePackage;
}

export function ServicePackageCard({ servicePackage }: ServicePackageCardProps) {
  const Icon = servicePackage.icon;

  const getCardVariant = () => {
    if (servicePackage.featured) {
      return "featured";
    }

    if (servicePackage.premium) {
      return "info";
    }

    return "dashed";
  };

  const getIconBackgroundColor = () => {
    if (servicePackage.featured) {
      return "primary.main";
    }

    if (servicePackage.premium) {
      return "secondary.main";
    }

    return "grey.200";
  };

  const getIconColor = () => {
    if (servicePackage.featured || servicePackage.premium) {
      return "white";
    }

    return "text.secondary";
  };

  const getTitleColor = () => {
    if (servicePackage.featured) {
      return "primary.main";
    }

    if (servicePackage.premium) {
      return "secondary.main";
    }

    return "text.primary";
  };

  return (
    <Card
      variant={getCardVariant()}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" sx={({ spacing }) => ({ alignItems: "center", mb: spacing(3) })}>
        <Box
          sx={({ spacing }) => ({
            width: spacing(6),
            height: spacing(6),
            borderRadius: 2,
            backgroundColor: getIconBackgroundColor(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: spacing(2),
          })}
        >
          <Icon sx={{ color: getIconColor() }} fontSize="large" />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: getTitleColor(),
              mb: 0.5,
            }}
          >
            {servicePackage.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {servicePackage.targetAudience}
          </Typography>
        </Box>

        {servicePackage.premium && (
          <Chip
            label="Premium"
            size="small"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              fontWeight: 600,
            }}
          />
        )}
      </Stack>

      <Typography
        variant="body1"
        sx={({ spacing }) => ({
          color: "text.secondary",
          mb: spacing(3),
          lineHeight: lineHeights.relaxed,
          flex: 1,
        })}
      >
        {servicePackage.description}
      </Typography>

      <Stack spacing={2} sx={({ spacing }) => ({ mb: spacing(3) })}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Timeline
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {servicePackage.timeline}
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Commitment
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {servicePackage.commitment}
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Investment
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.main" }}>
            {servicePackage.estimatedRange}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" gap={1} sx={({ spacing }) => ({ flexWrap: "wrap", mb: spacing(3) })}>
        {servicePackage.techStack.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            size="small"
            sx={{
              backgroundColor: "grey.100",
              color: "text.secondary",
              fontWeight: 500,
            }}
          />
        ))}
      </Stack>

      <Button variant="contained" endIcon={<LaunchIcon />} fullWidth sx={{ fontWeight: 600 }}>
        Discuss This Package
      </Button>
    </Card>
  );
}
