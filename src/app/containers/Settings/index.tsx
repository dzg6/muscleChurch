/**
 *
 * Settings
 *
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey, settingsActions } from './slice';

import { EditMember } from 'app/containers/EditMember';
import { EditExercise } from 'app/containers/EditExercise';
import { EditWorkout } from 'app/containers/EditWorkout';

import { selectSettings } from './selectors';
import { Link } from 'app/components/Link';

interface Props {}

export function Settings(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  //CLICK STATE - 0 = settings, 1 = members, 2 = exercise, 3 = workouts
  const [clickState, setClickState] = useState(0);

  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const onClickBack = e => {
    setClickState(0);
  };
  const onClickMember = e => {
    setClickState(1);
  };
  const onClickExercise = e => {
    setClickState(2);
  };
  const onClickWorkout = e => {
    setClickState(3);
  };

  const clickStateSwitch = () => {
    switch (clickState) {
      case 0:
        return (
          <>
            <Link to="/">Go back to HomePage</Link>
            <br />
            <Link onClick={onClickMember}>Edit Members</Link>
            <br />
            <Link onClick={onClickExercise}>Edit Exercises</Link>
            <br />
            <Link onClick={onClickWorkout}>Edit Workouts</Link>
            <br />
          </>
        );
        break;
      case 1:
        return (
          <>
            <Link onClick={onClickBack}>Back</Link>
            <br />
            <EditMember />
          </>
        );
        break;
      case 2:
        return (
          <>
            <Link onClick={onClickBack}>Back</Link>
            <br />
            <EditExercise />
          </>
        );
        break;
      case 3:
        return (
          <>
            <Link onClick={onClickBack}>Back</Link>
            <br />
            <EditWorkout />
          </>
        );
        break;
    }
  };

  return (
    <>
      <Div>{clickStateSwitch()}</Div>
    </>
  );
}

const Div = styled.div``;
