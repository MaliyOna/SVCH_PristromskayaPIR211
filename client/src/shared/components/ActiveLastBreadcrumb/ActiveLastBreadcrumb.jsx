import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { SimpleLink } from '../SimpleLink/SimpleLink';

export default function ActiveLastBreadcrumb(props) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <SimpleLink targetPage={props.targetPage}/>
      </Breadcrumbs>
    </div>
  );
}