/* eslint-disable prettier/prettier */
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSettings } from '../Settings/selectors';
import { selectStopWatch } from '../StopWatch/selectors';
import { selectTracker } from './selectors';
import { trackerActions } from './slice';
import { DataStore } from '@aws-amplify/datastore';
import { Workout } from 'models';

export function* doSomething() {
  const settings: { player; exercise; weight; resistanceBand } = yield select(
    selectSettings,
  );
  const time: { time } = yield select(selectStopWatch);
  try {
    yield DataStore.save(
      new Workout({
        date: new Date().toLocaleString().split(',')[0],
        player: settings.player,
        exercise: settings.exercise,
        weight: settings.weight,
        resistance: settings.resistanceBand.toString(),
        time: time.time.toString(),
      }),
    );

  } catch (error) {
    console.log('error saving post', error);
  }
}

export function* trackerSaga() {
  yield takeLatest(trackerActions.logExercise.type, doSomething);
}
