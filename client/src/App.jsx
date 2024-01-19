import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.scss';
import { AreaPage } from './pages/AreaPage/AreaPage';
import { BrigadesPage } from './pages/BrigadesPage/BrigadesPage';
import { SchedulePage } from './pages/SchedulePage/SchedulePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/area" element={<AreaPage />} />
          <Route path="/brigades" element={<BrigadesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route
                path="*"
                element={<Navigate to="/brigades" />}
              />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
