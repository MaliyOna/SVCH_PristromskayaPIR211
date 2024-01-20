import * as React from 'react';
import Button from '@mui/material/Button';

export function GroupButton(props) {
  return (
    <Button onClick={() => props.function()}>{props.text}</Button>
  );
}