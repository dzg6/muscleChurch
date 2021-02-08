import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.editResistance || initialState;

export const selectEditResistance = createSelector(
  [selectDomain],
  editResistanceState => editResistanceState,
);
