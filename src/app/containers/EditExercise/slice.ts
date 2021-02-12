import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditExercise container
export const initialState: ContainerState = {
  exercise:'empty',
  hasResistance:false,
  hasReps:false
};

const editExerciseSlice = createSlice({
  name: 'editExercise',
  initialState,
  reducers: {
    createExercise(state, action: PayloadAction<any>) {
    },
    updateExercise(state, action: PayloadAction<any>) {
    },
    deleteExercise(state, action: PayloadAction<any>) {
    },
  },
});

export const { actions: editExerciseActions, reducer, name: sliceKey } = editExerciseSlice;