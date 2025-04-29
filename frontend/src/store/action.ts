import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';


export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('screen/redirectToRoute');


export const fetchTrainers = createAction('data/fetchTrainers');
export const fetchReviews = createAction('data/fetchReviews');


