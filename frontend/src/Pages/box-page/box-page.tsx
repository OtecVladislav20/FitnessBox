import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { BOOKED_HOUR, COUNT_DAYS_TO_BOOKED_DEFAULT } from '../../const';
import moment from 'moment';
import 'moment/locale/ru';
import BookedTimeButton from '../../components/booked-time-button/booked-time-button';
import { fetchFitnessBoxAction, fetchSessionsToBoxAction, postSessionsAction } from '../../store/api-actions';
import { useAuth } from '../../helpers/common';

moment.locale('ru');


export default function BoxPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const { userId } = useAuth();

  useEffect(() => {
    dispatch(fetchFitnessBoxAction(id));
    dispatch(fetchSessionsToBoxAction(id));
  }, [dispatch]);

  const fitnessBox = useAppSelector((state) => state.fitnessBox);
  const sessionsToBox = useAppSelector((state) => state.sessionsToBox);


  const now = moment();
  const [currentDate, setBookedDate] = useState(now.format('MM.DD'));

  const lastDate = moment().subtract(1, 'day');
  const bookedDates = Array.from({ length: COUNT_DAYS_TO_BOOKED_DEFAULT }, () => lastDate.add(1, 'day').clone());

  // Забронированные часы на выбранный день
  const [hoursBooked, setHoursBooked] = useState<string[]>([]);

  useEffect(() => {
    const sessionsBookedDate = sessionsToBox.filter((i) => i.date === currentDate);
    const hours: string[] = [];
    sessionsBookedDate.map((i) => (
      hours.push(i.hour)
    ));
    setHoursBooked(hours);
  }, [currentDate]);

  const handleChangeBookedDate = (date: moment.Moment) => {
    setBookedDate(date.format('MM.DD'));
  };


  // Бронирование спортаза при нажатии на кнопку
  const [activeBookedTime, setActiveBookedTime] = useState([]);

  const handleChooseActiveTime = (currentHour: string) => {
    const obj = {
      fitnessBoxId: id,
      userId: userId,
      trainerId: undefined,
      acceptWorkout: false,
      friend: false,
      date: currentDate,
      hour: currentHour,
    };
    setActiveBookedTime((e) => [...e, obj]);
  };

  console.log(activeBookedTime);

  const handlePostSessions = () => {
    dispatch(postSessionsAction(activeBookedTime));
  };

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
