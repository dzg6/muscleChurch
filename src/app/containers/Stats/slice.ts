import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Stats container
export const initialState: ContainerState = {};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: statsActions, reducer, name: sliceKey } = statsSlice;