import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page/main-page';
import { AppRoute } from './const';


export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage/>} />
    </Routes>
  );
}
