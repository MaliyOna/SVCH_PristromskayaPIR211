import React from 'react';
import './ScheduleBlock.scss';

export function ScheduleBlock(props) {
  return (
    <div className='scheduleBlock'>
      <div className='scheduleBlock__brigade'>{props.brigade}</div>
      <div className='scheduleBlock__schedule'>{props.schedule}</div>
    </div>
  );
}