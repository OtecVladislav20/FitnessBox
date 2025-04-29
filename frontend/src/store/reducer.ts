import { createReducer } from '@reduxjs/toolkit';
import { fetchReviews, fetchSessions, fetchTrainers, postSessions, requireAuthorization } from './action';
import { TFitnessBox } from '../utils/fitness-boxes';
import { trainers, TTrainer } from '../utils/trainers';
import { reviews, TReview } from '../utils/reviews';
import { sessions, TSessions } from '../utils/sessions';
import { AuthorizationStatus } from '../const';
import { fetchFitnessBoxAction, fetchFitnessBoxesAction } from './api-actions';

const initialState: {
  fitnessBoxes: TFitnessBox[];
  fitnessBox: TFitnessBox;
  trainers: TTrainer[];
  reviews: TReview[];
  sessions: TSessions[];
  authorizationStatus: AuthorizationStatus;
} = {
  fitnessBoxes: [],
  fitnessBox: {} as TFitnessBox,
  trainers: [],
  reviews: [],
  sessions: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFitnessBoxesAction.fulfilled, (state, action) => {
      state.fitnessBoxes = action.payload;
    })
    .addCase(fetchFitnessBoxAction.fulfilled, (state, action) => {
      state.fitnessBox = action.payload;
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(fetchSessions, (state) => {
      state.sessions = sessions;
    })
    .addCase(fetchTrainers, (state) => {
      state.trainers = trainers;
    })
    .addCase(postSessions, (state, action) => {
      action.payload.map((i) => {
        state.sessions.push(i);
      });
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
