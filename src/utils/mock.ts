export type TFitnessBox = {
  name: string;
  imagePreview: string;
  idLock: string;
  adress: string;
  location: number[];
  reviews: string[];
}

export type TFitnessBoxex = {
  [key: number]: TFitnessBox;
}

export const fitnessBoxes = {
  1: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.751574, 37.573856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  2: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.641574, 37.573856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  3: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.641574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  4: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.741574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  5: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.441574, 37.673856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
  6: {
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    location: [55.741574, 37.473856],
    reviews: ['Норм', 'Норм', 'Норм', 'Норм', 'Норм'],
  },
};
