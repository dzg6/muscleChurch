import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.timer || initialState;

export const selectTimer = createSelector(
  [selectDomain],
  timerState => timerState,
);
