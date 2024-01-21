import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import './BrigadesPage.scss';
import { BrigadeBlock } from '../../shared/components/BrigadeBlock/BrigadeBlock';
import { ButtonColor } from '../../shared/components/Button/Button';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import ActiveLastBreadcrumb from '../../shared/components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { create, getAll } from '../../shared/api/allApi';
import toast from 'react-hot-toast';

export function BrigadesPage() {
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
    try {
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
    } catch (error) {
      toast.error("Ошибка сервера")
    }
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="Бригады" />
        <div className='brigadesPage__title'>Бригады</div>

        {data && data.map(element =>
          <BrigadeBlock key={element._id} brigade={element.title} onClick={() => openPopup(element)} />
        )}

        {role !== "USER" &&  <ButtonColor value="Добавить" handleClick={() => addNewElement()} />}
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}
