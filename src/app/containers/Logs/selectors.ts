import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.logs || initialState;

export const selectLogs = createSelector(
  [selectDomain],
  logsState => logsState,
);
