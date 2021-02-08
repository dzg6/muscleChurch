import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StopWatch container
export const initialState: ContainerState = {
  members:[],
  exercises:[]
};

const homePageSlice = createSlice({
  name: 'homePage',
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

export const { actions: homePageActions, reducer, name: sliceKey } = homePageSlice;
