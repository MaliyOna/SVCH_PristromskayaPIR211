import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Footer } from '../../shared/components/Footer/Footer';
import { Content } from '../../shared/components/Content/Content';
import { Menu } from '../../shared/components/Menu/Menu';
import jsonData from '../../shared/data/data.json';
import { AreaBlock } from '../../shared/components/AreaBlock/AreaBlock';
import './AreaPage.scss';

export function AreaPage() {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setData(jsonData);
    console.log(jsonData);
  }

  return (
    <>
      <PageHead />
      <Menu />
      <Content>
        <div className='areaPage__title'>Помещение и бригада</div>

        {
          data && data.map(element =>
            <AreaBlock key={element.id} area={element.area} brigade={element.brigade}/>
          )
        }
      </Content>
      <Footer />
    </>
  );
}