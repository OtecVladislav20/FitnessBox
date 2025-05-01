import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import ColorToggleSwitch from '../toggle/toggle';


export default function HeaderTrainer(): JSX.Element {
  return (
    <header className="header flex">
      <Link to={AppRoute.TrainerSession}>
        <img src="../img/logoFitnessBox.svg" alt="FitnessBox"/>
      </Link>
      <nav className='flex'>
        <Link to={AppRoute.TrainerSession} className='nav-link'>Тренировки</Link>
        <Link to={AppRoute.TrainerSession} className='nav-link'>Расписание</Link>
        <Link to={AppRoute.TrainerSession} className='nav-link'>Клиентки</Link>
      </nav>
      <div className='flex'>
        <p>Беру новые заказы</p>
        <ColorToggleSwitch/>
      </div>
      <div className='flex'>
        <button className='header-btn'>
          <img src="../img/user-img.svg" alt="user" className='qr-header'/>
        </button>
        <div>
          <p className='header-user-text'>Маслаков</p>
          <p className='header-user-text'>Владислав</p>
        </div>
      </div>
    </header>
  );
}
