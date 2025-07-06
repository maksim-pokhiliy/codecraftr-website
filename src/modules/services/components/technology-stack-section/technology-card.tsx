"use client";

import { Card, Popover, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import { lineHeights } from "@app/shared/theme/utils/common";

import { Technology } from "../../data/technologies";

interface TechnologyCardProps {
  technology: Technology;
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="dashed"
        sx={{
          height: "100%",
        }}
      >
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
          <Image
            src={technology.logoPath}
            alt={`${technology.name} logo`}
            width={64}
            height={64}
            style={{
              objectFit: "contain",
            }}
          />

          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              {technology.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {technology.category}
            </Typography>
          </Stack>
        </Stack>
      </Card>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        disableRestoreFocus
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Stack>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {technology.name}
          </Typography>

          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
            }}
          >
            {technology.category}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: lineHeights.relaxed,
            }}
          >
            {technology.description}
          </Typography>
        </Stack>
      </Popover>
    </>
  );
}
