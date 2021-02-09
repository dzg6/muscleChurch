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
import { Option } from 'app/components/Option';

import { selectHomePage } from 'app/containers/HomePage/selectors';

interface Props {}

export function Options(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [weight, setWeight] = useState('');
  const [hasResistance, setHasResistance] = useState(false);
  const [hasReps, setHasReps] = useState(false);

  const options = useSelector(selectOptions);
  const homepage = useSelector(selectHomePage);

  const dispatch = useDispatch();

  const memberSelect = e => {
    console.log(e.target.value);
    dispatch(optionsActions.selectMember(e.target.value));
  };

  const exerciseSelect = e => {
    setHasReps(homepage.exercises[e.target.value].hasReps);
    setHasResistance(homepage.exercises[e.target.value].hasResistance);
    dispatch(
      optionsActions.selectExercise(
        homepage.exercises[e.target.value].exercise,
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
            <option value="Black L2">Black L2</option>
            <option value="Black L1">Black L1</option>
            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Purple">Purple</option>
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
    dispatch(optionsActions.selectMember(homepage.members[0].member));
    dispatch(optionsActions.selectExercise(homepage.exercises[0].exercise));
    setHasReps(homepage.exercises[0].hasReps);
    setHasResistance(homepage.exercises[0].hasResistance);
  }, []);

  return (
    <>
      <Select name="Players" id="Player" onChange={memberSelect}>
        <Option value={homepage.members} />
      </Select>

      <Select name="Exercises" id="Exercise" onChange={exerciseSelect}>
        <Option value={homepage.exercises} />
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
