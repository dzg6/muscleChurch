/**
*
* EditWorkout
*
*/

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectEditWorkout } from './selectors';
import { editWorkoutSaga } from './saga';

interface Props {}


export function EditWorkout(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editWorkoutSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editWorkout = useSelector(selectEditWorkout);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<>
  <Div>
    </Div>
</>
);

};

const Div = styled.div``;
