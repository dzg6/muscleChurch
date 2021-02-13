/**
 *
 * Data
 *
 */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, dataActions } from './slice';
import { selectData } from './selectors';
import { dataSaga } from './saga';

interface Props {}

export function Data(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dataSaga });

  const [exercises, setExercises] = useState('');


  const [members, setMembers] = useState([]);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataState = useSelector(selectData);
  const [membersLight, setMembersLight] = useState(dataState.membersLoading);
  const [exercisesLight, setExercisesLight] = useState(dataState.exercisesLoading);
  const [workoutLight, setWorkoutLight] = useState(dataState.workoutLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    if (!members[0]) {
      dispatch(dataActions.getMembers());
      if (dataState.members) {
        setMembers(dataState.members);
      }
    }
  });

  useEffect(() => {
    if (!exercises[0]) {
      dispatch(dataActions.getExercises());
      if (dataState.exercises) {
        setExercises(dataState.exercises);
      }
    }
  });

  //Watcher on dataState changes for lights
  useEffect(() => {
    setMembersLight(dataState.membersLoading)
  }, [dataState.membersLoading]);
  useEffect(() => {
    setExercisesLight(dataState.exercisesLoading)
  }, [dataState.exercisesLoading]);
  useEffect(() => {
    setWorkoutLight(dataState.workoutLoading)
  }, [dataState.workoutLoading]);

  return (
    <>
      <Div>
        {membersLight === 'Green'?<Green /> :''}
        {membersLight === 'Red'?<Red /> :''}
        {membersLight === 'Yellow'?<Yellow /> :''}
        {exercisesLight === 'Green'?<Green /> :''}
        {exercisesLight === 'Red'?<Red /> :''}
        {exercisesLight === 'Yellow'?<Yellow /> :''}
        {workoutLight === 'Green'?<Green /> :''}
        {workoutLight === 'Grey'?<Grey /> :''}
        {workoutLight === 'Yellow'?<Yellow /> :''}
      </Div>
    </>
  );
}

const Div = styled.div`
text-align:center;`;
const Green = styled.svg`
width: 10px;
height: 10px;
background: green;
border-radius: 50%`;
const Red = styled.svg`
width: 10px;
height: 10px;
background: red;
border-radius: 50%`;
const Yellow = styled.svg`
width: 10px;
height: 10px;
background: yellow;
border-radius: 50%`;
const Grey = styled.svg`
width: 10px;
height: 10px;
background: grey;
border-radius: 50%`;

