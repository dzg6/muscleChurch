import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { homePageActions } from './slice';

import Amplify from "@aws-amplify/core";
import { API } from "aws-amplify";

import * as queries from 'graphql/queries';

import awsconfig from "aws-exports.js";
Amplify.configure(awsconfig);

export function* getMembers() {
  try {
    const getMembers = yield API.graphql({ query: queries.listMembers });
    yield put(homePageActions.listMembers(getMembers.data.listMembers.items));
  } catch (error) {
    console.log('error creating Member', error);
  }
}

export function* getExercises() {
  try {
    const getExercises = yield API.graphql({ query: queries.listExercises });
    console.log(getExercises);
    yield put(homePageActions.listExercises(getExercises.data.listExercises.items));
  } catch (error) {
    console.log('error creating Member', error);
  }
}

export function* homePageSaga() {
  yield takeLatest(homePageActions.getMembers.type, getMembers);
  yield takeLatest(homePageActions.getExercises.type, getExercises);
}
