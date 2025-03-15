import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';


export default function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <main className="signin-wrapper flex">
      <form action="" className="formSignIn flex">
        <img src="../img/logoFitnessBox.svg" alt="Logo" className="form-logo"/>
        <input type="text" className="form-input" placeholder="Клиент"/>
        <input type="email" className="form-input" placeholder="Электронная почта"/>
        <div className="flex password-block">
          <input type="password" className="form-input" placeholder="Пароль"/>
          <button className="form-btn-text">Забыли пароль?</button>
        </div>
        <button className="form-btn" onClick={() => navigate(AppRoute.Catalog)}>Войти</button>
        <button className="form-btn-text" onClick={() => navigate(AppRoute.LogIn)}>Зарегистрироваться, если у вас еще нет аккаунта</button>
      </form>
      <p className="equipment-item">© 2025 FitnessBox. Все права защищены</p>
    </main>
  );
}
