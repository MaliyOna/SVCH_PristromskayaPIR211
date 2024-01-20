import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import './BrigadesPage.scss';
import jsonData from '../../shared/data/data.json';
import { BrigadeBlock } from '../../shared/components/BrigadeBlock/BrigadeBlock';
import { ButtonColor } from '../../shared/components/Button/Button';
import { EditPopup } from '../../shared/components/EditPopup/EditPopup';
import ActiveLastBreadcrumb from '../../shared/components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { setJsonData } from '../../shared/data/actions';
import { useSelector, useDispatch } from 'react-redux';

export function BrigadesPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.jsonData);

  useEffect(() => {
    dispatch(setJsonData(jsonData));
  }, [dispatch]);

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
    setShowPopup(true);
  }

  return (
    <>
      <PageHead />
      <Content>
        <ActiveLastBreadcrumb targetPage="Бригады" />
        <div className='brigadesPage__title'>Бригады</div>

        {data.jsonData && data.jsonData.map(element =>
          <BrigadeBlock key={element.id} brigade={element.brigade} onClick={() => openPopup(element)} />
        )}

        <ButtonColor value="Добавить" handleClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}