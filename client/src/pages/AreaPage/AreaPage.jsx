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
import 'blob-polyfill';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'

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
      console.log(data);
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

  function createDocumentExcel() {
    const transformedData = data.map(element => ({
      brigade: element.title,
      area: element.area.title,
      schedule: element.schedule.title,
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'data.xlsx');
  }

  function createDocumentWord() {
    const transformedData = data.map(element => ({
      brigade: element.title,
      area: element.area.title,
      schedule: element.schedule.title,
    }));
  
    const tableRows = transformedData.map(row => [
      row.brigade,
      row.area,
      row.schedule,
    ]);
  
    const table = [
      ['Brigade', 'Area', 'Schedule'],
      ...tableRows,
    ];
  
    const blob = new Blob([table.map(row => row.join('\t')).join('\n')], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
  
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'document.docx';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    toast.success('Документ успешно создан');
  }

  function createDocumentPDF() {
    const doc = new jsPDF();
    doc.text('Brigade  |  Area  |  Schedule', 20, 10);
  
    if (data && data.length > 0) {
      data.forEach((element, index) => {
        const row = `${element.title}  |  ${element.area.title}  |  ${element.schedule.title}`;
        doc.text(row, 20, 10 + (index + 1) * 10);
      });
    }
  
    doc.save('document.pdf');
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
        <div className='areaPage__save__button'>
          <ButtonColor value="Скачать Excel" handleClick={() => createDocumentExcel()} />
        </div>
        <div className='areaPage__save__button'>
          <ButtonColor value="Скачать Word" handleClick={() => createDocumentWord()} />
        </div>
        <div className='areaPage__save__button'>
          <ButtonColor value="Скачать PDF" handleClick={() => createDocumentPDF()} />
        </div>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен" />
      <Footer />
    </>
  );
}

