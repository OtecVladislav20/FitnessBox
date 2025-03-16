import { createReducer } from '@reduxjs/toolkit';
import { fetchFitnessBox, fetchFitnessBoxes, fetchTrainer, fetchTrainers } from './action';
import { fitnessBoxes, TFitnessBox } from '../utils/fitness-boxes';
import { trainers, TTrainer } from '../utils/trainers';

const initialState: {
  fitnessBoxes: TFitnessBox[];
  fitnessBox: TFitnessBox;
  trainers: TTrainer[];
  trainer: TTrainer;
} = {
  fitnessBoxes: [],
  fitnessBox: {} as TFitnessBox,
  trainers: [],
  trainer: {} as TTrainer,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFitnessBoxes, (state) => {
      state.fitnessBoxes = fitnessBoxes;
    })
    .addCase(fetchFitnessBox, (state, action) => {
      state.fitnessBox = state.fitnessBoxes.find((box) => box.id === action.payload);
    })
    .addCase(fetchTrainers, (state) => {
      state.trainers = trainers;
    })
    .addCase(fetchTrainer, (state, action) => {
      state.trainer = state.trainers.find((t) => t.id === action.payload);
    });
});
