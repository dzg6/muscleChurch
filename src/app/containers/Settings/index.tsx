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

import { selectSettings } from './selectors';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { Select} from 'app/components/Select';

interface Props {}

export function Settings(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [weight, setWeight] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = useSelector(selectSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();


  return (
    <>
    <Div>
    <p>Add Member / Edit Members</p>
    <p>Add Exerecise / Edit Exercises</p>
    <p>Add Workout / Edit Workouts</p>
    </Div>
    </>
  );
}

const Div = styled.div`
`;
