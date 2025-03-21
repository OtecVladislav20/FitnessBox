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

export const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
export const DAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

export const COUNT_DAYS_TO_BOOKED = 7;
export const COUNT_BOOKED_DEFAULT = 4;
