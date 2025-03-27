import {createAction} from '@reduxjs/toolkit';
import { TSessions } from '../utils/sessions';

export const fetchFitnessBoxes = createAction('data/fetchFitnessBoxes');

export const fetchTrainers = createAction('data/fetchTrainers');

export const fetchReviews = createAction('data/fetchReviews');

export const fetchSessions = createAction('data/fetchSessions');

export const postSessions = createAction<TSessions[]>('data/postSessions');
