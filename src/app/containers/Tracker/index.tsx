/**
 *
 * Tracker
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectTracker } from './selectors';
import { trackerSaga } from './saga';
import { Settings } from '../Settings/Loadable';
import { StopWatch } from '../StopWatch/Loadable';
import { Logs } from '../Logs/Loadable';

interface Props {}

export function Tracker(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: trackerSaga });

  // test

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tracker = useSelector(selectTracker);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div>
        <Settings />
        <StopWatch />
        <Logs />
      </Div>
    </>
  );
}

const Div = styled.div`
  margin-top: 25px;
  text-align: center;
`;
