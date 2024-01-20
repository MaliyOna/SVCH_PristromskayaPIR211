import React from 'react';
import './AreaBlock.scss';

export function AreaBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='areaBlock' onClick={handleClick}>
      <div className='areaBlock__area'>{props.area}</div>
      <div className='areaBlock__brigade'>{props.brigade}</div>
    </div>
  );
}