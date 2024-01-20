import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Footer } from '../../shared/components/Footer/Footer';
import { Content } from '../../shared/components/Content/Content';
import jsonData from '../../shared/data/data.json';
import { AreaBlock } from '../../shared/components/AreaBlock/AreaBlock';
import './AreaPage.scss';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import { ButtonColor } from '../../shared/components/Button/Button';
import SimpleSnackbar from '../../shared/components/SimpleSnackbar/SimpleSnackbar';
import ActiveLastBreadcrumb from '../../shared/components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';

export function AreaPage() {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
    setOpenSnackbar(true);
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="Площади"/>
        <div className='areaPage__title'>Помещение и бригада</div>
        {
          data && data.map(element =>
            <AreaBlock key={element.id} element={element} onClick={() => openPopup(element)} />
          )
        }

        <ButtonColor value="Добавить" handleClick={() => addNewElement()}/>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()}/>
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен"/>
      <Footer />
    </>
  );
}