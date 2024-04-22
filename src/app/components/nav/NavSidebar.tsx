"use client";

import { MouseEvent, useState } from "react";
import Link from "next/link";

// material-ui
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// project imports
import { navItems } from "./navItems";

export const NavSidebar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="secondary"
      >
        <MenuIcon sx={{ width: "48px", height: "48px" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.url}
            onClick={handleCloseNavMenu}
            sx={{ width: "180px" }}
          >
            <Link href={item.url}>
              <Typography variant="overline" textAlign="center">
                {item.title}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
