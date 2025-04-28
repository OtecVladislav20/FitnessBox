import {createAction} from '@reduxjs/toolkit';
import { TSessions } from '../utils/sessions';
import { TFitnessBox } from '../utils/fitness-boxes';
import { AppRoute, AuthorizationStatus } from '../const';


export const loadFitnessBoxes = createAction<TFitnessBox[]>('data/loadFitnessBoxes');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('screen/redirectToRoute');


export const fetchTrainers = createAction('data/fetchTrainers');

export const fetchReviews = createAction('data/fetchReviews');

export const fetchSessions = createAction('data/fetchSessions');

export const postSessions = createAction<TSessions[]>('data/postSessions');

