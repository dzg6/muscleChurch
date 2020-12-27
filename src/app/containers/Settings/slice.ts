import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Settings container
export const initialState: ContainerState = {
  player:'Dan Smith',
  exercise:'Chest Press',
  weight:'',
  resistanceBand:0
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectPlayer(state, action: PayloadAction<any>) {
      state.player = action.payload;
    },
    selectExercise(state, action: PayloadAction<any>) {
      state.exercise = action.payload;
    },
    selectWeight(state, action: PayloadAction<any>) {
      state.weight = action.payload;
    },
    selectResistance(state, action: PayloadAction<any>) {
      state.resistanceBand = action.payload;
    },
    reset(state) {
      state.resistanceBand = 0;
      state.weight = '';
    },
  },
});

export const {
  actions: settingsActions,
  reducer,
  name: sliceKey,
} = settingsSlice;
