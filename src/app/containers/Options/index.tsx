/**
 *
 * Settings
 *
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { trackerActions } from 'app/containers/Tracker/slice';
import { reducer, sliceKey, optionsActions } from './slice';

import { selectOptions } from './selectors';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { Select } from 'app/components/Select';
import { OptionField } from 'app/components/OptionField';

import { selectData } from 'app/containers/Data/selectors';

interface Props {}

export function Options(props: Props) {

  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [weight, setWeight] = useState('');
  const [hasResistance, setHasResistance] = useState(false);
  const [hasReps, setHasReps] = useState(false);

  const options = useSelector(selectOptions);
  const dataState = useSelector(selectData);

  const dispatch = useDispatch();

  const memberSelect = e => {
    console.log(dataState.members[e.target.value].name);
    dispatch(optionsActions.selectMember(dataState.members[e.target.value].name));
  };

  const exerciseSelect = e => {
    setHasReps(dataState.exercises[e.target.value].hasReps);
    setHasResistance(dataState.exercises[e.target.value].hasResistance);
    dispatch(
      optionsActions.selectExercise(
        dataState.exercises[e.target.value].name,
      ),
    );
  };
  const weightSelect = e => {
    dispatch(optionsActions.selectWeight(e.target.value));
    setWeight(options.weight);
  };
  const resistanceSelect = e => {
    dispatch(optionsActions.selectResistance(e.target.value));
  };
  const repsSelect = e => {
    dispatch(optionsActions.selectReps(e.target.value));
  };

  const getResistance = () => {
    if (hasResistance === true) {
      return (
        <>
          <Select
            id="resistance bands"
            name="resistance band"
            onChange={resistanceSelect}
          >
                  <Option value="none" selected disabled hidden> 
          Select an Option 
      </Option>
            <Option value="Black L2">Black L2</Option>
            <Option value="Black L1">Black L1</Option>
            <Option value="Orange">Orange</Option>
            <Option value="Green">Green</Option>
            <Option value="Purple">Purple</Option>
          </Select>
        </>
      );
    }
  };

  const getReps = () => {
    if (hasReps === true) {
      return (
        <>
          <Input
            id="reps"
            name="reps"
            onChange={repsSelect}
            placeholder="total reps"
          />
        </>
      );
    }
  };


  useEffect(() => {
  
  }, []);


  return (
    <>
      <Select name="Members" id="Members" onChange={memberSelect}>
      <Option value="none" selected disabled hidden> 
          Select an Option 
      </Option>
        <OptionField value={dataState.members} />
      </Select>

      <Select name="Exercises" id="Exercise" onChange={exerciseSelect}>
      <Option value="none" selected disabled hidden> 
          Select an Option 
      </Option>
        <OptionField value={dataState.exercises} />
      </Select>
      <br />
      <Input
        id="weight"
        name="weight"
        onChange={weightSelect}
        value={options.weight}
        placeholder="weight in LBS"
      />
      <br />
      {getResistance()}
      {getReps()}
    </>
  );
}

const Div = styled.div`
  text-align: center;
`;
const Option = styled.option`
color:black;
`;