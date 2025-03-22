import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { BOOKED_HOUR, COUNT_DAYS_TO_BOOKED_DEFAULT } from '../../const';
import moment from 'moment';
import 'moment/locale/ru';
import BookedTimeButton from '../../components/booked-time-button/booked-time-button';
import Error from '../error/error';
import { fetchFitnessBoxes, fetchSessions } from '../../store/action';

moment.locale('ru');


export default function BoxPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFitnessBoxes());
    dispatch(fetchSessions());
  }, [dispatch]);

  const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);
  const sessionsAll = useAppSelector((state) => state.sessions);
  const sessionsBoxId = sessionsAll.filter((i) => (i.boxId === id));

  const box = fitnessBoxes.find((i) => (i.boxId === id));

  //Текущая дата
  const currentDate = moment();
  //Дата для создания массива
  const totalDate = moment().subtract(1, 'day');
  //Массив всех чисел для выбора
  const bookedDates = Array.from({ length: COUNT_DAYS_TO_BOOKED_DEFAULT }, () => totalDate.add(1, 'day').clone());

  //Все сессии забронированные на изначальное время
  const sessionsBookedDate = sessionsBoxId.filter((i) => Object.keys(i.time)[0] === currentDate.format('DD.MM'));

  //Какая дата сейчас выбрана
  const [bookedDate, setBookedDate] = useState(currentDate.format('DD.MM'));
  //Массив сессий на выбранное время
  const [_, setsessionsCurrent] = useState(sessionsBookedDate);
  //Массив всех забронированных часов
  const [hoursBooked, setHoursBooked] = useState([]);

  useEffect(() => {
    const changeSessionsDate = sessionsBoxId.filter((i) => Object.keys(i.time)[0] === bookedDate);
    setsessionsCurrent(changeSessionsDate);

    const newHoursBooked: string[] = [];
    changeSessionsDate.map((i) => (
      newHoursBooked.push(i.time[bookedDate])
    ));
    setHoursBooked(newHoursBooked);
  }, [bookedDate]);

  const handleChangeBookedDate = (date: moment.Moment) => {
    setBookedDate(date.format('DD.MM'));
  };

  /////////////////////////////////////////////////////

  if (!box) {
    return <Error/>;
  }
  return (
    <>
      <HeaderAuth/>
      <main className='booked'>
        <section className='booked-date'>
          <div className='booked-date-wrapper'>
            {bookedDates.map((day, index) => (
              <button key={index} className={`booked-date-btn ${day.format('DD.MM') === bookedDate ? 'booked-date-btn--active' : ''}`} onClick={() => handleChangeBookedDate(day)}>
                {moment(day).format('dddd, D MMMM')}
              </button>
            ))}
          </div>
        </section>
        <section className='flex mb-50'>
          <div className='booked-time'>
            {BOOKED_HOUR.map((i) => (
              <BookedTimeButton key={i.hour} hour={i.hour} price={i.price} hoursBooked={hoursBooked}/>
            ))}
          </div>
          <div>Оплата</div>
        </section>

        <section className='flex mb-50'>
          <img src="../img/FitnessBox.png" alt="Спортивный зал" />
          <div>
            <p>{box?.name}</p>
            <p>{box?.adress}</p>
            <p>{box?.description}</p>
          </div>
        </section>

        <section className='flex'>
          <div className='equipment-block flex mr-30'>
            <h2 className='h2-title'>Оборудование</h2>
            <div className='equipment-text flex'>
              <ul className='equipment-list'>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Блины</li>
                <li className='equipment-item'>Кривой и прямой гриф</li>
                <li className='equipment-item'>Беговая дорожка</li>
                <li className='equipment-item'>Эллипс</li>
                <li className='equipment-item'>Универсальная скамья</li>
                <li className='equipment-item'>Машина смита</li>
                <li className='equipment-item'>Нижний и верхний блок</li>
                <li className='equipment-item'>Присед</li>
                <li className='equipment-item'>Жим лежа</li>
                <li className='equipment-item'>Баттерфлай</li>
                <li className='equipment-item'>Турник</li>
                <li className='equipment-item'>Эластичные ленты</li>
                <li className='equipment-item'>Коврик</li>
              </ul>
            </div>
          </div>
          <div className='booked-images'>
            <img src="../img/FitnessBox.png" alt="Спортивный зал" className='booked-image'/>
            <img src="../img/FitnessBox.png" alt="Спортивный зал" className='booked-image'/>
            <img src="../img/FitnessBox.png" alt="Спортивный зал" className='booked-image'/>
            <img src="../img/FitnessBox.png" alt="Спортивный зал" className='booked-image'/>
          </div>
        </section>

        <section>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
