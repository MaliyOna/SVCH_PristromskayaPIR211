import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.scss';
import { AreaPage } from './pages/AreaPage/AreaPage';
import { BrigadesPage } from './pages/BrigadesPage/BrigadesPage';
import { SchedulePage } from './pages/SchedulePage/SchedulePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/area" element={<AreaPage />} />
          <Route path="/brigades" element={<BrigadesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/updatePassword" element={<ChangePassword />} />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
