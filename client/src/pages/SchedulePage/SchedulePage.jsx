import React, { useEffect, useState } from 'react';
import './SchedulePage.scss';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Menu } from '../../shared/components/Menu/Menu';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import jsonData from '../../shared/data/data.json';
import { ScheduleBlock } from '../../shared/components/ScheduleBlock/ScheduleBlock';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import { Button } from '../../shared/components/Button/Button';

export function SchedulePage() {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setData(jsonData);
  }

  function openPopup(element) {
    setTargetElement(element);
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  function addNewElement() {
    const targetElement = {
      id: 4,
      area: "default",
      brigade: "default",
      schedule: "default"
    }

    setTargetElement(targetElement);

    data.push(targetElement);
    console.log(data);
    setShowPopup(true);
  }

  return (
    <>
      <PageHead />
      <Menu />
      <Content>
        <div className='schedulePage__title'>График</div>

        {data && data.map(element =>
          <ScheduleBlock key={element.id} schedule={element.schedule} brigade={element.brigade} onClick={() => openPopup(element)} />
        )}

        <Button value="Добавить" onClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}