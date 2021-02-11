import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { dataActions } from './slice';

import Amplify from '@aws-amplify/core';
import { API } from 'aws-amplify';

import * as queries from 'graphql/queries';

import awsconfig from 'aws-exports.js';
Amplify.configure(awsconfig);

export function* getMembers() {
  try {
    const getMembers = yield API.graphql({ query: queries.listMembers });
    yield put(dataActions.listMembers(getMembers.data.listMembers.items));
  } catch (error) {
    console.log('error fetching Members', error);
  }
}

export function* getExercises() {
  try {
    const getExercises = yield API.graphql({ query: queries.listExercises });

    yield put(dataActions.listExercises(getExercises.data.listExercises.items),);

  } catch (error) {
    console.log('error fetching Exercises', error);
  }
}
export function* dataSaga() {
  yield takeLatest(dataActions.getMembers.type, getMembers);
  yield takeLatest(dataActions.getExercises.type, getExercises);
}
