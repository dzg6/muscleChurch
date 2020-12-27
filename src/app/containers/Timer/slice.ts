import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Timer container
export const initialState: ContainerState = {};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: timerActions, reducer, name: sliceKey } = timerSlice;
