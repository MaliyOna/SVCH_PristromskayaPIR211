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
      console.log(props.element);
      setArea(props.element.area ? props.element.area.title : " ");
      setBrigade(props.element.title || " ");
      setSchedule(props.element.schedule ? props.element.schedule.title : " ");
    }
  }, [props.element]);  

  async function saveElement() {
    const newElement = {
      _id: props.element._id,
      title: brigade,
      schedule: {
        _id: props.element.schedule._id,
        title: schedule
      },
      area: {
        _id: props.element.area._id,
        title: area
      }
    };

    await update(newElement);
    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

  async function deleteOneElement() {
    await deleteElement(props.element._id);
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
