/**
 *
 * EditMember
 *
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, editMemberActions } from './slice';
import { selectEditMember } from './selectors';
import { editMemberSaga } from './saga';

import { Input } from 'app/components/Input';
import { Column } from 'app/components/Column';
import { EditItem } from 'app/components/EditItem';

import { selectData } from 'app/containers/Data/selectors';

interface Props {}

export function EditMember(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editMemberSaga });
  const [addMember, setAddMember] = useState('');
  const [type, setType] = useState('member');

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  const createMember = e => {
    const payload = {
      name: addMember,
    };
    dispatch(editMemberActions.createMember(payload));
    setAddMember("")
  };

  const selectMember = e => {
    setAddMember(e.target.value);
  };
  const updateMemberClick = payload => {
    if (payload.action === 'update') {
      dispatch(editMemberActions.updateMember(payload));
    }

    if (payload.action === 'delete') {
      dispatch(editMemberActions.deleteMember(payload));
    }
  };
  console.log(data);

  return (
    <>
      <Div>
        <Row>
          <Column flex="50%">Members</Column>
          <Column flex="50%"></Column>
        </Row>
        <Row>
          <Column flex="50%">
            <Input
              id="create member"
              name="create member"
              value={addMember}
              onChange={selectMember}
              placeholder=""
              isExercise
            />
          </Column>
          <Column flex="50%">
            <Button onClick={createMember}>Create New Member</Button>
          </Column>
        </Row>
        <EditItem items={data.members} updateFunc={updateMemberClick} />
      </Div>
    </>
  );
}
const Div = styled.div``;
const Row = styled.div`
  display: flex;
`;
const Button = styled.button`
  flex: 50%;
  margin-left: 0.3em;
`;
