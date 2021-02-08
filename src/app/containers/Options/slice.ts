import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Settings container
export const initialState: ContainerState = {
  member:'',
  exercise:'',
  weight:'',
  resistance:'',
  reps:'',
  time:''
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    selectMember(state, action: PayloadAction<any>) {
      state.member = action.payload;
    },
    selectExercise(state, action: PayloadAction<any>) {
      state.exercise = action.payload;
    },
    selectWeight(state, action: PayloadAction<any>) {
      state.weight = action.payload;
    },
    selectResistance(state, action: PayloadAction<any>) {
      state.resistance = action.payload;
    },
    selectReps(state, action: PayloadAction<any>) {
      state.reps = action.payload;
    },
    reset(state) {
      state.weight = '';
    },
  },
});

export const {
  actions: optionsActions,
  reducer,
  name: sliceKey,
} = optionsSlice;
