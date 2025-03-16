export const users = [
  {
    id: '1',
    name: 'Иван Иванов Иванович',
    bithDate: '17.09.2003',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    balance: 200,

    subscribe: false,
    subscribeEnd: '20 сентября 2025',

    favouriteFitnessBox: ['1', '2'],

    //id сессий юзера
    sessions: ['1', '2', '3'],

    personalTrainer: [
      {
        trainerId: '1',
        countWorkout: 5,
      },
      {
        trainerId: '3',
        countWorkout: 2,
      }
    ],

    notification: [
      'Поздравляем! Ваш аккаунт создан!',
    ],

    reviews: ['1', '2', '3']
  }
];
