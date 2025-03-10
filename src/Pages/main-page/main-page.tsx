import { Link, useNavigate } from 'react-router-dom';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import ReactPlayer from 'react-player';
import { AppRoute } from '../../const';

export default function MainPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <header className="header flex">
        <a href="#">
          <img src="../img/logoFitnessBox.svg" alt="FitnessBox"/>
        </a>
        <nav className='flex'>
          <Link to='/' className='nav-link'>Начать заниматься</Link>
          <Link to='/' className='nav-link'>Подписка</Link>
          <Link to='/' className='nav-link'>Контакты</Link>
          <Link to='/' className='nav-link'>Вакансии</Link>
        </nav>
        <div>
          <button className='nav-btn'>Заказать звонок</button>
          <button className='nav-btn' onClick={() => navigate(AppRoute.SignIn)}>Вход</button>
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
                <p className='hero-p'>Выбери BOX</p>
                <p className='hero-p'>Выбери BOX</p>
                <p className='hero-p'>Выбери BOX</p>
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
              <img src="../img/target-img1.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="../img/target-img1.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="../img/target-img1.png" alt="" />
            </SplideSlide>
          </Splide>
        </section>

        <section className='achivments'>
          <div className='h2-wrapper h2-wrapper-l'>
            <h2 className='h2-title'>Сделай шаг в сторону комфорта!</h2>
          </div>
          <div className='achivments-wrapper'>
            <div className='achivment-block'>
              <img src="" alt="" />
              <p>Доступно 24 часа в сутки</p>
            </div>
            <div>Доступно 24 часа в сутки </div>
            <div>Доступно 24 часа в сутки </div>
            <div>Доступно 24 часа в сутки </div>
            <div>Доступно 24 часа в сутки </div>
            <div>Доступно 24 часа в сутки </div>
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
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
                <li className='equipment-item'>Гантели</li>
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
          <ReactPlayer url="https://rutube.ru/video/e9057de0f3f1c91d054293a664383729/?utm_source=embed&utm_medium=referral&utm_campaign=e9057de0f3f1c91d054293a664383729&utm_content=yastatic.net" width="100%" height="826px"/>
        </section>

        <section className='review'>
          <Splide
            options={ {
              autoStart: true,
              arrows: false,
              pagination: false,
              drag   : 'free',
              type: 'loop',
              focus  : 'center',
              perPage: 3,
              autoScroll: {
                speed: 1,
              },
            } }
            // extensions={{ AutoScroll }}
          >
            <SplideSlide>
              {/* <div className='slider-item'>
                <div className='flex slider-wrapper-title'>
                  <div>
                    <p className='review-text review-name'>Владислав</p>
                    <div>
                      <img src="../img/Star.svg" alt="star" />
                      <img src="../img/Star.svg" alt="star" />
                      <img src="../img/Star.svg" alt="star" />
                      <img src="../img/Star.svg" alt="star" />
                      <img src="../img/Star.svg" alt="star" />
                    </div>
                  </div>
                  <img src="../img/ya_symbol.svg" alt="яндекс" className='slider-logo'/>
                </div>
                <div>
                  <p className='review-text'>ывафывафывавылаоываоывфоадфыводаывоаждыфвоалывфоадыводлалывдаждлоывфдлаыовфдлалдывждаоывдлаождл</p>
                </div>
              </div> */}
            </SplideSlide>
            <SplideSlide>
              <div className='slide-item'>
                <p>
                  ывафывафывавылаоываоывфоадфыводаы
                  воаждыфвоалывфоадыводлалывдаждлоывфдлаыовфдлалдывждаоывдлаождл
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
            </SplideSlide>
            <SplideSlide>
            </SplideSlide>
          </Splide>
        </section>
      </main>

      <footer className='footer flex'>
        <div className='footer-wrapper flex'>
          <div className='footer-contacts flex'>
            <h3 className='footer-title'>Контакты</h3>
            <a href="tel:89068006808" className='footer-text'>+7 906 800 68 08</a>
            <a href="mailto:maslakov20@mail.ru" className='footer-text'>maslakov20@mail.ru</a>
            <div>
              <a href="">
                <img src="" alt="" />
              </a>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
          <div className='footer-contacts flex'>
            <h3 className='footer-title'>Ресурсы</h3>
            <a href="#" className='footer-text'>Пользовательское соглашение</a>
            <a href="#" className='footer-text'>Договор оферты</a>
            <a href="#" className='footer-text'>Политика конфиденциальноси</a>
            <a href="#" className='footer-text'>Правила клуба</a>
          </div>
          <div className='footer-contacts flex'>
            <h3 className='footer-title'>Клиентам</h3>
            <a href="#" className='footer-text'>Вакансии</a>
            <a href="#" className='footer-text'>Тренеры</a>
            <a href="#" className='footer-text'>Каталог</a>
            <a href="#" className='footer-text'>Техническая поддержка</a>
          </div>
          <div className='footer-contacts flex'>
            <h3 className='footer-title'>Приложения</h3>
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
        </div>
        <div>
          <p className='footer-p'>© 2018-2025 FitnessBox. Все права защищены</p>
        </div>
      </footer>
    </>
  );
}
