import React, { useEffect, useState } from 'react';
import './SchedulePage.scss';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Menu } from '../../shared/components/Menu/Menu';
import { Content } from '../../shared/components/Content/Content';
import { Footer } from '../../shared/components/Footer/Footer';
import jsonData from '../../shared/data/data.json';
import { ScheduleBlock } from '../../shared/components/ScheduleBlock/ScheduleBlock';

export function SchedulePage() {
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
        <div className='schedulePage__title'>График</div>

        {data && data.map(element =>
          <ScheduleBlock schedule={element.schedule} brigade={element.brigade}/>
        )}
      </Content>
      <Footer/>
    </>
  );
}