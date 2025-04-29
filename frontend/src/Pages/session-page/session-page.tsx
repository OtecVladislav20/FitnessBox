import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTrainers } from '../../store/action';
import { CURRENT_FLAG, filterSessions, FUTURE_FLAG, PAST_FLAG } from '../../helpers/filterSessions';
import SessionItem from '../../components/session-item/session-item';
import { fetchSessionsToUserAction } from '../../store/api-actions';
import { useAuth } from '../../hooks/use-auth';


export default function SessionPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { userId } = useAuth();

  useEffect(() => {
    dispatch(fetchSessionsToUserAction(userId));
    dispatch(fetchTrainers());
  }, [dispatch]);

  const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);
  const trainers = useAppSelector((state) => state.trainers);
  const sessions = useAppSelector((state) => state.sessionsToUser);

  const currentSessions = filterSessions(sessions, CURRENT_FLAG);
  const futureSessions = filterSessions(sessions, FUTURE_FLAG);
  const pastSessions = filterSessions(sessions, PAST_FLAG);


  return (
    <>
      <HeaderAuth/>
      <main className='my-session'>
        <section>
          <h2>Текущие сеансы</h2>
          <ul className='session-list'>
            {currentSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
        <section>
          <h2>Будущие сеансы</h2>
          <ul className='session-list'>
            {futureSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
        <section>
          <h2>Прошедшие сеансы</h2>
          <ul className='session-list'>
            {pastSessions?.map((i) => (
              <SessionItem key={i.sessionId} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}
