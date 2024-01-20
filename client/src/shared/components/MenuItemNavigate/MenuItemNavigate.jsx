import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function MenuItemNavigate(props) {
  const navigate = useNavigate();
  
  return (
    <MenuItem onClick={() => navigate(`${props.navigate}`)}>
      <Typography textAlign="center">{props.text}</Typography>
    </MenuItem>
  );
}