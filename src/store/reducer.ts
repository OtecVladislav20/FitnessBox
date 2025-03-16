import { createReducer } from '@reduxjs/toolkit';
import { fetchFitnessBoxes, fetchTrainers } from './action';

const initialState = {
  fitnessBoxes: [],
  trainers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFitnessBoxes, (state, action) => {
      state.fitnessBoxes = action.payload;
    }) 
    .addCase(fetchTrainers, (state, action) => {
      state.trainers = action.payload;
    }),
});
