import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import GeocodeMap from '../../components/geocode-map.tsx/geocode-map';
import FitnessBoxCard from '../../components/fitness-box-card/fitness-box-card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchFitnessBoxes } from '../../store/action';


export default function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFitnessBoxes());
  }, [dispatch]);

  const fitnessBoxes = useAppSelector((state) => state.fitnessBoxes);

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
              <FitnessBoxCard key={box?.boxId} boxId={box?.boxId} boxName={box?.name} boxAdress={box?.adress} boxScore={box?.score} boxVisited={box?.visited}/>
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
