import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { TTrainer } from '../../utils/trainers';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTrainers } from '../../store/action';
import { useEffect } from 'react';


export default function TrainersPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrainers());
  }, [dispatch]);

  const trainers = useAppSelector((state) => state.trainers);

  const navigate = useNavigate();
  const handlerChooseTrainer = (trainer: TTrainer) => {
    if (trainer.readyToWork === true) {
      navigate(`/trainers/${trainer.trainerId}`);
    }
  };

  return (
    <>
      <HeaderAuth/>
      <main className='trainers'>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Мои персональные тренировки</button>
        </section>
        <section className='trainers-cards'>
          {trainers.map((trainer) => (trainer.readyToWork &&
            <div key={trainer.trainerId} className='trainers-card'>
              <div className='trainers-img-wrapper'>
                <img src="../img/trainer-img.png" alt="" className='trainers-img'/>
                <p className='trainers-name'>{trainer.name}</p>
              </div>
              <div className='trainers-text-wrapper flex'>
                <div>
                  <p className='trainers-title'>Специализация</p>
                  <ul className='trainers-list'>
                    {trainer.specialization.map((i) => (
                      <li key={i} className='trainers-item'>{i}</li>
                    ))}
                  </ul>
                </div>
                {/* Если у пользователя куплена  тренировка, то показать сколько тренировок осталось до конца */}
                <button className='trainres-btn' onClick={() => handlerChooseTrainer(trainer)}>Выбрать</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
}
