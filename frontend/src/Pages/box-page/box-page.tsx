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
import { postSessions } from '../../store/action';
import { fetchFitnessBoxAction } from '../../store/api-actions';

moment.locale('ru');


export default function BoxPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchFitnessBoxAction(id));
  }, [dispatch]);

  const fitnessBox = useAppSelector((state) => state.fitnessBox);

  // useEffect(() => {
  //   dispatch(fetchFitnessBoxesAction());
  //   // dispatch(fetchSessions());
  // }, [dispatch]);

  // const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);
  // const box = fitnessBoxes.find((i) => (i.boxId === id));

  const sessionsAll = useAppSelector((state) => state.sessions);
  const sessionsBoxId = sessionsAll.filter((i) => (i.boxId === id));

  const now = moment();
  const [currentDate, setBookedDate] = useState(now.format('MM.DD'));

  const lastDate = moment().subtract(1, 'day');
  const bookedDates = Array.from({ length: COUNT_DAYS_TO_BOOKED_DEFAULT }, () => lastDate.add(1, 'day').clone());

  const [hoursBooked, setHoursBooked] = useState<string[]>([]);

  useEffect(() => {
    const sessionsBookedDate = sessionsBoxId.filter((i) => i.time.date === currentDate);

    const hours: string[] = [];
    sessionsBookedDate.map((i) => (
      hours.push(i.time.hour)
    ));
    setHoursBooked(hours);
  }, [currentDate]);

  const handleChangeBookedDate = (date: moment.Moment) => {
    setBookedDate(date.format('MM.DD'));
  };

  // Бронирование спортаза при нажатии на кнопку
  const [activeBookedTime, setActiveBookedTime] = useState([]);

  const handleChooseActiveTime = (time: string) => {
    const obj = {
      sessionId: (Math.random() * 100).toString(),

      boxId: fitnessBox?.id,
      userId: '1',

      trainerId: undefined,
      acceptWorkout: false,

      time: {
        date: currentDate,
        hour: time,
      },
      friend: false,
    };
    setActiveBookedTime((e) => [...e, obj]);
  };

  const handlePostSessions = () => {
    dispatch(postSessions(activeBookedTime));
    setActiveBookedTime([]);
  };

  if (!fitnessBox) {
    return <Error/>;
  }
  return (
    <>
      <HeaderAuth/>
      <main className='booked'>
        <section className='booked-date'>
          <div className='booked-date-wrapper'>
            {bookedDates.map((day) => (
              <button key={day.unix()} className={`booked-date-btn ${day.format('MM.DD') === currentDate ? 'booked-date-btn--active' : ''}`} onClick={() => handleChangeBookedDate(day)}>
                {moment(day).format('dddd, D MMMM')}
              </button>
            ))}
          </div>
        </section>
        <section className='flex mb-50'>
          <div className='booked-time'>
            {BOOKED_HOUR.map((i) => (
              <BookedTimeButton key={i.hour} hour={i.hour} price={i.price} hoursBooked={hoursBooked} handleChooseActiveTime={handleChooseActiveTime}/>
            ))}
          </div>
          <div className='booked-payment'>
            <button onClick={() => handlePostSessions()}>Оплатить</button>
          </div>
        </section>

        <section className='flex mb-50'>
          <img src="../img/FitnessBox.png" alt="Спортивный зал" />
          <div>
            <p>{fitnessBox?.name}</p>
            <p>{fitnessBox?.adress}</p>
            <p>{fitnessBox?.description}</p>
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
