import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTrainers } from '../../store/action';
import { CURRENT_FLAG, filterSessions, FUTURE_FLAG, PAST_FLAG } from '../../helpers/filterSessions';
import SessionItem from '../../components/session-item/session-item';
import { fetchFitnessBoxesAction, fetchSessionsToUserAction } from '../../store/api-actions';
import { useAuth } from '../../hooks/use-auth';


export default function SessionPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { userId } = useAuth();

  useEffect(() => {
    dispatch(fetchSessionsToUserAction(userId));
    dispatch(fetchFitnessBoxesAction());
    dispatch(fetchTrainers());
  }, [dispatch]);

  const sessions = useAppSelector((state) => state.sessionsToUser);

  const trainers = useAppSelector((state) => state.trainers);
  const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);

  const currentSessions = filterSessions(sessions, CURRENT_FLAG);
  const futureSessions = filterSessions(sessions, FUTURE_FLAG);
  const pastSessions = filterSessions(sessions, PAST_FLAG);


  return (
    <>
      <HeaderAuth/>
      <main className='my-session'>
        <section>
          <h2 className='my-session-title'>Текущие сеансы</h2>
          <ul className='session-list'>
            {currentSessions?.map((i) => (
              <SessionItem key={i.id} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
        <section>
          <h2 className='my-session-title'>Будущие сеансы</h2>
          <ul className='session-list'>
            {futureSessions?.map((i) => (
              <SessionItem key={i.id} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
        <section>
          <h2 className='my-session-title'>Прошедшие сеансы</h2>
          <ul className='session-list'>
            {pastSessions?.map((i) => (
              <SessionItem key={i.id} session={i} fitnessBoxes={fitnessBoxes} trainers={trainers}/>
            ))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}
