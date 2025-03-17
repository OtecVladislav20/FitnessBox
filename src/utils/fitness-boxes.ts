export type TFitnessBox = {
  boxId: string;
  name: string;
  imagePreview: string;
  idLock: string;
  adress: string;
  description: string;
  imagesBox: string[];
  location: number[];
  equipment: string[];
  sessionsId: string[];
  visited: number;
  score: number;
  reviewsId: string[];
}

export const fitnessBoxes: TFitnessBox[] = [
  {
    boxId: '1',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.751574, 37.573856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
  {
    boxId: '2',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.641574, 37.573856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
  {
    boxId: '3',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.641574, 37.673856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
  {
    boxId: '4',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.741574, 37.673856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
  {
    boxId: '5',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.441574, 37.673856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
  {
    boxId: '6',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.741574, 37.473856],
    equipment: ['', ''],
    sessionsId: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviewsId: ['1', '2', '3'],
  },
];
