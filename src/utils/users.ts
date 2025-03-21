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
  notification: string[];
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
    notification: [
      'Поздравляем! Ваш аккаунт создан!',
    ],
  }
];
