import React from 'react';
import './Input.scss';

export function Input(props) {
  const { onChange, ...registerProps } = props.register?.(props.name, props.rules) || {};

  function handleChange (event) {
    if(onChange){
      onChange(event);
    }
    props.onChange(event);
  }

  return (
    <div className='input'>
      <div className='input__title'>{props.title}</div>

      <div className='input__element'>
        <input
          className='input__input'
          value={props.value}
          onChange={handleChange}
          autoComplete={props.autoComplete}
          {...registerProps}
        />
      </div>
    </div>
  );
}