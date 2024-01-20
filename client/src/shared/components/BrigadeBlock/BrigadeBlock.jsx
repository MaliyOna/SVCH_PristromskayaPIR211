import React from 'react';
import './BrigadeBlock.scss';

export function BrigadeBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='brigadeBlock' onClick={handleClick}>
      <div className='brigadeBlock__brigade'>{props.brigade}</div>
    </div>
  );
}