import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditResistance container
export const initialState: ContainerState = {};

const editResistanceSlice = createSlice({
  name: 'editResistance',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: editResistanceActions, reducer, name: sliceKey } = editResistanceSlice;