"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import { navigationItems } from "./navigation-menu";

export function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleMenuOpen}
        sx={{ color: "text.primary" }}
      >
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {navigationItems.map((item) => (
          <MenuItem component={Link} key={item.label} onClick={handleMenuClose} href={item.href}>
            {item.label}
          </MenuItem>
        ))}

        <MenuItem onClick={handleMenuClose}>
          <Button variant="contained" color="primary" fullWidth sx={{ fontWeight: 600 }}>
            Schedule Discovery Call
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}
