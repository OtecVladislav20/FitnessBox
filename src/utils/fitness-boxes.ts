export type TFitnessBox = {
  id: string;
  name: string;
  imagePreview: string;
  idLock: string;
  adress: string;
  location: number[];
}

export type TFitnessBoxes = TFitnessBox[];


export const fitnessBoxes = [
  {
    id: '1',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.751574, 37.573856],
    equipment: ['', ''],
    bookedTime: {
      '1 сентября': ['12:00', '12:30', '14:00', '14:30'],
      '2 сентября': ['12:00', '12:30', '14:00', '14:30'],
    },
  },
  {
    id: '2',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.641574, 37.573856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  {
    id: '3',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.641574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  {
    id: '4',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.741574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  {
    id: '5',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.441574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  {
    id: '6',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.741574, 37.473856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
];
