import React from 'react';
import './ScheduleBlock.scss';

export function ScheduleBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='scheduleBlock' onClick={handleClick}>
      <div className='scheduleBlock__brigade'>{props.brigade}</div>
      <div className='scheduleBlock__schedule'>{props.schedule}</div>
    </div>
  );
}