import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';

export default function CatalogPage(): JSX.Element {
  return (
    <>
      <HeaderAuth/>
      <main>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Избранное</button>
        </section>
        <section className='flex'>
          <div>СПИСОК БОКСОВ</div>
          <div>ЯНДЕКС КАРТА</div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
