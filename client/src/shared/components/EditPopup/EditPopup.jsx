import React, { useEffect, useState } from 'react';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './EditPopup.scss';
import { Input } from '../Input/Input';

import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { deleteElement, update } from '../../api/allApi';

export function EditPopup(props) {
  const [area, setArea] = useState();
  const [brigade, setBrigade] = useState();
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    if (props.element) {
      setArea(props.element.area);
      setBrigade(props.element.brigade);
      setSchedule(props.element.schedule)
    }
  }, [props.element])

  async function saveElement() {
    const newElement = {
      id: props.element.id,
      brigade: brigade,
      schedule: schedule,
      area: area
    };

    await update(newElement);
    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

  async function deleteOneElement() {
    console.log(props.element.id)
    await deleteElement(props.element.id);
    closeElement();
  }

  return (
    <div className='editPopup'>
      <PopupWindow open={props.open}>
        <div className='editPopup__content'>
          <div className='editPopup__content__title'>
            Редактирование:
          </div>

          <div className='editPopup__content__area'>
            {area && <Input title="Площать" value={area} onChange={(value) => setArea(value)} />}
          </div>

          <div className='editPopup__content__brigade'>
            {brigade && <Input title="Бригада" value={brigade} onChange={(value) => setBrigade(value)} />}
          </div>

          <div className='editPopup__content__schedule'>
            {schedule && <Input title="Расписание" value={schedule} onChange={(value) => setSchedule(value)} />}
          </div>

          <div className='editPopup__content__buttons'>
            <ButtonsGroup save={saveElement} close={closeElement} delete={deleteOneElement}/>
          </div>
        </div>
      </PopupWindow>
    </div>
  );
}