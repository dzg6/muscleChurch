import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.tracker || initialState;

export const selectTracker = createSelector(
  [selectDomain],
  trackerState => trackerState,
);
