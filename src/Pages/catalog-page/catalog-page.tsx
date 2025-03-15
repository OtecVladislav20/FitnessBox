import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import GeocodeMap from '../../components/geocode-map.tsx/geocode-map';
import { fitnessBoxes } from '../../utils/fitness-boxes';
import { useNavigate } from 'react-router-dom';


export default function CatalogPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <HeaderAuth/>
      <main className='catalog'>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Избранное</button>
        </section>
        <section className='flex catalog-block'>
          <div className='cards-fitnessbox flex'>
            {fitnessBoxes.map((box) => (
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
          <div className='catalog-map'>
            <GeocodeMap/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
