import { createReducer } from '@reduxjs/toolkit';
import { fetchReviews, fetchTrainers, requireAuthorization } from './action';
import { TFitnessBox } from '../utils/fitness-boxes';
import { trainers, TTrainer } from '../utils/trainers';
import { reviews, TReview } from '../utils/reviews';
import { TSessions } from '../utils/sessions';
import { AuthorizationStatus } from '../const';
import { fetchFitnessBoxAction, fetchFitnessBoxesAction, fetchSessionsToBoxAction } from './api-actions';


const initialState: {
  fitnessBoxes: TFitnessBox[];
  fitnessBox: TFitnessBox;
  sessionsToBox: TSessions[];

  trainers: TTrainer[];
  reviews: TReview[];

  authorizationStatus: AuthorizationStatus;
} = {
  fitnessBoxes: [],
  fitnessBox: {} as TFitnessBox,
  sessionsToBox: [],

  trainers: [],
  reviews: [],

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
    .addCase(fetchSessionsToBoxAction.fulfilled, (state, action) => {
      state.sessionsToBox = action.payload;
    })


    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(fetchTrainers, (state) => {
      state.trainers = trainers;
    })


    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
