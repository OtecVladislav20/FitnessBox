import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import GeocodeMap from '../../components/geocode-map.tsx/geocode-map';
import FitnessBoxCard from '../../components/fitness-box-card/fitness-box-card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchSessions } from '../../store/action';
import { fetchFitnessBoxesAction } from '../../store/api-actions';


export default function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFitnessBoxesAction());
    dispatch(fetchSessions());
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
              <FitnessBoxCard key={box?.id} id={box?.id} boxName={box?.name} boxAdress={box?.adress} boxScore={box?.score} boxVisited={box?.visited}/>
            ))}
          </div>
          <div className='catalog-map'>
            <GeocodeMap fitnessBoxes={fitnessBoxes}/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
