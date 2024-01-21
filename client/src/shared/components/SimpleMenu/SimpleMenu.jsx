import { Menu } from '@mui/material';
import React from 'react';
import { MenuItemNavigate } from '../MenuItemNavigate/MenuItemNavigate';

export function SimpleMenu(props) {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={props.anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(props.anchorElNav)}
      onClose={props.handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <MenuItemNavigate navigate="/brigades" text="Бригады" />
      <MenuItemNavigate navigate="/schedule" text="График" />
      <MenuItemNavigate navigate="/area" text="Площади" />
      <MenuItemNavigate navigate="/profile" text="Профиль" />
    </Menu>
  );
}