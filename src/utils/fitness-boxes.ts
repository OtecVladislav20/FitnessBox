import { TSessions } from './sessions';


export type TFitnessBox = {
  id: string;
  name: string;
  imagePreview: string;
  idLock: string;
  adress: string;
  description: string;
  imagesBox: string[];
  location: number[];
  equipment: string[];
  sessions: TSessions[];
  visited: number;
  score: number;
  reviews: string[];
}

export const fitnessBoxes = [
  {
    id: '1',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.751574, 37.573856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
  {
    id: '2',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.641574, 37.573856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
  {
    id: '3',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.641574, 37.673856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
  {
    id: '4',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.741574, 37.673856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
  {
    id: '5',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.441574, 37.673856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
  {
    id: '6',
    name: 'FitnessBox-1',
    imagePreview: '',
    idLock: '',
    adress: 'Менделеева 11',
    description: 'Бокс был поставлен 22 февраля 2022 года. Расположен близко в торговому центру ПаркХаус. ',
    imagesBox: ['', '', '', ''],
    location: [55.741574, 37.473856],
    equipment: ['', ''],
    sessions: ['1', '2', '3', '4'],
    visited: 562,
    score: 4.5,
    reviews: ['1', '2', '3'],
  },
];
