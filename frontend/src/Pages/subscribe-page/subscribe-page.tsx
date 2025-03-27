import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { users } from '../../utils/users';

export default function SubscribePage(): JSX.Element {
  return (
    <>
      <HeaderAuth/>
      <main className='subscribe'>
        <div className='subscribe-block flex'>
          <div className='subscribe-left'>
            <h2 className='sub-title-r'>С подпиской</h2>
            <ul className='sub-list'>
              <li className='sub-text'>Бронирование на 12 дней вперед</li>
              <li className='sub-text'>При бронировании 30 минут в подарок</li>
              <li className='sub-text'>Скидка при занятии с другом</li>
              <li className='sub-text'>Изменить время бронирования за 1 час</li>
              <li className='sub-text'>Возможность бронировать на 12 сеансов</li>
            </ul>
          </div>
          {users[0].subscribe === false ?
            <div className='subscribe-payment flex'>
              <div>
                <button className='trainer-payment-btn flex'>
                  <div className=''>
                    <p className='trainer-payment-text'>На 30 дней</p>
                  </div>
                  <div className='flex trainer-payment-price-wrapper'>
                    <p className='trainer-payment-price'>500 р</p>
                  </div>
                </button>
                <button className='trainer-payment-btn flex'>
                  <div className=''>
                    <p className='trainer-payment-text'>На 30 дней</p>
                  </div>
                  <div className='flex trainer-payment-price-wrapper'>
                    <p className='trainer-payment-price'>500 р</p>
                  </div>
                </button>
                <button className='trainer-payment-btn flex'>
                  <div className=''>
                    <p className='trainer-payment-text'>На 30 дней</p>
                  </div>
                  <div className='flex trainer-payment-price-wrapper'>
                    <p className='trainer-payment-price'>500 р</p>
                  </div>
                </button>
              </div>
              <button className='payment-btn subscribe-btn'>Оплатить</button>
            </div> :
            //Если поле у user'а: subscribe == true, то показывать сколько еще действует подписка
            <div className='subscribe-payment'>
              <div className='subscribe-info'>
                <div className='flex subcribe-days'>
                  <p className='trainer-payment-text'>Подписка действует еще:</p>
                </div>
                <div className='flex trainer-payment-price-wrapper subcribe-days'>
                  <p className='trainer-payment-price'>15 дней</p>
                </div>
              </div>
            </div>}
        </div>
      </main>
      <Footer/>
    </>
  );
}
