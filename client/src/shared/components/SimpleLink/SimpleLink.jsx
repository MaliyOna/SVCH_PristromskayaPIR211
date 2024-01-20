import React from 'react';
import Link from '@mui/material/Link';

export function SimpleLink(props) {

  return (
    <Link
      underline="hover"
      color="text.primary"
      aria-current="page"
    >
      {props.targetPage}
    </Link>
  );
}