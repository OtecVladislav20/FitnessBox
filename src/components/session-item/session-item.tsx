import moment from 'moment';
import { TFitnessBox } from '../../utils/fitness-boxes';
import { TSessions } from '../../utils/sessions';
import { TTrainer } from '../../utils/trainers';

type TSessionItem = {
  session: TSessions;
  fitnessBoxes: TFitnessBox[];
  trainers: TTrainer[];
}

export default function SessionItem({session, fitnessBoxes, trainers}: TSessionItem): JSX.Element {
  const nowDate = moment();

  const fitnessBox = fitnessBoxes.find((i) => session.boxId === i.boxId);
  const trainer = trainers.find((i) => session.trainerId === i.trainerId);

  return (
    <li className='session flex'>
      <div className='session-box-wrapper flex'>
        <img src="../img/FitnessBox.png" alt="" className='session-box-img'/>
        <div>
          <div>
            <p className='session-text'>{fitnessBox?.name}</p>
            <p className='session-text'>{fitnessBox?.adress}</p>
          </div>
          <button>Показать на карте</button>
        </div>
      </div>
      {session.trainerId === undefined ?
        <div className='session-box-wrapper flex'>
          <img src="../img/trainer-img.png" alt="" className='session-box-img'/>
          <div className='session-wrapper flex'>
            <div className='session-text-wrapper flex'>
              <p className='session-text'>Тренер не выбран</p>
              <div className='session-indicator-wrapper'>
                {session.acceptWorkout ?
                  <div className='session-indicator session-indicator-ready'></div> :
                  <div className='session-indicator session-indicator-waiting'></div>}
              </div>
            </div>
            <button>Выбрать тренера</button>
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
            {session.time[Object.keys(session.time)[0]] === nowDate.format('HH') ?
              '' :
              <button>Отменить выбор</button>}
          </div>
        </div>}
      <div className='session-time'>
        <p className='session-time-p'>{Object.keys(session.time)[0]}</p>
        <p className='session-time-p'>Время: {session.time[Object.keys(session.time)[0]]}:00</p>
      </div>
      {session.time[Object.keys(session.time)[0]] === nowDate.format('HH') ?
        <button className='session-btn-open'>Открыть</button> :
        <button className='session-btn-open session-btn-change'>Перенести</button>}
    </li>
  );
}
