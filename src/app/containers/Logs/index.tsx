/**
 *
 * Logs
 *
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, logsActions } from './slice';
import { selectLogs } from './selectors';
import { logsSaga } from './saga';

import { Button } from 'app/components/Button';
import { LogViewer } from 'app/components/LogViewer';

interface Props {}

export function Logs(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: logsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logs = useSelector(selectLogs);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const getLogs = e => {
    dispatch(logsActions.fetchLogs());
  };

  return (
    <>
      <Helmet>
        <title>Logs</title>
        <meta name="description" content="Description of Logs" />
      </Helmet>
      <Div>
        <Button stop value="stop" onClick={getLogs}>
          Get Workouts
        </Button>
        <LogViewer test={logs.test} />
      </Div>
    </>
  );
}

const Div = styled.div``;
