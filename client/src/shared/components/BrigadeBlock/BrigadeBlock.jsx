import React from 'react';
import './BrigadeBlock.scss';

export function BrigadeBlock(props) {
  return (
    <div className='brigadeBlock'>
      <div className='brigadeBlock__brigade'>{props.brigade}</div>
    </div>
  );
}