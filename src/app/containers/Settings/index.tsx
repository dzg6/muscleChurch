/**
 *
 * Settings
 *
 */

import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import {trackerActions } from 'app/containers/Tracker/slice';
import { reducer, sliceKey, settingsActions } from './slice';


import { selectSettings } from './selectors';
import {  Button } from "app/components/Button";
import {  Input } from "app/components/Input";
import {  Select } from "app/components/Select";

interface Props {}

export function Settings(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [weight, setWeight] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = useSelector(selectSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const playerSelect = (e) => {
    dispatch(settingsActions.selectPlayer(e.target.value));
  }

  const exerciseSelect = (e) => {
    dispatch(settingsActions.selectExercise(e.target.value));
  }
  const weightSelect = (e) => {
    dispatch(settingsActions.selectWeight(e.target.value));
    setWeight(settings.weight);
  }
  const resistanceChange = (e) => {
    dispatch(settingsActions.selectResistance(e.target.value));
  }


  const getWeightSwitch = () =>{
    switch (settings.exercise) {
      case 'Pull Ups':
        return <> 
        <Select id="resistance bands" name="resistance band" onChange={resistanceChange}> 
          <option value="Black L2">Black L2</option>
          <option value="Black L1">Black L1</option>
          <option value="Orange">Orange</option>
          <option value="Orange">Green</option>
        </Select>
        <Input id="weight" name="weight" onChange={weightSelect} value={settings.weight} placeholder='weight in LBS' />
        </>
      case 'Dips':
        return <> 
        <Select id="resistance bands" name="resistance band" onChange={resistanceChange}> 
          <option value="Black L2">Black L2</option>
          <option value="Black L1">Black L1</option>
          <option value="Orange">Orange</option>
          <option value="Orange">Green</option>
        </Select>
        <Input id="weight" name="weight" onChange={weightSelect} value={settings.weight} placeholder='weight in LBS' />
        </>
        break;
    
      default:
       return  <Input id="weight" name="weight" onChange={weightSelect} value={settings.weight} placeholder='weight in LBS'/>
        break;
    }
  }

  return (
    <>
      <Select name="Players" id="Player" onChange={playerSelect} >
        <option value="Dan Smith">Dan Smith</option>
        <option value="Ryan Smith">Ryan Smith</option>
        <option value="Evelyn Smith">Evelyn Smith</option>
        <option value="Patty Smith">Patty Smith</option>
        <option value="Kramer Knecht">Kramer Knecht</option>
        <option value="Mark Knecht">Mark Knecht</option>
        <option value="Genie Knecht">Genie Knecht</option>
        <option value="Grandma Orene">Grandma Orene</option>
        <option value="Aunt Sunny">Aunt Sunny</option>
        <option value="Mark Reynolds">Mark Reynolds</option>
        <option value="Steve Wills">Steve Wills</option>
        <option value="Ryan Hayes">Ryan Hayes</option>
      </Select>




      <Select name="Exercises" id="Exercise" onChange={exerciseSelect}>
        <option value="Chest Press">Chest Press</option>
        <option value="Shoulder Press">Shoulder Press</option>
        <option value="Leg Press">Leg Press</option>
        <option value="Pull Ups">Pull Ups</option>
        <option value="Dips">Dips</option>
        <option value="Delts">Delts</option>
        <option value="Horozontial Pulls">Horozontial Pulls</option>
        <option value="Bicep Curls">Bicep Curls</option>
      </Select>
      {getWeightSwitch()}
    </>
  );
}

const Div = styled.div`
text-align: center`;
