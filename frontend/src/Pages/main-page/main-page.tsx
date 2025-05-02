import { useNavigate } from 'react-router-dom';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { AppRoute } from '../../const';
import ReactPlayer from 'react-player';
import Footer from '../../components/footer/footer';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export default function MainPage(): JSX.Element {
  const navigate = useNavigate();

  const [isBurger, setBurger] = useState(false);
  function handlerBurger() {
    setBurger(!isBurger);
  }

  return (
    <>
      <Helmet>
        <title>Твой персональный тренажерный зал!</title>
      </Helmet>

      <header className="header flex">
        <a href="#">
          <img src="../img/logoFitnessBox.svg" alt="FitnessBox"/>
        </a>
        <nav className={`nav ${isBurger ? 'flex' : ''}`}>
          <a href='#start' className='nav-link'>Начать заниматься</a>
          <a href='#sub' className='nav-link'>Подписка</a>
          <a href='#footer' className='nav-link'>Контакты</a>
          <a href='#' className='nav-link'>Вакансии</a>
        </nav>
        <div>
          <button className='nav-btn'>Заказать звонок</button>
          <button className='nav-btn' onClick={() => navigate(AppRoute.SignIn)}>Вход</button>
        </div>

        <div className={`burger ${isBurger ? 'active' : ''}`} onClick={() => handlerBurger()}>
          <span />
        </div>
      </header>

      <main>
        <section className='hero flex'>
          <div className='hero-wrapper'>
            <div className='hero-block flex'>
              <div className='hero-text-block'>
                <h1 className='hero-h1'>Ваш Личный Спортзал</h1>
                <h2 className='hero-h2'>Тренируйся в полном комфорте</h2>
              </div>
              <div className='hero-text-block'>
                <p className='hero-p'>1. Зарегистрируйся</p>
                <p className='hero-p'>2. Забронируй спортзал</p>
                <p className='hero-p'>3. Оплати </p>
                <p className='hero-p'>4. Открой дверь и занимайся! </p>
              </div>
              <div className='flex hero-btns'>
                <button className='hero-btn'>Выбрать BOX</button>
                <button className='qr-btn'>
                  <img src="../img/qr.svg" alt="qr" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='target'>
          <div className='h2-wrapper h2-wrapper-r'>
            <h2 className='h2-title'>Давай знакомиться!</h2>
          </div>
          <div className='flex target-text'>
            <p className='target-p'>Наши Боксы - небольшие современные помещения, которые оснащены всем необходимым спортивным оборудованием </p>
            <p className='target-p'>Наша цель - сделать тренировочный процесс максимально комфортным и продуктивным</p>
          </div>
          <Splide
            options={ {
              arrows: false,
              perPage: 2,
              type: 'loop',
              gap   : '100px',
              breakpoints: {
                900: {
                  perPage: 1,
                }
              }
            } }
          >
            <SplideSlide>
              <img src="../img/target-img1.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="../img/target-img2.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="../img/target-img1.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="../img/target-img2.png" alt="" />
            </SplideSlide>
          </Splide>
        </section>

        <section className='achivments'>
          <div className='h2-wrapper h2-wrapper-l'>
            <h2 className='h2-title'>Сделай шаг в сторону комфорта!</h2>
          </div>
          <div className='achivments-wrapper flex'>
            <div className='achivment-block achivment-block-1'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Доступно 24 часа в сутки</p>
              </div>
            </div>
            <div className='achivment-block achivment-block-2'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Занимайся индивидуально</p>
              </div>
            </div>
            <div className='achivment-block achivment-block-3'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Плати только при использовании</p>
              </div>
            </div>
            <div className='achivment-block achivment-block-4'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Тренажеры для всех групп мышц</p>
              </div>
            </div>
            <div className='achivment-block achivment-block-5'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Персональныйе тренировки</p>
              </div>
            </div>
            <div className='achivment-block achivment-block-6'>
              <img src="" alt="" />
              <div className='achivments-text-wrapper flex'>
                <p className='achivments-text'>Простота использования</p>
              </div>
            </div>
          </div>
        </section>

        <section className='paralax'>
          <div className='paralax-inner'></div>
        </section>

        <section className='equipment flex'>
          <div className='equipment-img-wrapper'>
            <img src="../img/equipment-img1.png" alt="Изображение" className='equipment-img'/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
            <img src="../img/equipment-img1.png" alt="Изображение"/>
          </div>
          <div className='equipment-block flex'>
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
        </section>

        <section className='trainer'>
          <div className='h2-wrapper h2-wrapper-l'>
            <h2 className='h2-title'>Выбери своего тренера!</h2>
          </div>
          <div className='trainer-padding'>
            <div className='trainer-wrapper'>
              <div className='trainer-block flex'>
                <p className='equipment-item trainer-text'>Тренер поможет добиться тебе желаемого результата, составит индивидуальную программу и план питания, покажет технику упражнений и поможет сохранить мотивацию и регульярноть тренировок!</p>
                <button className='hero-btn'>Выбрать тренера</button>
              </div>
              <img src="../img/trainer-bg-png.png" alt="" className='trainer-bg-png'/>
            </div>
          </div>
        </section>

        <section className='video'>
          <div className='player-wrapper'>
            <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=ESMmH-JfPCY" width="100%" height="826px" controls volume={0.2}/>
          </div>
        </section>

        <section className='sub' id='sub'>
          <div className='h2-wrapper h2-wrapper-sub'>
            <h2 className='h2-title'>Подписка</h2>
          </div>
          <div className='sub-block-l flex'>
            <p className='sub-text'>Бронирование на 5 дней вперед</p>
            <p className='sub-text'>Возможность бронирования на 6 сеансов</p>
            <p className='sub-text'>Изменить время бронирования за 1 день</p>
          </div>
          <div className='sub-block-r flex'>
            <p className='sub-title-r'>С подпиской</p>
            <div>
              <p className='sub-text'>Бронирование на 5 дней вперед</p>
              <p className='sub-text'>Возможность бронирования на 6 сеансов</p>
              <p className='sub-text'>Изменить время бронирования за 1 день</p>
              <p className='sub-text'>Возможность бронирования на 6 сеансов</p>
              <p className='sub-text'>Изменить время бронирования за 1 день</p>
            </div>
            <button className='sub-btn'>Оформить подписку</button>
          </div>
        </section>

        <section className='start' id='start'>
          <div className='h2-wrapper-start flex'>
            <h2 className='h2-title'>Как начать заниматься?</h2>
          </div>
          <div className='start-wrapper'>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>1</p>
              </div>
            </div>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>2</p>
              </div>
            </div>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>3</p>
              </div>
            </div>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>4</p>
              </div>
            </div>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>5</p>
              </div>
            </div>
            <div className='start-block flex'>
              <p className='start-number-text mr-20'>Зарегистрируйся на сайте или в мобильном приложении</p>
              <div>
                <img src="../img/start-2.png" alt="" />
              </div>
              <div className='start-number flex'>
                <p className='start-number-text'>6</p>
              </div>
            </div>
          </div>
        </section>

        <section className='finish'>
          <img src="../img/lines1.png" alt="" />
          <Splide
            options={ {
              autoStart: true,
              arrows: false,
              pagination: false,
              drag   : 'free',
              type: 'loop',
              focus  : 'center',
              gap: '10px',
              perPage: 2,
              autoScroll: {
                speed: 1,
              },
            } }
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <p className='finish-text'>Становись лучше вместе с  FITNESSBOX!</p>
            </SplideSlide>
            <SplideSlide>
              <p className='finish-text'>Становись лучше вместе с  FITNESSBOX!</p>
            </SplideSlide>
            <SplideSlide>
              <p className='finish-text'>Становись лучше вместе с  FITNESSBOX!</p>
            </SplideSlide>
            <SplideSlide>
              <p className='finish-text'>Становись лучше вместе с  FITNESSBOX!</p>
            </SplideSlide>
          </Splide>
          <img src="../img/lines1.png" alt="" />
        </section>

        <section className='review'>
          <div className='review-wrapper flex'>
            <div className='slide-item score-block'>
              <div className='flex slide-title-wrapper'>
                <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-score-img'/>
                <p className='slide-score-text'>4.2</p>
                <div>
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                </div>
              </div>
              <p className='slide-text'>Рейтинг организации в Яндексе</p>
            </div>

            <div className='slide-item score-block'>
              <div className='flex slide-title-wrapper'>
                <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-score-img'/>
                <p className='slide-score-text'>4.2</p>
                <div>
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                </div>
              </div>
              <p className='slide-text'>Рейтинг организации в Яндексе</p>
            </div>

            <div className='slide-item score-block'>
              <div className='flex slide-title-wrapper'>
                <img src="../img/ya_symbol.svg" alt="Яндекс" className='slider-score-img'/>
                <p className='slide-score-text'>4.2</p>
                <div>
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                  <img src="../img/Star.svg" alt="" />
                </div>
              </div>
              <p className='slide-text'>Рейтинг организации в Яндексе</p>
            </div>
          </div>
          <div>
            <Splide
              options={ {
                autoStart: true,
                arrows: false,
                pagination: false,
                drag   : 'free',
                type: 'loop',
                focus  : 'center',
                gap: '50px',
                perPage: 3,
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
        </section>
      </main>

      <Footer/>
    </>
  );
}
