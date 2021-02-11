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
  const [exercisesLight, setExercisesLight] = useState('Red Light');

  const [members, setMembers] = useState([]);
  const [membersLight, setMembersLight] = useState('Red Light');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataState = useSelector(selectData);
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

  useEffect(() => {
    {
      typeof members[0] === 'object' && members[0] !== null
        ? setMembersLight('Green Light')
        : console.log('red light');
    }
  });
  useEffect(() => {
    {
      typeof exercises[0] === 'object' && exercises[0] !== null
        ? setExercisesLight('Green Light')
        : console.log('red light');
    }
  });

  return (
    <>
      <Div>
        Loading Data:
        {membersLight === 'Green Light'?<Green />: <Red />}
        {exercisesLight === 'Green Light'?<Green />: <Red />}
      </Div>
    </>
  );
}

const Div = styled.div``;
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

