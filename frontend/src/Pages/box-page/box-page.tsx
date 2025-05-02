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
import { useAuth } from '../../hooks/use-auth';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


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
      trainerId: '1',
      acceptWorkout: false,
      friend: false,
      date: currentDate,
      hour: currentHour,
    };
    setActiveBookedTime((e) => [...e, obj]);
  };

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
          <div className='flex booked-payment'>
            <div>
              <div>
                <p className='booked-payment-count'>Вам доступно еще <b>2/6 бронирований</b></p>
                <div className='flex'>
                  <p className='booked-payment-sub-text'>Увеличить кол-во бронирований</p>
                  <button className='btn-reset'>
                    <img src="../img/plus.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <p className='price-text'>............................................................</p>
            <div>
              <p className='price-text'>Итог: <b>350 руб</b></p>
              <button className='booked-payment-btn' onClick={() => handlePostSessions()}>Оплатить</button>
            </div>
          </div>
        </section>

        <section className='flex mb-50'>
          <img src="../img/FitnessBox.png" alt="Спортивный зал" className='box-page-preview-img'/>
          <div>
            <div className='flex'>
              <p className='box-page-name'>{fitnessBox?.name}</p>
              <p className='box-page-name'>{fitnessBox?.adress}</p>
            </div>
            <p className='box-page-text'>{fitnessBox?.description}</p>
            <p className='box-page-text'>{fitnessBox?.description}</p>
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

        <div>
          <Splide
            options={ {
              autoStart: true,
              arrows: false,
              pagination: false,
              drag   : 'free',
              type: 'loop',
              focus  : 'center',
              perPage: 2,
              autoScroll: {
                speed: 1,
              },
            } }
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <div className='slide-item'>
                <div className='flex slide-title-wrapper'>
                  <div>
                    <p className='slide-text mb-10'>Владислав</p>
                    <div>
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                    </div>
                  </div>
                  <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-logo'/>
                </div>
                <p className='slide-text'>Тренер поможет добиться тебе желаемого результата, составит индивидуальную программу и план питания, покажет технику упражнений и поможет сохранить мотивацию и регульярноть тренировок!</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='slide-item'>
                <div className='flex slide-title-wrapper'>
                  <div>
                    <p className='slide-text mb-10'>Владислав</p>
                    <div>
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                    </div>
                  </div>
                  <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-logo'/>
                </div>
                <p className='slide-text'>Тренер поможет добиться тебе желаемого результата, составит индивидуальную программу и план питания, покажет технику упражнений и поможет сохранить мотивацию и регульярноть тренировок!</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='slide-item'>
                <div className='flex slide-title-wrapper'>
                  <div>
                    <p className='slide-text mb-10'>Владислав</p>
                    <div>
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                    </div>
                  </div>
                  <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-logo'/>
                </div>
                <p className='slide-text'>Тренер поможет добиться тебе желаемого результата, составит индивидуальную программу и план питания, покажет технику упражнений и поможет сохранить мотивацию и регульярноть тренировок!</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='slide-item'>
                <div className='flex slide-title-wrapper'>
                  <div>
                    <p className='slide-text mb-10'>Владислав</p>
                    <div>
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                      <img src="../img/Star.svg" alt="" />
                    </div>
                  </div>
                  <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-logo'/>
                </div>
                <p className='slide-text'>Тренер поможет добиться тебе желаемого результата, составит индивидуальную программу и план питания, покажет технику упражнений и поможет сохранить мотивацию и регульярноть тренировок!</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </main>
      <Footer/>
    </>
  );
}
