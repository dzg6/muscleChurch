import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.options || initialState;

export const selectOptions = createSelector(
  [selectDomain],
  optionsState => optionsState,
);
