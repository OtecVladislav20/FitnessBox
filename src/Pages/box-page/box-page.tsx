import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { fitnessBoxes } from '../../utils/fitness-boxes';


export default function BoxPage(): JSX.Element {
  const {id} = useParams();
  const box = fitnessBoxes.find((i) => (i.boxId === id));

  if (!id) {
    throw Error;
  }

  return (
    <>
      <HeaderAuth/>
      <main className='booked'>
        <section>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
          <button>пятница, 1 мая</button>
        </section>
        <section className='flex'>
          <div>Ячейки</div>
          <div>Оплата</div>
        </section>
        <section>
          <img src="" alt="" />
          <div>
            <p>{box?.name}</p>
            <p>{box?.adress}</p>
            <p>{box?.description}</p>
          </div>
        </section>
        <section>
          <div></div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
        <section>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
