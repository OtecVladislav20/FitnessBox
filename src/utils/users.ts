export const users = [
  {
    id: '1',
    name: 'Иван Иванов Иванович',
    bithDate: '17.09.2003',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    balance: 200,

    // Как отображать подписку у пользователя / отображать дату окончания
    subscribe: true,
    subscribeEnd: '20 сентября 2025',

    favoutieFitnessBox: ['1', '2'],

    session: [
      {
        boxId: '1',
        time: {
          '1 сентября': ['12:00', '12:30',],
          '2 сентября': ['12:00', '12:30',],
        },
        friend: false,
        trainerId: '1', //id тренера
      },
      {
        boxId: '1',
        time: {
          '1 сентября': ['12:00', '12:30',],
          '2 сентября': ['12:00', '12:30',],
        },
        friend: false,
        trainerId: '',
      },
    ],

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
      '',
    ]
  }
];
