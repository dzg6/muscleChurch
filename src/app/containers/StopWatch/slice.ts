import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StopWatch container
export const initialState: ContainerState = {
  time:0,
};

const stopWatchSlice = createSlice({
  name: 'stopWatch',
  initialState,
  reducers: {
    selectTime(state, action: PayloadAction<any>) {
      state.time = action.payload;
    },
    reset(state) {
      state.time = 0;
    },
  },
});

export const {
  actions: stopWatchActions,
  reducer,
  name: sliceKey,
} = stopWatchSlice;
