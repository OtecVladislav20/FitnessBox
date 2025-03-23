import { TSessions } from '../../utils/sessions';

type TSessionItem = {
  session: TSessions;
}

export default function SessionItem({session}: TSessionItem): JSX.Element {
  return (
    <li className='session flex'>
      <div className='session-box-wrapper flex'>
        <img src="../img/FitnessBox.png" alt="" className='session-box-img'/>
        <div>
          <div>
            <p className='session-text'>dsfsdfsdfsadf</p>
            <p className='session-text'>Менделеева 11</p>
          </div>
          <button>Показать на карте</button>
        </div>
      </div>
      <div className='session-box-wrapper flex'>
        <img src="../img/trainer-img.png" alt="" className='session-box-img'/>
        <p className='session-text'>Александра Александрова Александрова</p>
        <div className='session-indicator-wrapper'>
          <div className='session-indicator session-indicator-ready'></div>
        </div>
      </div>
      <div className='session-time'>
        <p className='session-time-p'>23.03.2025</p>
        <p className='session-time-p'>Время: 12:00</p>
      </div>
      <button className='session-btn-open'>Открыть</button>
    </li>
  );
}
