import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.data || initialState;

export const selectData = createSelector(
  [selectDomain],
  dataState => dataState,
);
