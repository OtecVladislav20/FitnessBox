import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { trainers } from '../../utils/trainers';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { fitnessBoxes } from '../../utils/fitness-boxes';


const MapStyled = styled(Map)`
  width: 100%;
  height: 100%;
`;

export default function TrainersPage(): JSX.Element {
  const {id} = useParams();
  const trainer = trainers.find((i) => (i.id === id));

  const workFitnessBoxes = trainer?.workFitmessBoxes.map((workFitnessBox) => (
    fitnessBoxes.find((box) => (workFitnessBox === box.id))
  ));

  const navigate = useNavigate();

  if (!id) {
    throw Error;
  }

  return (
    <>
      <HeaderAuth/>
      <main className='trainers'>
        <div className='flex trainer-block-top'>
          <div className='trainer-card flex'>
            <div className='trainer-card-left'>
              <div className='trainer-image-wrapper'>
                <img src="../img/trainer-img.png" alt="" className='trainer-img'/>
                <p className='trainer-name'>{trainer?.name}</p>
              </div>
              <div className='trainer-contact flex'>
                <a href="tel:89068006808" className='footer-text'>+7 906 800 68 08</a>
                <a href="mailto:maslakov20@mail.ru" className='footer-text'>maslakov20@mail.ru</a>
                <div>
                  <a href="" className='contact-link'>
                    <img src="../img/user-img.svg" alt="" />
                  </a>
                  <a href="" className='contact-link'>
                    <img src="../img/user-img.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className='trainer-card-right'>
              <div>
                <p className='trainers-title'>Специализация</p>
                <ul className='trainers-list'>
                  {trainer?.specialization.map((i) => (
                    <li key={i} className='trainers-item'>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className='trainers-title'>Образование</p>
                <ul className='trainers-list'>
                  {trainer?.education.map((i) => (
                    <li key={i} className='trainers-item'>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className='trainers-title'>Заслуги в спорте</p>
                <ul className='trainers-list'>
                  {trainer?.merits.map((i) => (
                    <li key={i} className='trainers-item'>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='trainer-payment flex'>
            <div>
              <button className='trainer-payment-btn flex'>
                <div className=''>
                  <p className='trainer-payment-text'>2 сеанса</p>
                </div>
                <div className='flex trainer-payment-price-wrapper'>
                  <p className='trainer-payment-price'>1000 р</p>
                </div>
              </button>
              <button className='trainer-payment-btn flex'>
                <div className=''>
                  <p className='trainer-payment-text'>2 сеанса</p>
                </div>
                <div className='flex trainer-payment-price-wrapper'>
                  <p className='trainer-payment-price'>1000 р</p>
                </div>
              </button>
              <button className='trainer-payment-btn flex'>
                <div className=''>
                  <p className='trainer-payment-text'>2 сеанса</p>
                </div>
                <div className='flex trainer-payment-price-wrapper'>
                  <p className='trainer-payment-price'>1000 р</p>
                </div>
              </button>
              <button className='trainer-payment-btn flex'>
                <div className=''>
                  <p className='trainer-payment-text'>2 сеанса</p>
                </div>
                <div className='flex trainer-payment-price-wrapper'>
                  <p className='trainer-payment-price'>1000 р</p>
                </div>
              </button>
            </div>
            <button className='payment-btn'>Оплатить</button>
          </div>
        </div>
        <div className='trainer-block-bottom flex'>
          <div>
            <div className='trainer-work-time flex'>
              <div className='flex'>
                <p className='trainers-title trainer-date'>Время:</p>
                <p className='trainers-item trainer-date'>{trainer?.workTime[0]} - {trainer?.workTime[1]}</p>
              </div>
              <div className='flex'>
                <p className='trainers-title trainer-date'>Дни:</p>
                {trainer?.workDate.map((day) => (
                  <p key={day} className='trainers-item trainer-date'>{day},</p>
                ))}
              </div>
            </div>

            <div className='flex cards-fitnessbox'>
              {workFitnessBoxes?.map((box) => (
                <div key={box.id} className='card-fitnessbox flex' onClick={() => navigate(`/catalog/${box.id}`)}>
                  <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
                  <div className='card-fitnessbox-text flex'>
                    <h2 className='card-fitnessbox-title'>{box.name}</h2>
                    <p className='card-fitnessbox-p'>{box.adress}</p>
                    <p className='card-fitnessbox-p'>Количество посещений: 568</p>
                  </div>
                  <div className='card-fitnessbox-btns flex'>
                    <button>
                      <img src="../img/Star.svg" alt="" />
                    </button>
                    <div>
                      <img src="" alt="" />
                      <p className='card-fitnessbox-p'>4/5</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='catalog-map'>
            <YMaps query={{apikey: '65d0ebaf-f042-415a-9b10-cdf7666352f0'}}>
              <MapStyled defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                {workFitnessBoxes?.map((box) => (
                  <Placemark key={box.id} defaultGeometry={box.location}/>
                ))}
              </MapStyled>
            </YMaps>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
