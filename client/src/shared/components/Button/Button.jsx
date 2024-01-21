import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Button.scss';

export function ButtonColor(props) {
  return (
    <div className='buttonColor'>
      <Stack direction="row" spacing={2}>
        {
          !props.error
            ?
            <Button variant="contained" onClick={() => props.handleClick()}>
              {props.value}
            </Button>
            :
            <Button variant="outlined" color="error" onClick={() => props.handleClick()}>
              {props.value}
            </Button>
        }
      </Stack>
    </div>
  );
}
