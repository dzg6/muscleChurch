/**
 *
 * EditInput
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

interface Props {
  item?: any;
  exercises?: any;
  state?: String;
  updateFunc?: any;
}

export function EditInput(props: Props) {
  const [clickState, setClickState] = useState(0);
  const [nameInput, setNameInput] = useState(props.item.name);
  const [hasReps, setHasReps] = useState(null);
  const [hasResistance, setHasResistance] = useState(null);

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
      hasResistance: hasResistance
    };
    props.updateFunc(payload);
    setClickState(0);
  };
  const onChangeMemberInput = e => {
    setNameInput(e.target.value);
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
            <Button value={"update"} onClick={updateClick}>
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
                <Button value="delete"  onClick={updateClick}>Yes</Button>
                <Button onClick={cancelClick}>No</Button>
            </>
          );
          break;
    }
  };

  const memberStateSwitch = e => {
    switch (clickState) {
      default:
        return <>{props.item.name}</>;
        break;
      case 1:
        return (
          <>
            <Input
              onChange={onChangeMemberInput}
              placeholder={props.item.name}
            ></Input>
          </>
        );
        break;
    }
  };

  return (
    <>
      <Row>
        <Column>{memberStateSwitch(null)}</Column>
        <Column>{editStateSwitch(null)}</Column>
      </Row>
    </>
  );
}

const Div = styled.div``;
const Input = styled.input``;
const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  flex: 50%;
`;
const Button = styled.button`
  flex: 50%;
  margin-left:.3em;
`;