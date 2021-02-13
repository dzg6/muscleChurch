import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectEditMember } from './selectors';
import { editMemberActions } from './slice';
import { dataActions } from 'app/containers/Data/slice';

import Amplify from '@aws-amplify/core';
import { API } from 'aws-amplify';

import * as mutations from 'graphql/mutations';

import awsconfig from 'aws-exports.js';
import { Action } from '@reduxjs/toolkit';
Amplify.configure(awsconfig);

export function* createMember(action) {
  try {
    yield put(dataActions.membersLoadingChange("Yellow"));
    yield API.graphql({
      query: mutations.createMember,
      variables: { input: action.payload },
    });
    yield put(dataActions.getMembers());
  } catch (error) {
    console.log('error creating Member', error);
  }
}

export function* updateMember(action) {
  const updatedMember = {
    id: action.payload.id,
    name: action.payload.name,
  };
  try {
    yield put(dataActions.membersLoadingChange("Yellow"));
    yield API.graphql({
      query: mutations.updateMember,
      variables: { input: updatedMember },
    });
    yield put(dataActions.getMembers());
  } catch (error) {
    console.log('error updating Member', error);
  }
}

export function* deleteMember(action) {
  const deleteMember = {
    id: action.payload.id,
  };
  try {
    yield put(dataActions.membersLoadingChange("Yellow"));
    yield API.graphql({
      query: mutations.deleteMember,
      variables: { input: deleteMember },
    });
    yield put(dataActions.getMembers());
  } catch (error) {
    console.log('error updating Member', error);
  }
}

export function* editMemberSaga() {
  yield takeLatest(editMemberActions.createMember.type, createMember);
  yield takeLatest(editMemberActions.updateMember.type, updateMember);
  yield takeLatest(editMemberActions.deleteMember.type, deleteMember);
}
