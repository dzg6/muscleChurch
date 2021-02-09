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
import { EditItem } from 'app/components/EditItem';
import { Button } from 'app/components/Button';
import { Link } from 'app/components/Link';

import { selectHomePage } from 'app/containers/HomePage/selectors';

interface Props {}

export function EditMember(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editMemberSaga });
  const [addMember, setAddMember] = useState('');

  const homepage = useSelector(selectHomePage);
  const editMember = useSelector(selectEditMember);
  const dispatch = useDispatch();

  const createMember = e => {
    const payload = {
      member: addMember,
    };
    dispatch(editMemberActions.createMember(payload));
  };

  const selectMember = e => {
    setAddMember(e.target.value);
  };
  const testClick = e => {
    console.log(e.target.value);
  };
  console.log(homepage)

  return (
    <>
      <Div>
        <Input
          id="create member"
          name="create member"
          onChange={selectMember}
          placeholder=""
        />
        <br />
        <Link onClick={createMember}>Create New Member</Link>
        <p>Edit Members</p>

          <EditItem value={homepage.members} onClick={testClick} />

      </Div>
    </>
  );
}
const Div = styled.div``;
