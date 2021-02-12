import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { editExerciseActions } from './slice';
import { dataActions } from 'app/containers/Data/slice';

import Amplify from '@aws-amplify/core';
import { API } from 'aws-amplify';

import * as mutations from 'graphql/mutations';

import awsconfig from 'aws-exports.js';
Amplify.configure(awsconfig);

export function* createExercise(actions) {
  console.log(actions.payload);
  try {
    yield API.graphql({
      query: mutations.createExercise,
      variables: { input: actions.payload },
    });
    yield put(dataActions.getExercises());
  } catch (error) {
    console.log('error creating Exercise', error);
  }
}


export function* updateExercise(action) {
  const updatedExercise = {
    id: action.payload.id,
    name: action.payload.name,
    hasReps: action.payload.hasReps,
    hasResistance: action.payload.hasResistance,
  };
  try {
    yield API.graphql({
      query: mutations.updateExercise,
      variables: { input: updatedExercise },
    });
    yield put(dataActions.getExercises());
  } catch (error) {
    console.log('error updating Exercise', error);
  }
}

export function* deleteExercise(action) {
  const deleteExercise = {
    id: action.payload.id,
  };
  try {
    yield API.graphql({
      query: mutations.deleteExercise,
      variables: { input: deleteExercise },
    });
    yield put(dataActions.getExercises());
  } catch (error) {
    console.log('error updating Exercise', error);
  }
}


export function* editExerciseSaga() {
  yield takeLatest(editExerciseActions.createExercise.type, createExercise);
  yield takeLatest(editExerciseActions.updateExercise.type, updateExercise);
  yield takeLatest(editExerciseActions.deleteExercise.type, deleteExercise);
}
