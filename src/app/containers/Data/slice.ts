import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Data container
export const initialState: ContainerState = {
  members:[],
  exercises:[]
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getMembers() {
    },
    getExercises() {
    },
    listMembers(state, action: PayloadAction<any>) {
      state.members = action.payload;
    },
    listExercises(state, action: PayloadAction<any>) {
      state.exercises = action.payload;
    },
  },
});

export const { actions: dataActions, reducer, name: sliceKey } = dataSlice;