import {createAction} from '@reduxjs/toolkit';
import { TFitnessBoxes } from '../utils/fitness-boxes';

export const fetchFitnessBoxes = createAction<{fitnessBoxes: TFitnessBoxes}>('fetch/fitessBoxes');

export const fetchTrainers = createAction<{fitnessBoxes: TFitnessBoxes}>('fetch/trainers');
