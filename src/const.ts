export enum AppRoute {
  Main = '/',
  SignIn = '/signin',
  LogIn = '/login',
  Code = '/code',

  Catalog = '/catalog',
  Box = '/catalog/:id',
  Trainers = '/trainers',
  Trainer = 'trainers/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
}
