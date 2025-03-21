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

export const COUNT_DAYS_TO_BOOKED_DEFAULT = 14;
export const COUNT_BOOKED_DEFAULT = 4;

type TBookedHour = {
  hour: string;
  price: number;
}
export const BOOKED_HOUR: TBookedHour[] = [
  {
    hour: '00',
    price: 75,
  },
  {
    hour: '01',
    price: 75,
  },
  {
    hour: '02',
    price: 75,
  },
  {
    hour: '03',
    price: 75,
  },
  {
    hour: '04',
    price: 75,
  },
  {
    hour: '05',
    price: 75,
  },
  {
    hour: '06',
    price: 75,
  },
  {
    hour: '07',
    price: 75,
  },
  {
    hour: '08',
    price: 75,
  },
  {
    hour: '09',
    price: 75,
  },
  {
    hour: '10',
    price: 75,
  },
  {
    hour: '11',
    price: 75,
  },
  {
    hour: '12',
    price: 75,
  },
  {
    hour: '13',
    price: 75,
  },
  {
    hour: '14',
    price: 75,
  },
  {
    hour: '15',
    price: 75,
  },
  {
    hour: '16',
    price: 75,
  },
  {
    hour: '17',
    price: 75,
  },
  {
    hour: '18',
    price: 75,
  },
  {
    hour: '19',
    price: 75,
  },
  {
    hour: '20',
    price: 75,
  },
  {
    hour: '21',
    price: 75,
  },
  {
    hour: '22',
    price: 75,
  },
  {
    hour: '23',
    price: 75,
  },
];
