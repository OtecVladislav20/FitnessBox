import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function CodePage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <main className="signin-wrapper flex">
      <form action="" className="formSignIn flex">
        <img src="../img/logoFitnessBox.svg" alt="Logo" className="form-logo"/>
        <div className="form-left flex">
          <p className="form-btn-text form-p">Вам на почту отпрвален код потверждения</p>
          <input type="text" className="form-input" placeholder="Код"/>
          <button className="form-btn-text">Отправить код еще раз?</button>
        </div>
        <button className="form-btn" onClick={() => navigate(AppRoute.Catalog)}>Отправить</button>
      </form>
      <p className="equipment-item">© 2025 FitnessBox. Все права защищены</p>
    </main>
  );
}
