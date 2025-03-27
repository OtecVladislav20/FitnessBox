import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';


type TPrivateRoute = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: TPrivateRoute): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.LogIn} />
  );
}

export default PrivateRoute;
