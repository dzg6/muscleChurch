/**
*
* EditExercise
*
*/

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, editExerciseActions } from './slice';
import { selectEditExercise } from './selectors';
import { editExerciseSaga } from './saga';

import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';

interface Props {}


export function EditExercise(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseSaga });
  const [exercise, setExercise] = useState(false);
  const [resistance, setResistance] = useState(false);
  const [reps, setReps] = useState(false);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editExercise = useSelector(selectEditExercise);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();

const createExercise = e => {
  const payload = {
    exercise: exercise,
    hasResistance: resistance,
    hasReps:reps
  }
  console.log(payload)
  dispatch(editExerciseActions.createExercise(payload));
};

const selectExercise = e => {
  setExercise(e.target.value)
};
const selectReps = e => {
  if(reps != true){
    setReps(true)
  }else{
    setReps(false)
  }
}
const selectResistance = e => {
  if(reps != true){
    setResistance(true)
  }else{
    setResistance(false)
  }
}

return (
<>
<p>Add Exercise </p>
    <Input
      id="create Exercise"
      name="create Exercise"
      onChange={selectExercise}
      placeholder=""
    />

    <Input
      type="checkbox"
      id="resistance"
      onChange={selectResistance}
    />
    <Input
      type="checkbox"
      id="reps"
      onChange={selectReps}
     />


            <Button onClick={createExercise}>Add Exercise</Button>
     <p>Edit Exercise</p>
</>
);

};

const Div = styled.div``;
