/* eslint-disable prettier/prettier */
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSettings } from '../Settings/selectors';
import { selectStopWatch } from '../StopWatch/selectors';
import { selectTracker } from './selectors';
import { trackerActions } from './slice';



import Amplify from "@aws-amplify/core";
import { API } from "aws-amplify";

import * as mutations from 'graphql/mutations';


import { DataStore } from '@aws-amplify/datastore';
import { Workout } from 'models';

import awsconfig from "aws-exports";
Amplify.configure(awsconfig);

export function* doSomething() {
  
  const settings: { player; exercise; weight; resistanceBand } = yield select(
    selectSettings,
  );

  const time: { time } = yield select(selectStopWatch);

  const tempWorkPut =      {   
  date: new Date().toLocaleString().split(',')[0],
  player: settings.player,
  exercise: settings.exercise,
  weight: settings.weight,
  resistance: settings.resistanceBand.toString(),
  time: time.time.toString(),
  };

  // const newTodo = await API.graphql({
  //   query: mutations.createWorkout,
  //    variables: {input: tempWorkPut}});


  try {

    // yield DataStore.save(
    //   new Workout({
    //     date: new Date().toLocaleString().split(',')[0],
    //     player: settings.player,
    //     exercise: settings.exercise,
    //     weight: settings.weight,
    //     resistance: settings.resistanceBand.toString(),
    //     time: time.time.toString(),
    //   }),
    // );
    yield API.graphql({
      query: mutations.createWorkout,
       variables: {input: tempWorkPut}});

  } catch (error) {
    console.log('error saving post', error);
  }
}

export function* trackerSaga() {
  yield takeLatest(trackerActions.logExercise.type, doSomething);
}
