import Footer from '../../../components/footer/footer';
import HeaderTrainer from '../../../components/Trainer/header-trainer/header-trainer';
import SessionBlockTrainer from '../../../components/Trainer/session-block-trainer/session-block-trainer';


export default function TrainerSessionPage(): JSX.Element {
  return (
    <>
      <HeaderTrainer/>
      <main className='my-session'>
        <section className='flex filter-trainer'>
          <div className='filter-btn-trainer-wrapper'>
            <button className='filter-btn'>Новые заявки</button>
            <button className='filter-btn'>Одобренные заявки</button>
          </div>
          <div className='filter-btn-trainer'>
            <button className='filter-btn'>Блоки</button>
            <button className='filter-btn'>Расположение</button>
            <button className='filter-btn'>График</button>
          </div>
        </section>

        <section className='flex search-trainer'>
          <input type="text" placeholder='Поиск' className='input-search'/>
          <button className='filter-btn-search-wrapper'>
            <img src="../img/filter.svg" alt="Фильтер" className='filter-btn-search'/>
          </button>
        </section>

        <section className='flex session-blocks-trainer'>
          <SessionBlockTrainer/>
          <SessionBlockTrainer/>
          <SessionBlockTrainer/>
        </section>
      </main>
      <Footer/>
    </>
  );
}
