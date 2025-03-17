type TUser = {
  userId: string;
  name: string;
  bithDate: string;
  password: string;
  phone: string;
  mail: string;
  balance: number;

  subscribe: boolean;
  subscribeEnd: string;

  favouriteFitnessBoxId: string[];

  sessionsId: string[];

  personalWorkoutsId: string[];

  notification: string[];

  reviewsId: string[];
};

export const users: TUser[] = [
  {
    userId: '1',
    name: 'Иван Иванов Иванович',
    bithDate: '17.09.2003',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    balance: 200,

    subscribe: false,
    subscribeEnd: '20 сентября 2025',

    favouriteFitnessBoxId: ['1', '2'],

    sessionsId: ['1', '2', '3'],

    personalWorkoutsId: ['1', '2', '3'],

    notification: [
      'Поздравляем! Ваш аккаунт создан!',
    ],

    reviewsId: ['1', '2', '3'],
  }
];
