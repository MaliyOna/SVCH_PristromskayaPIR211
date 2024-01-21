import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Footer } from '../../shared/components/Footer/Footer';
import { Content } from '../../shared/components/Content/Content';
import { AreaBlock } from '../../shared/components/AreaBlock/AreaBlock';
import './AreaPage.scss';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import { ButtonColor } from '../../shared/components/Button/Button';
import SimpleSnackbar from '../../shared/components/SimpleSnackbar/SimpleSnackbar';
import ActiveLastBreadcrumb from '../../shared/components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { create, getAll } from '../../shared/api/allApi';
import toast from 'react-hot-toast';

export function AreaPage() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
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

      const data = await create(targetElement);
      setTargetElement(data.brigade);

      await loadData()
      setShowPopup(true);
      setOpenSnackbar(true);
    } catch (error) {
      toast.error("Ошибка сервера")
    }

  }

  function createDocument() {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.json';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="Площади" />
        <div className='areaPage__title'>Помещение и бригада</div>
        {
          data && data.map(element =>
            <AreaBlock key={element._id} area={element.area.title} brigade={element.title} onClick={() => openPopup(element)} />
          )
        }

        {role !== "USER" && <ButtonColor value="Добавить" handleClick={() => addNewElement()} />}
        <div className='areaPage__save__button'>
          <ButtonColor value="Скачать" handleClick={() => createDocument()} />
        </div>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен" />
      <Footer />
    </>
  );
}
