/**
 *
 * EditInput
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { Column } from 'app/components/Column';
import { Input } from 'app/components/Input';

interface Props {
  item?: any;
  exercises?: any;
  state?: String;
  updateFunc?: any;
}

export function EditInput(props: Props) {
  const [clickState, setClickState] = useState(0);
  const [nameInput, setNameInput] = useState(props.item.name);
  const [hasReps, setHasReps] = useState(props.item.hasReps);
  const [hasResistance, setHasResistance] = useState(props.item.hasResistance);

  const editClick = e => {
    setClickState(1);
  };
  const cancelClick = e => {
    setClickState(0);
  };
  const deleteClick = e => {
    setClickState(2);
  };

  const updateClick = e => {
    const payload = {
      action: e.target.value,
      name: nameInput,
      id: props.item.id,
      hasReps: hasReps,
      hasResistance: hasResistance,
    };
    props.updateFunc(payload);
    setClickState(0);
  };
  const onChangeMemberInput = e => {
    setNameInput(e.target.value);
  };
  const selectReps = e => {
    if (hasReps != true) {
      setHasReps(true);
    } else {
      setHasReps(false);
    }
  };
  const selectResistance = e => {
    if (hasResistance != true) {
      setHasResistance(true);
    } else {
      setHasResistance(false);
    }
  };

  const resistanceSwitch = e => {
    switch (hasResistance) {
      case true:
        return (
          <Column isExercise flex="20%" align="center">
            <Input
              type="checkbox"
              id="reps"
              onChange={selectResistance}
              checked
            />
          </Column>
        );
        break;
      case false:
        return (
          <Column isExercise flex="20%" align="center">
            <Input type="checkbox" id="reps" onChange={selectResistance} />
          </Column>
        );
        break;
    }
  };
  const repsSwitch = e => {
    switch (hasReps) {
      case true:
        return (
          <Column isExercise flex="20%" align="center">
            <Input type="checkbox" id="reps" onChange={selectReps} checked />
          </Column>
        );
        break;
      case false:
        return (
          <Column isExercise flex="20%" align="center">
            <Input type="checkbox" id="reps" onChange={selectReps} />
          </Column>
        );
        break;
    }
  };

  const editStateSwitch = e => {
    switch (clickState) {
      default:
        return (
          <>
            <Button onClick={editClick}>Edit</Button>
          </>
        );
        break;
      case 1:
        return (
          <>
            <Button value={'update'} onClick={updateClick}>
              Update
            </Button>
            <Button onClick={cancelClick}>Cancel</Button>
            <Button onClick={deleteClick}>Delete</Button>
          </>
        );
        break;
      case 2:
        return (
          <>
            Delete Field?
            <Button value="delete" onClick={updateClick}>
              Yes
            </Button>
            <Button onClick={cancelClick}>No</Button>
          </>
        );
        break;
    }
  };

  const memberStateSwitch = e => {
    switch (clickState) {
      default:
        return (
          <>
            <Column flex="40%">{props.item.name}</Column>
            {repsSwitch(null)}
            {resistanceSwitch(null)}
          </>
        );
        break;
      case 1:
        return (
          <>
            <Column flex="40%">
              <Input
                onChange={onChangeMemberInput}
                placeholder={props.item.name}
                isExercise
              ></Input>
            </Column>
            {repsSwitch(null)}
            {resistanceSwitch(null)}
          </>
        );
        break;
    }
  };

  return (
    <>
      <Row>
        {memberStateSwitch(null)}
        <Column flex="20%">{editStateSwitch(null)}</Column>
      </Row>
    </>
  );
}

const Div = styled.div``;
const Row = styled.div`
  display: flex;
`;
const Button = styled.button`
  margin-left: 0.3em;
`;
