import React from 'react';
import './Content.scss';

export function Content(props) {
  return (
    <div className='content'>
      {
        props.children
      }
    </div>
  );
}