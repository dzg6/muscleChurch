import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StopWatch container
export const initialState: ContainerState = {};

const stopWatchSlice = createSlice({
  name: 'stopWatch',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: stopWatchActions,
  reducer,
  name: sliceKey,
} = stopWatchSlice;
