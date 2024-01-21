import React from 'react';
import { Input as InputBase } from '@mui/material';
import './Input.scss';

export function Input(props) {
  function onChange(value){
    props.onChange(value)
  }

  return (
    <div className='input'>
      <div className='input__title'>{props.title}</div>
      <InputBase
        onChange={(event) => onChange(event.target.value)}
        value={props.value}
      />
    </div>
  );
}
