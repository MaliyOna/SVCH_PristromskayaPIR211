import React, { useState } from 'react';
import './RegistrationPage.scss';
import { PageHead } from '../../shared/components/PageHead/PageHead';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../shared/components/Input/Input';
import { ButtonColor } from '../../shared/components/Button/Button';
import { createUser } from '../../shared/api/authApi';
import toast from 'react-hot-toast';

export function RegistrationPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginClick() {
    navigate('/login');
  }

  async function registrationClick() {
    if (login === "" || login === " ") {
      toast.error("Имя пользователя не должно быть пустым");
    }
    else if (password === "" || password === " ") {
      toast.error("Пароль не должен быть пустым");
    }
    else {
      try {
        const user = {
          userName: login,
          password: password
        }

        await createUser(user);
        loginClick();
      } catch (error) {
        toast.error("Ошибка сервера");
      }
    }
  }

  return (
    <div className='registrationPage'>
      <PageHead></PageHead>

      <div className='registrationPage__content'>
        <div className='registrationPage__content__block'>
          <div className='registrationPage__content__block__title'>Регистрация</div>

          <div className='registrationPage__content__block__inputs'>
            <Input title="Логин" value={login} onChange={(value) => setLogin(value)} />
            <Input title="Пароль" value={password} onChange={(value) => setPassword(value)} />
          </div>

          <div className='registrationPage__content__block__buttons'>
            <div className='registrationPage__content__block__buttons__login'>
              <ButtonColor value="Вход" handleClick={() => loginClick()} />
            </div>

            <div className='registrationPage__content__block__buttons__registration'>
              <ButtonColor value="Регистрация" handleClick={() => registrationClick()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}