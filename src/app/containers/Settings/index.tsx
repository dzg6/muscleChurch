/**
 *
 * Settings
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectSettings } from './selectors';
import {  Button } from "app/components/Button";
import {  Input } from "app/components/Input";
import {  Select } from "app/components/Select";

interface Props {}

export function Settings(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = useSelector(selectSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div>Settings</Div>
      <Select name="Players" id="Player">
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
      <Select name="Exercises" id="Exercise">
        <option value="Chest Press">Chest Press</option>
        <option value="Shoulder Press">Shoulder Press</option>
        <option value="Leg Press">Leg Press</option>
        <option value="Pull Ups">Pull Ups</option>
        <option value="Pull Ups">Dips</option>
        <option value="Pull Ups">Delts</option>
        <option value="Horozontial Pulls">Horozontial Pulls</option>
        <option value="Bicep Curls">Bicep Curls</option>
      </Select>
    </>
  );
}

const Div = styled.div`
text-align: center`;
