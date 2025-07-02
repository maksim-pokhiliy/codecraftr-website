"use client";

import { Button, Stack } from "@mui/material";
import Link from "next/link";

import { ROUTES } from "@app/shared/constants/routes";

const navigationItems = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "Contact", href: ROUTES.CONTACT },
];

export function NavigationMenu() {
  return (
    <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
      {navigationItems.map((item) => (
        <Button
          key={item.label}
          color="inherit"
          component={Link}
          href={item.href}
          sx={{
            fontWeight: 500,
            color: "text.primary",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}

export { navigationItems };
