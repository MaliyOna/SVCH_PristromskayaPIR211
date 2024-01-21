import React, { useState } from 'react';
import './LoginPage.scss';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../shared/components/Input/Input';
import { ButtonColor } from '../../shared/components/Button/Button';
import { getRole, loginUser } from '../../shared/api/authApi';
import toast from 'react-hot-toast';

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginClick() {
    if (login === "" || login === " ") {
      toast.error("Имя пользователя не должно быть пустым")
    }
    else if (password === "" || password === " ") {
      toast.error("Пароль не должен быть пустым")
    }
    else {
      try {
        const user = {
          userName: login,
          password: password
        }
    
        const data = await loginUser(user);
    
        if (data.status === 200) {
          localStorage.setItem("userName", login);
    
          const role = await getRole(login);
    
          localStorage.setItem("role", role.data.role);
          navigate(`/area`);
        }
      } catch (error) {
        toast.error("Ошибка сервера")
      }
    }
  }

  function registrationClick() {
    navigate('/registration')
  }

  return (
    <div className='loginPage'>
      <PageHead></PageHead>

      <div className='loginPage__content'>
        <div className='loginPage__content__block'>
          <div className='loginPage__content__block__title'>Вход</div>

          <div className='loginPage__content__block__inputs'>
            <Input title="Логин" value={login} onChange={(value) => setLogin(value)} />
            <Input title="Пароль" value={password} onChange={(value) => setPassword(value)} />
          </div>

          <div className='loginPage__content__block__newPassword' onClick={() => navigate("/updatePassword")}>Забыл пароль</div>

          <div className='loginPage__content__block__buttons'>
            <div className='loginPage__content__block__buttons__login'>
              <ButtonColor value="Вход" handleClick={() => loginClick()} />
            </div>
            <div className='loginPage__content__block__buttons__registration'>
              <ButtonColor value="Регистрация" handleClick={() => registrationClick()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}