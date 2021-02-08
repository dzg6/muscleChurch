/**
*
* EditResistance
*
*/

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectEditResistance } from './selectors';
import { editResistanceSaga } from './saga';

interface Props {}


export function EditResistance(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editResistanceSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editResistance = useSelector(selectEditResistance);
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
