import moment from 'moment';
import { TFitnessBox } from '../../utils/fitness-boxes';
import { TSessions } from '../../utils/sessions';
import { TTrainer } from '../../utils/trainers';
import Drop from './drop';


type TSessionItem = {
  session: TSessions;
  fitnessBoxes: TFitnessBox[];
  trainers: TTrainer[];
}

export default function SessionItem({session, fitnessBoxes, trainers}: TSessionItem): JSX.Element {
  const nowDate = moment();

  const fitnessBox = fitnessBoxes.find((i) => session.fitnessBoxId === i.id);
  const trainer = trainers.find((i) => session.trainerId === i.trainerId);

  return (
    <li className='session flex'>
      <div className='session-box-wrapper flex'>
        <img src="../img/FitnessBox.png" alt="" className='session-box-img'/>
        <div className='flex my-session-fitness-box-wrapper'>
          <div>
            <p className='session-text'>FitnessBox-1</p>
            <p className='session-text'>Менделеева 11</p>
          </div>
          <button className='show-on-map'>Показать на карте</button>
        </div>
      </div>
      {session.trainerId === undefined || session.trainerId === '0' ?
        <div className='session-box-wrapper flex'>
          <img src="../img/trainer-empty.png" alt="" className='session-box-img'/>
          <div className='session-wrapper flex'>
            <div className='session-text-wrapper flex'>
              <p className='session-text'>Тренер не выбран</p>
              <div className='session-indicator-wrapper'>
                {session.acceptWorkout ?
                  <div className='session-indicator session-indicator-ready'></div> :
                  <div className='session-indicator session-indicator-waiting'></div>}
              </div>
            </div>
            <Drop/>
          </div>
        </div> :
        <div className='session-box-wrapper flex'>
          <img src="../img/trainer-img.png" alt="" className='session-box-img'/>
          <div className='session-wrapper flex'>
            <div className='session-text-wrapper flex'>
              <p className='session-text'>{trainer?.name}</p>
              <div className='session-indicator-wrapper'>
                <div className='session-indicator session-indicator-ready'></div>
              </div>
            </div>
            {session.hour === nowDate.format('HH') ?
              '' :
              <button className='delete-chose'>Отменить выбор</button>}
          </div>
        </div>}
      <div className='session-time'>
        <p className='session-time-p'>{session.date}</p>
        <p className='session-time-p'>Время: {session.hour}:00</p>
      </div>
      {session.hour === nowDate.format('HH') && session.date === nowDate.format('MM.DD') ?
        <button className='session-btn-open'>Открыть</button> :
        <button className='session-btn-open session-btn-change'>Перенести</button>}
    </li>
  );
}
