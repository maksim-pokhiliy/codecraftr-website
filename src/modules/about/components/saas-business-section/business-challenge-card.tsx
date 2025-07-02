"use client";

import { Box, Card, Stack, Typography } from "@mui/material";

import { lineHeights } from "@app/shared/theme/common";

import { SaaSBusinessChallenge } from "../../data/saas-business";

interface BusinessChallengeCardProps {
  challenge: SaaSBusinessChallenge;
}

export function BusinessChallengeCard({ challenge }: BusinessChallengeCardProps) {
  const Icon = challenge.icon;

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
      }}
    >
      <Stack spacing={3}>
        <Box
          sx={({ spacing }) => ({
            width: { xs: spacing(6), sm: spacing(8) },
            height: { xs: spacing(6), sm: spacing(8) },
            borderRadius: 2,
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Icon sx={{ color: "white" }} fontSize="large" />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            lineHeight: lineHeights.snug,
          }}
        >
          {challenge.title}
        </Typography>

        <Box sx={({ spacing }) => ({ mt: spacing(2) })}>
          <Typography
            variant="body1"
            sx={({ spacing }) => ({
              mb: spacing(2),
              lineHeight: lineHeights.relaxed,
              color: "text.secondary",
            })}
          >
            <strong>Challenge:</strong> {challenge.problem}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              lineHeight: lineHeights.relaxed,
              fontWeight: 500,
            }}
          >
            <strong>Our Approach:</strong> {challenge.approach}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
