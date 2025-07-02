"use client";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

import { Logo } from "@app/shared/components/ui/logo";
import { ComponentSize, LogoVariant } from "@app/shared/types";

const links = [
  { icon: EmailIcon, text: "hi@codecraftr.dev", href: "mailto:hi@codecraftr.dev" },
  { icon: LinkedInIcon, text: "LinkedIn", href: "https://linkedin.com/company/codecraftr" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={({ palette }) => ({
        backgroundColor: palette.grey[900],
        color: palette.grey[100],
        py: 4,
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 2 }}>
              <Logo variant={LogoVariant.DARK} size={ComponentSize.LARGE} />
            </Box>

            <Typography
              variant="h6"
              sx={({ palette }) => ({
                color: palette.grey[300],
                mb: 3,
                lineHeight: 1.6,
              })}
            >
              Building scalable SaaS platforms with enterprise-ready MERN architecture.
            </Typography>

            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <Stack
                    key={link.href}
                    component={Link}
                    direction="row"
                    spacing={1}
                    href={link.href}
                    sx={({ palette }) => ({
                      alignItems: "center",
                      color: palette.grey[300],
                      textDecoration: "none",
                      "&:hover": {
                        color: palette.primary.main,
                      },
                    })}
                  >
                    <Icon />

                    <Typography variant="body2">{link.text}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={1} sx={{ textAlign: { xs: "left", md: "right" } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "primary.main",
                }}
              >
                15+
              </Typography>

              <Typography
                variant="body1"
                sx={({ palette }) => ({
                  color: palette.grey[300],
                })}
              >
                SaaS Platforms Built
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={({ palette }) => ({
            borderTop: `1px solid ${palette.grey[800]}`,
            pt: 4,
            mt: 6,
            textAlign: "center",
          })}
        >
          <Typography
            variant="body2"
            sx={({ palette }) => ({
              color: palette.grey[500],
            })}
          >
            © {currentYear} Codecraftr. Built with startup energy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
