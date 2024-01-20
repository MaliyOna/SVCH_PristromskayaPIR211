import { Avatar, IconButton } from '@mui/material';
import React from 'react';

export function SimpleAvatar(props) {
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="Remy Sharp" src="/images.jpg" />
    </IconButton>
  );
}