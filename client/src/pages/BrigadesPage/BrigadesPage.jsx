import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Menu } from '../../shared/components/Menu/Menu';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import './BrigadesPage.scss';
import jsonData from '../../shared/data/data.json';
import { BrigadeBlock } from '../../shared/components/BrigadeBlock/BrigadeBlock';

export function BrigadesPage() {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setData(jsonData);
  }

  return (
    <>
      <PageHead/>
      <Menu/>
      <Content>
        <div className='brigadesPage__title'>Бригады</div>

        {data && data.map(element => 
          <BrigadeBlock key={element.id} brigade={element.brigade}/>
        )}
      </Content>
      <Footer/>
    </>
  );
}