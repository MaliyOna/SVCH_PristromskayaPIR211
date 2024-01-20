import React from 'react';
import { Input as InputBase } from '@mui/material';
import './Input.scss';

export function Input(props) {
  return (
    <div className='input'>
      <div className='input__title'>{props.title}</div>
      <InputBase value={props.value}/>
    </div>
  );
}