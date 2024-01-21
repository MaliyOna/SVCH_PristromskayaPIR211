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
import toast from 'react-hot-toast';

export function SchedulePage() {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
  const [role, setRole] = useState("USER");

  useEffect(() => {
    loadData();
    setRole(localStorage.getItem("role") || "USER");
  }, [])

  async function loadData() {
    try {
      const data = await getAll();
      setData(data);
    } catch (error) {
      toast.error("Ошибка сервера")
    }
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
    
    const data = await create(targetElement);
    setTargetElement(data.brigade);

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
          <ScheduleBlock key={element._id} schedule={element.schedule.title} brigade={element.title} onClick={() => openPopup(element)} />
        )}

        {role !== "USER" && <ButtonColor value="Добавить" handleClick={() => addNewElement()} />}
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}
