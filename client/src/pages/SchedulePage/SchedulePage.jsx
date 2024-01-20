import React, { useEffect, useState } from 'react';
import './SchedulePage.scss';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import { ScheduleBlock } from '../../shared/components/ScheduleBlock/ScheduleBlock';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import { ButtonColor } from '../../shared/components/Button/Button';
import ActiveLastBreadcrumb from '../../shared/components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { create, getAll } from '../../shared/api/allApi';

export function SchedulePage() {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    const data = await getAll();
    setData(data);
  }

  function openPopup(element) {
    setTargetElement(element);
    setShowPopup(true);
  }

  async function closePopup() {
    setShowPopup(false);
    await loadData();
  }

  async function addNewElement() {
    const targetElement = {
      id: 4,
      area: "default",
      brigade: "default",
      schedule: "default"
    }

    setTargetElement(targetElement);

    await create(targetElement);

    await loadData()
    setShowPopup(true);
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="График" />
        <div className='schedulePage__title'>График</div>

        {data && data.map(element =>
          <ScheduleBlock key={element.id} schedule={element.schedule} brigade={element.brigade} onClick={() => openPopup(element)} />
        )}

        <ButtonColor value="Добавить" handleClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}
