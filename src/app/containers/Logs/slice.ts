import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Logs container
export const initialState: ContainerState = {
  test: [],
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    Playerlogs(state, action: PayloadAction<any>) {
      state.test = action.payload;
    },
    fetchLogs() {
      console.log('fetch');
    },
  },
});

export const { actions: logsActions, reducer, name: sliceKey } = logsSlice;
