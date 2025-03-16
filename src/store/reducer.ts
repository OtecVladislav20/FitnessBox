import { createReducer } from '@reduxjs/toolkit';
import { fetchFitnessBoxes, fetchReviews, fetchSessions, fetchTrainers } from './action';
import { fitnessBoxes, TFitnessBox } from '../utils/fitness-boxes';
import { trainers, TTrainer } from '../utils/trainers';
import { reviews, TReview } from '../utils/reviews';
import { sessions, TSessions } from '../utils/sessions';

const initialState: {
  fitnessBoxes: TFitnessBox[];
  trainers: TTrainer[];
  reviews: TReview[];
  sessions: TSessions[];
} = {
  fitnessBoxes: [],
  trainers: [],
  reviews: [],
  sessions: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFitnessBoxes, (state) => {
      state.fitnessBoxes = fitnessBoxes;
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(fetchSessions, (state) => {
      state.sessions = sessions;
    })
    .addCase(fetchTrainers, (state) => {
      state.trainers = trainers;
    });
});
