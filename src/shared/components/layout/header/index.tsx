"use client";

import {
  alpha,
  AppBar,
  Button,
  Container,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";

import { Logo } from "@app/shared/components/ui/logo";
import { ANIMATION_CONFIG } from "@app/shared/constants/animations";
import { ComponentSize, LogoVariant } from "@app/shared/types";

import { MobileMenu } from "./mobile-menu";
import { NavigationMenu } from "./navigation-menu";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    threshold: ANIMATION_CONFIG.SCROLL_THRESHOLD,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={({ palette, spacing }) => ({
          backgroundColor: alpha(palette.background.default, 0.8),
          backdropFilter: `blur(${spacing(2)})`,
          borderBottomWidth: spacing(0.25),
          borderBottomStyle: "solid",
          borderBottomColor: palette.grey[200],
          p: 0,
        })}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={({ spacing }) => ({
              justifyContent: "space-between",
              py: spacing(1),
              px: "0 !important",
            })}
          >
            <Logo variant={LogoVariant.LIGHT} size={ComponentSize.MEDIUM} />

            {!isMobile && <NavigationMenu />}

            {isMobile ? (
              <MobileMenu />
            ) : (
              <Button variant="contained" size="small" sx={{ fontWeight: 600 }}>
                Schedule Discovery Call
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
