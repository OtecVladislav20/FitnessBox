import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';
import { fitnessBoxes } from '../../utils/fitness-boxes';

export default function BoxPage(): JSX.Element {
  const {id} = useParams();
  const box = fitnessBoxes.find((i) => (i.id === id));

  if (!id) {
    throw Error;
  }

  return (
    <>
      <HeaderAuth/>
      <main>
        <p>{box?.name}</p>
      </main>
      <Footer/>
    </>
  );
}
