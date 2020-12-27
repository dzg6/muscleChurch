/**
 *
 * Timer
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectTimer } from './selectors';

interface Props {}

export function Timer(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const timer = useSelector(selectTimer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div>Timer</Div>
    </>
  );
}

const Div = styled.div``;
