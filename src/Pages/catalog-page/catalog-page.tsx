import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import GeocodeMap from '../../components/geocode-map.tsx/geocode-map';
import { fitnessBoxes } from '../../utils/mock';


export default function CatalogPage(): JSX.Element {
  return (
    <>
      <HeaderAuth/>
      <main className='catalog'>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Избранное</button>
        </section>
        <section className='flex'>
          <div>
            {Object.keys(fitnessBoxes).map((box) => (
              <div key={box} className='card-fitnessbox flex'>
                <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
                <div className='card-fitnessbox-text flex'>
                  <h2 className='card-fitnessbox-title'>{fitnessBoxes[box].name}</h2>
                  <p className='card-fitnessbox-p'>{fitnessBoxes[box].adress}</p>
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
          <div className='catalog-map'>
            <GeocodeMap/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
