import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditWorkout container
export const initialState: ContainerState = {};

const editWorkoutSlice = createSlice({
  name: 'editWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: editWorkoutActions, reducer, name: sliceKey } = editWorkoutSlice;