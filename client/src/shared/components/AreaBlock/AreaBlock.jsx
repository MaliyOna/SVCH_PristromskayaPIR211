import React from 'react';
import './AreaBlock.scss';

export function AreaBlock(props) {
  return (
    <div className='areaBlock'>
      <div className='areaBlock__area'>{props.area}</div>
      <div className='areaBlock__brigade'>{props.brigade}</div>
    </div>
  );
}