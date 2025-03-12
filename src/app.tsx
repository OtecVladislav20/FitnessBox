import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from './const';
import SignInPage from './Pages/sign-in-page/sing-in-page';
import LogInPage from './Pages/log-in-page/log-in-page';
import CodePage from './Pages/code-page/code-page';
import CatalogPage from './Pages/catalog-page/catalog-page';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';


export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage/>} />
          <Route path={AppRoute.SignIn} element={<SignInPage/>} />
          <Route path={AppRoute.LogIn} element={<LogInPage/>} />
          <Route path={AppRoute.Code} element={<CodePage/>} />
          <Route
            path={AppRoute.Catalog}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <CatalogPage/>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
