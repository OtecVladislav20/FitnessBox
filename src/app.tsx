import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page/main-page';
import { AppRoute } from './const';
import SignInPage from './Pages/sign-in-page/sing-in-page';
import LogInPage from './Pages/log-in-page/log-in-page';
import CodePage from './Pages/code-page/code-page';


export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage/>} />
      <Route path={AppRoute.SignIn} element={<SignInPage/>} />
      <Route path={AppRoute.LogIn} element={<LogInPage/>} />
      <Route path={AppRoute.Code} element={<CodePage/>} />
    </Routes>
  );
}
