import React from 'react';
import './Footer.scss';

export function Footer() {
  return (
    <div className='footer'>
      <div className='footer__information'>
        Данный веб-сайт разработан для управления различными бригадами для уборки, а также указывает где и какие бриды должны убирать. Также видно время работы бригады.
      </div>
      
      <div className='footer__contacts'>
        <div>Email: uborka@gmail.com</div>
        <div>Телефон: +375 22 222 22 22</div>
      </div>
    </div>
  );
}