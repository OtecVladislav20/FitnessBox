export type TTrainer = {
  id: string;
  imagePreview: string;
  name: string;
  password: string;
  phone: string;
  mail: string;
  telegram: string;
  whatsup: string;
  specialization: string[];
  education: string[];
  merits: string[];
  workDate: string[];
  workTime: string[];
  workFitmessBoxes: string[];
  price: TPrice;
  acceptOrders: boolean;
  sessionAccept: string[];
  sessionWaiting: string[];
}

type TPrice = {
  [key: string]: string;
}

export const trainers = [
  {
    id: '1',
    imagePreview: '',
    name: 'Маслаков Владислав Денисович',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsup: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', 'МС по строгому подъему на бицепс'],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    workFitmessBoxes: ['1', '2', '4'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    //Показывается в поиске тренеров
    acceptOrders: true,

    // Все сессии, у которых acceptWorkout == true
    sessionAccept: ['1', '2'],

    //Все сессии, у которых acceptWorkout == false
    sessionWaiting: ['1', '2'],
  },
  {
    id: '2',
    imagePreview: '',
    name: 'Денисович',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsup: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    workFitmessBoxes: ['1', '2'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    acceptOrders: true,

    // Все сессии, у которых acceptWorkout == true
    sessionAccept: ['1', '2'],

    //Все сессии, у которых acceptWorkout == false
    sessionWaiting: ['1', '2'],
  },
  {
    id: '3',
    imagePreview: '',
    name: 'Владислав',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsup: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    workFitmessBoxes: ['1', '2'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    acceptOrders: true,

    // Все сессии, у которых acceptWorkout == true
    sessionAccept: ['1', '2'],

    //Все сессии, у которых acceptWorkout == false
    sessionWaiting: ['1', '2'],
  },
  {
    id: '4',
    imagePreview: '',
    name: 'Маслаков',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsup: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    workFitmessBoxes: ['1', '2'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    acceptOrders: true,

    // Все сессии, у которых acceptWorkout == true
    sessionAccept: ['1', '2'],

    //Все сессии, у которых acceptWorkout == false
    sessionWaiting: ['1', '2'],
  },
];
