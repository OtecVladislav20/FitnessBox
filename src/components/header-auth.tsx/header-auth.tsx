import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


export default function HeaderAuth(): JSX.Element {
  return (
    <header className="header flex">
      <Link to={AppRoute.Catalog}>
        <img src="../img/logoFitnessBox.svg" alt="FitnessBox"/>
      </Link>
      <nav className='flex'>
        <Link to='/' className='nav-link'>Мои сеансы</Link>
        <Link to={AppRoute.Catalog} className='nav-link'>Каталог</Link>
        <Link to={AppRoute.Trainers} className='nav-link'>Тренеры</Link>
        <Link to={AppRoute.Subcribe} className='nav-link'>Подписка</Link>
        <Link to='/' className='nav-link'>Вакансии</Link>
      </nav>
      <div className='flex'>
        <button className='header-btn'>
          <img src="../img/qr.svg" alt="qr" className='qr-header'/>
        </button>
        <button className='header-btn'>
          <img src="../img/bell.svg" alt="bell" className='qr-header'/>
        </button>
        <button className='header-btn'>
          <img src="../img/user-img.svg" alt="user" className='qr-header'/>
        </button>
        <div>
          <p className='header-user-text'>200 р</p>
          <p className='header-user-text'>Владислав</p>
        </div>
      </div>
    </header>
  );
}
