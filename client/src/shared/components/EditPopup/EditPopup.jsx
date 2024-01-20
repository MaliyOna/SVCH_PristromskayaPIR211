import React, { useEffect, useState } from 'react';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './EditPopup.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import jsonData from '../../data/data.json';

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

    const data = await jsonData.filter(element => element.id != props.element.id);
    data.push(newElement);
    console.log(data);
    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

  async function deleteElement() {
    const data = await jsonData.filter(element => element.id != props.element.id);
    console.log(data);
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
            {area && <Input title="Площать" value={area} onChange={(event) => setArea(event.target.value)} />}
          </div>

          <div className='editPopup__content__brigade'>
            {brigade && <Input title="Бригада" value={brigade} onChange={(event) => setBrigade(event.target.value)} />}
          </div>

          <div className='editPopup__content__schedule'>
            {schedule && <Input title="Расписание" value={schedule} onChange={(event) => setSchedule(event.target.value)} />}
          </div>

          <div className='editPopup__content__buttons'>
            <div className='editPopup__content__buttons__work'>
              <Button value="Сохранить" onClick={saveElement} />
              <Button value="Отмена" onClick={closeElement} color="red" />
            </div>

            <div className='editPopup__content__buttons__delete'>
              <Button value="Удалить" onClick={deleteElement} color="red" />
            </div>
          </div>
        </div>
      </PopupWindow>
    </div>
  );
}