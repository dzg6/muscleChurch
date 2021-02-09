/**
 *
 * EditItem
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';

interface Props {
  value: any;
  onClick:any;
}

export function EditItem(props: Props) {
  const [clickState, setClickState] = useState(0);

  const editClick = e => {
    setClickState(1);
  };
  const cancelClick = e => {
    setClickState(0);
  };

  const editStateSwitch = (id) => {
    switch (clickState) {
      case 0:
        return (
          <>
          <Button onClick={editClick}>Edit</Button>
          </>
        );
        break;
      case 1:
        return (
          <>
            <Button onClick={props.onClick} value={id}>Update</Button>
             / 
            <Button onClick={cancelClick}>Cancel</Button>
          </>
        );
        break;
    }
  };

  const memberStateSwitch = (member) => {
    switch (clickState) {
      case 0:
        return (
          <>
          {member}
          </>
        );
        break;
      case 1:
        return (
          <>
            <Input placeholder={member} ></Input>
          </>
        );
        break;
    }
  };

  if (props.value[0].member) {
    return (
      <>
        {props.value.map(function (element) {
          return (
            <Row>
              <Column>{memberStateSwitch(element.member)}</Column>
              <Column>{editStateSwitch(element.id)}</Column>
            </Row>
          );
        })}
      </>
    );
  } else {
    return <option value="empty">Empty</option>;
  }
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
`;

