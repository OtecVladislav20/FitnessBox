export enum AppRoute {
  Main = '/',
  SignIn = '/signin',
  LogIn = '/login',
  Code = '/code',

  Session = '/session',
  Catalog = '/catalog',
  Box = '/catalog/:id',
  Trainers = '/trainers',
  Trainer = '/trainers/:id',
  Subcribe = '/subcribe',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const COUNT_BOOKED_DEFAULT = 4;
export const COUNT_BOOKED_SUSCRIBE = 8;
