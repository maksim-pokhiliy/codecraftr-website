"use client";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { lineHeights } from "@app/shared/theme/utils";

import { developmentWeeks } from "../../data/development-process";

export function ProcessTimeline() {
  const [activeWeek, setActiveWeek] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveWeek(newValue);
  };

  const activeProcess = developmentWeeks[activeWeek];

  if (!activeProcess) {
    return null;
  }

  const Icon = activeProcess.icon;

  return (
    <Stack spacing={6}>
      <Tabs value={activeWeek} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        {developmentWeeks.map((week, index) => (
          <Tab
            key={index}
            label={week.week}
            sx={{
              fontWeight: 600,
              minWidth: 120,
            }}
          />
        ))}
      </Tabs>

      <Card variant="featured" sx={{ position: "relative", overflow: "visible" }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <Box
              sx={({ spacing, shadows }) => ({
                width: spacing(8),
                height: spacing(8),
                borderRadius: spacing(2),
                backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: shadows[6],
              })}
            >
              <Icon fontSize="large" sx={{ color: "white" }} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="overline" sx={{ fontWeight: 700, color: "primary.main" }}>
                {activeProcess.phase} Phase
              </Typography>

              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {activeProcess.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: lineHeights.relaxed, color: "text.secondary" }}
              >
                {activeProcess.description}
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Key Deliverables
              </Typography>

              <List dense disablePadding>
                {activeProcess.deliverables.map((deliverable, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: 10,
                          color: "success.main",
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={deliverable}
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
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Development Activities
              </Typography>

              <List dense disablePadding>
                {activeProcess.activities.map((activity, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: 10,
                          color: "primary.main",
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={activity}
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
            </Box>
          </Stack>

          <Alert severity="success" variant="standard">
            <AlertTitle>Your Involvement</AlertTitle>

            {activeProcess.clientInvolvement}
          </Alert>
        </Stack>
      </Card>
    </Stack>
  );
}
