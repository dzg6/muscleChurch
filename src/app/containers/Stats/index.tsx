/**
*
* Stats
*
*/

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectStats } from './selectors';
import { statsSaga } from './saga';
import { Logs } from  'app/containers/Logs';

interface Props {}


export function Stats(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: statsSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stats = useSelector(selectStats);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<>
  <Helmet>
    <title>Stats</title>
    <meta name="description" content="Description of Stats" />
  </Helmet>
  <Div>
    <h2>Under Construction</h2><br />
    <Logs />
    </Div>
</>
);

};

const Div = styled.div`
text-align:center`;
