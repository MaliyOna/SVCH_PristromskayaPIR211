import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function MenuBlockWithButton(props) {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button
        onClick={() => navigate(`/brigades`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Бригады
      </Button>

      <Button
        onClick={() => navigate(`/schedule`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        График
      </Button>

      <Button
        onClick={() => navigate(`/area`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Площади
      </Button>

      <Button
        onClick={() => navigate(`/profile`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Профиль
      </Button>
    </Box>
  );
}