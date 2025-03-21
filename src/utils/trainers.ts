export type TTrainer = {
  trainerId: string;
  imagePreview: string;
  name: string;
  bithDate: string;
  password: string;
  phone: string;
  mail: string;
  telegram: string;
  whatsapp: string;
  specialization: string[];
  education: string[];
  merits: string[];
  workDate: string[];
  workTime: string[];
  fitnessBoxesId: string[];
  price: TPrice;
  readyToWork: boolean;
}

type TPrice = {
  [key: string]: string;
}

export const trainers: TTrainer[] = [
  {
    trainerId: '1',
    imagePreview: '',
    name: 'Маслаков Владислав Денисович',
    bithDate: '17.09.2000',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsapp: 'test',
    specialization: ['Силовой тренининг', 'Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', 'МС по строгому подъему на бицепс'],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00', '21:00'],
    fitnessBoxesId: ['1', '2', '3'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    //Показывается в поиске тренеров
    readyToWork: true,
  },
  {
    trainerId: '2',
    imagePreview: '',
    name: 'Денисович',
    bithDate: '17.09.2000',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsapp: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    fitnessBoxesId: ['1', '2'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    readyToWork: true,
  },
  {
    trainerId: '3',
    imagePreview: '',
    name: 'Владислав',
    bithDate: '17.09.2000',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsapp: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    fitnessBoxesId: ['1', '2'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    readyToWork: true,
  },
  {
    trainerId: '4',
    imagePreview: '',
    name: 'Маслаков',
    bithDate: '17.09.2000',
    password: '',
    phone: '89068006808',
    mail: 'maslakov20@mail.ru',
    telegram: 'test',
    whatsapp: 'test',
    specialization: ['Силовой тренининг','Бокс', 'Снижение массы', 'Набор мышц'],
    education: ['Северо-Казахстанский государственный университет', ''],
    merits: ['МС по гиревому двоеборью', ''],
    workDate: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    workTime: ['9:00','21:00'],
    fitnessBoxesId: ['1', '2', '3'],
    price: {
      2: '1000 р',
      8: '1000 р',
      16: '1000 р',
      24: '1000 р',
    },
    readyToWork: true,
  },
];
