import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { logsActions } from './slice';
import { DataStore } from '@aws-amplify/datastore';
import { Workout } from 'models';

export function* doSomething() {


  try {
    const workouts = yield DataStore.query(Workout);
    yield put(logsActions.Playerlogs(workouts));
  } catch (error) {
    console.log('error saving post', error);
  }
}

export function* logsSaga() {


  yield takeLatest(logsActions.fetchLogs.type, doSomething);
}