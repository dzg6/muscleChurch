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

// import { Input } from 'app/components/Input';
import { EditItem } from 'app/components/EditItem';
import { Column } from 'app/components/Column';
import { Input } from 'app/components/Input';

import { selectData } from 'app/containers/Data/selectors';

interface Props {}

export function EditExercise(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseSaga });
  const [exercise, setExercise] = useState('');
  const [resistance, setResistance] = useState(false);
  const [reps, setReps] = useState(false);
  const [type, setType] = useState('exercise');

  const editExercise = useSelector(selectEditExercise);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  const createExercise = e => {
    const payload = {
      name: exercise,
      hasResistance: resistance,
      hasReps: reps,
    };
    dispatch(editExerciseActions.createExercise(payload));
    setExercise('');
  };

  const selectExercise = e => {
    setExercise(e.target.value);
  };
  const selectReps = e => {
    if (reps != true) {
      setReps(true);
    } else {
      setReps(false);
    }
  };
  const selectResistance = e => {
    if (resistance != true) {
      setResistance(true);
    } else {
      setResistance(false);
    }
  };

  const updateExerciseClick = payload => {
    if (payload.action === 'update') {
      dispatch(editExerciseActions.updateExercise(payload));
    }

    if (payload.action === 'delete') {
      dispatch(editExerciseActions.deleteExercise(payload));
    }
  };
  return (
    <>
      <Div>
        <Row>
          <Column flex="40%">Exercise</Column>
          <Column align="center" flex="20%">Has Resistance</Column>
          <Column align="center" flex="20%">Has Reps</Column>
          <Column flex="20%"></Column>
        </Row>
        <Row>
          <Column flex="40%">
            <Input
              id="create Exercise"
              name="create Exercise"
              onChange={selectExercise}
              value={exercise}
              placeholder=""
              isExercise
            />
          </Column>
          <Column isExercise flex="20%" align="center">
            <Input
              type="checkbox"
              id="resistance"
              onChange={selectResistance}
            />
          </Column>
          <Column isExercise flex="20%" align="center">
            <Input type="checkbox" id="reps" onChange={selectReps} />
          </Column >
          <Column isExercise flex="20%">
            <Button onClick={createExercise}>Add Exercise</Button>
          </Column>
        </Row>
        <EditItem items={data.exercises} updateFunc={updateExerciseClick} />
      </Div>
    </>
  );
}

const Div = styled.div``;
const Row = styled.div`
  display: flex;
`;

const Button = styled.button`
  flex: 25%;
  margin-left: 0.3em;
`;


