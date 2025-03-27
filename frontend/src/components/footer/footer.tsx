export default function Footer() {
  return (
    <footer className='footer flex' id='footer'>
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
  );
}
