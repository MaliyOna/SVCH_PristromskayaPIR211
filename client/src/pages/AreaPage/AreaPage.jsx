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
import { setJsonData } from '../../shared/data/actions';
import jsonData from '../../shared/data/data.json';
import { useDispatch, useSelector } from 'react-redux';

export function AreaPage() {
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const localData = useSelector((state) => state.jsonData);

  useEffect(() => {
    dispatch(setJsonData(jsonData));
  }, []);

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
    };

    setTargetElement(targetElement);
    setOpenSnackbar(true);
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="Площади"/>
        <div className='areaPage__title'>Помещение и бригада</div>
        {
          localData.jsonData && localData.jsonData.map(element =>
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

