"use client";

import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { FullscreenSection } from "@app/shared/components/ui/fullscreen-section";
import { GradientText } from "@app/shared/components/ui/gradient-text";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

const stats = [
  { stat: "15+", text: "SaaS Platforms Built" },
  { stat: "8-12", text: "Weeks Average Delivery" },
  { stat: "100%", text: "Client Satisfaction" },
];

export function HeroSection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FullscreenSection variant="hero" withGradient>
      <Box sx={({ mixins }) => ({ ...mixins.toolbar })} />

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={({ spacing }) => ({
            mb: spacing(3),
            fontWeight: 800,
          })}
        >
          We Build SaaS Platforms
          <br />
          That{" "}
          <GradientText variant={GradientVariant.PRIMARY}>
            <TypeAnimation
              sequence={["Scale", 2000, "Convert", 2000, "Succeed", 2000, "Win", 3000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </GradientText>
        </Typography>

        <Typography
          variant="h5"
          sx={({ spacing }) => ({
            mb: spacing(6),
            color: "text.secondary",
            fontWeight: 500,
          })}
        >
          Enterprise-ready MERN architecture with startup speed and flexibility
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={({ spacing }) => ({
            justifyContent: "center",
            alignItems: "center",
            mb: spacing(6),
          })}
        >
          <Button
            size="large"
            variant="contained"
            fullWidth={isSmallScreen}
            sx={{
              fontWeight: 700,
            }}
          >
            Schedule Discovery Call
          </Button>

          <Button
            color="secondary"
            size="large"
            variant="outlined"
            fullWidth={isSmallScreen}
            sx={{ fontWeight: 600 }}
          >
            View Our Projects
          </Button>
        </Stack>

        <Stack
          spacing={8}
          direction="row"
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat) => (
            <Box key={stat.stat} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 800 }}>
                {stat.stat}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {stat.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <FloatingShape
        size={Size.LARGE}
        position={{ top: "20%", right: "10%" }}
        color={ColorVariant.PRIMARY}
      />

      <FloatingShape
        variant={ShapeVariant.BLOB}
        size={Size.MEDIUM}
        position={{ bottom: "30%", left: "5%" }}
        color={ColorVariant.SECONDARY}
        reverse
      />
    </FullscreenSection>
  );
}
