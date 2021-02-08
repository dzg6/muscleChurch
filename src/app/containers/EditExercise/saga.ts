import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { editExerciseActions } from './slice';

import Amplify from "@aws-amplify/core";
import { API } from "aws-amplify";

import * as mutations from 'graphql/mutations';

import awsconfig from "aws-exports.js";
Amplify.configure(awsconfig);

export function* doSomething(actions) {
  console.log(actions.payload)
  try {
    yield API.graphql({
      query: mutations.createExercise,
       variables: {input: actions.payload}});
  } catch (error) {
    console.log('error creating Member', error);
  }


}

export function* editExerciseSaga() {
  yield takeLatest(editExerciseActions.createExercise.type, doSomething);
}
