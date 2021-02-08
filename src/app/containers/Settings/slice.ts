import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Settings container
export const initialState: ContainerState = {
  exercise:'Chest Press',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectExercise(state, action: PayloadAction<any>) {
      state.exercise = action.payload;
    },
    reset(state) {
    },
  },
});

export const {
  actions: settingsActions,
  reducer,
  name: sliceKey,
} = settingsSlice;
