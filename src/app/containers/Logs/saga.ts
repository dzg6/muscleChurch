import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { logsActions } from './slice';
import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import { Workout } from 'models';
import { API } from 'aws-amplify';
import * as queries from 'graphql/queries';

import awsconfig from 'aws-exports.js';
Amplify.configure(awsconfig);

export function* doSomething() {
  try {
    


// Simple query
const getWorkOuts = yield API.graphql({ query: queries.listWorkouts });
  //const workouts = yield DataStore.query(Workout);
    
    
    yield put(logsActions.Playerlogs(getWorkOuts.data.listWorkouts.items));
  } catch (error) {
    console.log('error saving post', error);
  }
}

export function* logsSaga() {
  yield takeLatest(logsActions.fetchLogs.type, doSomething);
}
