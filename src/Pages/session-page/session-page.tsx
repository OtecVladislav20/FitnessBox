import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { users } from '../../utils/users';
import { fetchFitnessBoxes, fetchSessions, fetchTrainers } from '../../store/action';
import moment from 'moment';
import { CURRENT_FLAG, filterSessions, FUTURE_FLAG, PAST_FLAG } from '../../helpers/filterSessions';
import SessionItem from '../../components/session-item/session-item';


export default function SessionPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFitnessBoxes());
    dispatch(fetchTrainers());
    dispatch(fetchSessions()); //Когда будет BACKEND добавить. Пока что сделать action, который будем изменять состояние в сторе
  }, [dispatch]);

  // Берем все данные
  const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);
  const trainers = useAppSelector((state) => state.trainers);
  const sessions = useAppSelector((state) => state.sessions);

  const user = users.find((i) => i.userId === '1');

  const userSessions = sessions.filter((i) => i.userId === user?.userId);

  const nowDate = moment();

  const currentSessions = filterSessions(userSessions, CURRENT_FLAG);
  const futureSessions = filterSessions(userSessions, FUTURE_FLAG);
  const pastSessions = filterSessions(userSessions, PAST_FLAG);

  return (
    <>
      <HeaderAuth/>
      <main className='my-session'>
        <section>
          <h2>Текущие сеансы</h2>
          <ul className='session-list'>
            {currentSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i}/>
            ))}
          </ul>
        </section>
        <section>
          <h2>Будущие сеансы</h2>
          <ul className='session-list'>
            {futureSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i}/>
            ))}
          </ul>
        </section>
        <section>
          <h2>Прошедшие сеансы</h2>
          <ul className='session-list'>
            {pastSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i}/>
            ))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}
