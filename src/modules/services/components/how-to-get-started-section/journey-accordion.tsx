"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { lineHeights } from "@app/shared/theme/utils";
import { gradients } from "@app/shared/theme/utils/gradients";
import { GradientVariant } from "@app/shared/types";

import { journeySteps } from "../../data/customer-journey";

export function JourneyAccordion() {
  return (
    <Stack spacing={0}>
      {journeySteps.map((step, index) => {
        return (
          <Accordion key={index} disableGutters elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  width: "100%",
                  gap: 3,
                }}
              >
                <Box
                  sx={(theme) => ({
                    width: theme.spacing(6),
                    height: theme.spacing(6),
                    borderRadius: theme.spacing(1.5),
                    background: gradients.text[GradientVariant.SECONDARY](theme),
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "h6.fontSize",
                    flexShrink: 0,
                    boxShadow: theme.shadows[4],
                  })}
                >
                  {index + 1}
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  >
                    Duration: {step.duration}
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                variant="body1"
                sx={({ spacing }) => ({
                  color: "text.primary",
                  lineHeight: lineHeights.relaxed,
                  mb: spacing(3),
                })}
              >
                {step.description}
              </Typography>

              <List dense disablePadding>
                {step.details.map((detail, detailIndex) => (
                  <ListItem key={detailIndex}>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: 8,
                          color: "secondary.main",
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={detail}
                      slotProps={{
                        primary: {
                          variant: "body1",
                          sx: {
                            color: "text.secondary",
                            lineHeight: lineHeights.relaxed,
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
}
