import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from './const';
import SignInPage from './Pages/sign-in-page/sing-in-page';
import LogInPage from './Pages/log-in-page/log-in-page';
import CodePage from './Pages/code-page/code-page';
import CatalogPage from './Pages/catalog-page/catalog-page';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import BoxPage from './Pages/box-page/box-page';
import TrainersPage from './Pages/trainers-page/trainers-page';
import TrainerPage from './Pages/trainer-page/trainer-page';
import SubscribePage from './Pages/subscribe-page/subscribe-page';
import SessionPage from './Pages/session-page/session-page';


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
            path={AppRoute.Session}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <SessionPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Catalog}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <CatalogPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Box}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <BoxPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Trainers}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <TrainersPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Trainer}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <TrainerPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Subcribe}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <SubscribePage/>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
