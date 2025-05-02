import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function LogInPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <main className="signin-wrapper flex">
      <form action="" className="formSignIn flex">
        <img src="../img/logoFitnessBox.svg" alt="Logo" className="form-logo"/>
        <input type="text" className="form-input" placeholder="Иванов Иван Иванович"/>
        <input type="email" className="form-input" placeholder="Электронная почта"/>
        <input type="phone" className="form-input" placeholder="Номер телефона"/>
        <input type="text" className="form-input" placeholder="Дата рождения"/>
        <div className="flex password-block">
          <input type="password" className="form-input" placeholder="Пароль"/>
          <input type="password" className="form-input" placeholder="Пароль"/>
        </div>
        <div className='flex checkbox-wrapper'>
          <input type="checkbox" className='checkbox'/>
          <p className='form-btn-text'>Я согласен на обработку персональных данных</p>
        </div>
        <button className="form-btn" onClick={() => navigate(AppRoute.Code)}>Зарегистрироваться</button>
        <button className="form-btn-text" onClick={() => navigate(AppRoute.SignIn)}>Войти в аккаунт</button>
      </form>
      <p className="equipment-item">© 2025 FitnessBox. Все права защищены</p>
    </main>
  );
}
