import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Tracker container
export const initialState: ContainerState = {

};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    logExercise() {
    },
  },
});

export const {
  actions: trackerActions,
  reducer,
  name: sliceKey,
} = trackerSlice;
