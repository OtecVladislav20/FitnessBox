import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';


export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <main className="signin-wrapper flex">
      <form action="" className="formSignIn flex" onSubmit={handleSubmit}>
        <img src="../img/logoFitnessBox.svg" alt="Logo" className="form-logo"/>
        <input type="text" className="form-input" placeholder="Клиент"/>
        <input type="email" className="form-input" placeholder="Электронная почта" ref={loginRef}/>
        <div className="flex password-block">
          <input type="password" className="form-input" placeholder="Пароль" ref={passwordRef}/>
          <button className="form-btn-text">Забыли пароль?</button>
        </div>
        <button className="form-btn" type="submit" onClick={() => navigate(AppRoute.Catalog)}>Войти</button>
        <button className="form-btn-text" onClick={() => navigate(AppRoute.LogIn)}>Зарегистрироваться, если у вас еще нет аккаунта</button>
      </form>
      <p className="equipment-item">© 2025 FitnessBox. Все права защищены</p>
    </main>
  );
}
