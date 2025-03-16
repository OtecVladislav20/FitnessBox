import {createAction} from '@reduxjs/toolkit';
import { TFitnessBox } from '../utils/fitness-boxes';
import { TTrainer } from '../utils/trainers';

export const fetchFitnessBoxes = createAction('data/fetchFitessBoxes');
export const fetchFitnessBox = createAction<TFitnessBox['id']>('data/fetchFitnessBox');

export const fetchTrainers = createAction('data/fetchTrainers');
export const fetchTrainer = createAction<TTrainer['id']>('data/fetchFitnessBox');
