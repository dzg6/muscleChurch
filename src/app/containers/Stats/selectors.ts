import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.stats || initialState;

export const selectStats = createSelector(
  [selectDomain],
  statsState => statsState,
);
