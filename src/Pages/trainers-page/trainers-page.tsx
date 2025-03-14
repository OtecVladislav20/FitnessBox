import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { trainers } from '../../utils/trainers';

export default function TrainersPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <HeaderAuth/>
      <main className='trainers'>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Избранное</button>
        </section>
        <section className='trainers-cards'>
          {trainers.map((trainer) => (
            <div key={trainer.id} className='trainers-card'>
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
                <button className='trainres-btn' onClick={() => navigate(`/trainers/${trainer.id}`)}>Выбрать</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
}
