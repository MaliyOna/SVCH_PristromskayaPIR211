import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  const navigate = useNavigate();

  return (
    <div className='menu'>
      <div className='menu__element' onClick={()=> navigate(`/brigades`)}>Бригады</div>
      <div className='menu__element' onClick={()=> navigate(`/schedule`)}>График</div>
      <div className='menu__element' onClick={()=> navigate(`/area`)}>Площади</div>
    </div>
  );
}