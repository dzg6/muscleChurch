import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectEditMember } from './selectors';
import { editMemberActions } from './slice';

import Amplify from "@aws-amplify/core";
import { API } from "aws-amplify";

import * as mutations from 'graphql/mutations';

import awsconfig from "aws-exports.js";
import { Action } from '@reduxjs/toolkit';
Amplify.configure(awsconfig);


export function* createMember(action) {

  try {
    yield API.graphql({
      query: mutations.createMember,
       variables: {input: action.payload}});
  } catch (error) {
    console.log('error creating Member', error);
  }
}


export function* updateMember() {
  const member: { member } = yield select(selectEditMember,);
  try {
    yield API.graphql({
      query: mutations.updateMember,
       variables: {input: member}});
  } catch (error) {
    console.log('error updating Member', error);
  }
}


export function* deleteMember() {
  const member: { member } = yield select(selectEditMember,);
  try {
    yield API.graphql({
      query: mutations.deleteMember,
       variables: {input: member}});
  } catch (error) {
    console.log('error deleting Member', error);
  }
}


export function* editMemberSaga() {
  yield takeLatest(editMemberActions.createMember.type, createMember);
  yield takeLatest(editMemberActions.updateMember.type, updateMember);
  yield takeLatest(editMemberActions.deleteMember.type, deleteMember);
}
