import React, { useEffect, useState } from 'react';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { Footer } from '../../shared/components/Footer/Footer';
import { Content } from '../../shared/components/Content/Content';
import './ProfilePage.scss';
import { Input } from '../../shared/components/Input/Input';
import { ButtonColor } from '../../shared/components/Button/Button';
import { changeRole, updatePassword } from '../../shared/api/authApi';
import { CheckboxCheck } from '../../shared/components/CheckboxCheck/CheckboxCheck';
import { removeToken } from '../../shared/helpers/token';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function ProfilePage() {
  const [role, setRole] = useState("USER");
  const [userName, setUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRole(localStorage.getItem("role") || "USER");
    setUserName(localStorage.getItem("userName") || "");
  }, [])

  async function updatePasswordClick() {
    if (oldPassword === "" || oldPassword === " ") {
      toast.error("Введите старый пароль")
    } else if (newPassword === "" || newPassword === " ") {
      toast.error("Введите новый пароль")
    }
    else {
      const data = {
        userName: userName,
        oldPassword: oldPassword,
        newPassword: newPassword
      }

      const response = await updatePassword(data);

      if (response.status === 200) {
        toast.success("Пароль обновлен");
      }
      else {
        toast.error("Ошибка сервера")
      }
    }
  }

  async function logout() {
    removeToken();
    navigate(`/login`);
  }

  async function updateRole(event) {
    try {
      await changeRole(event, localStorage.getItem("userName"));
      logout();
    } catch (error) {
      toast.error("Ошибка сервера");
    }
  }

  return (
    <>
      <PageHead />
      <Content>
        <div className='profilePage'>
          <div className='profilePage__userName'>
            Имя пользователя {userName}
          </div>

          <div className='profilePage__password'>
            <div className='profilePage__password__oldPassword'>
              <Input title="Старый пароль" value={oldPassword} onChange={(value) => setOldPassword(value)} />
            </div>
            <div className='profilePage__password__newPassword'>
              <Input title="Новый пароль" value={newPassword} onChange={(value) => setNewPassword(value)} />
            </div>
          </div>

          <ButtonColor value="Обновить пароль" handleClick={() => updatePasswordClick()} />

          <div className='profilePage__role'>
            <CheckboxCheck onChange={(event) => updateRole(event)} admin={role === "ADMIN"} />
          </div>

          <div className='profilePage__logout'>
            <ButtonColor value="Выход" handleClick={() => logout()} />
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}
