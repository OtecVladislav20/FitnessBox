import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import GeocodeMap from '../../components/geocode-map.tsx/geocode-map';
import { fitnessBoxes } from '../../utils/fitness-boxes';
import FitnessBoxCard from '../../components/fitness-box-card/fitness-box-card';


export default function CatalogPage(): JSX.Element {
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
              <FitnessBoxCard key={box?.id} boxId={box?.id} boxName={box?.name} boxAdress={box?.adress} boxScore={box?.score} boxVisited={box?.visited}/>
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
