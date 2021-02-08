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
import { Button } from 'app/components/Button';
import { Link } from 'app/components/Link';

interface Props {}


export function EditMember(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
useInjectSaga({ key: sliceKey, saga: editMemberSaga });
const [addMember, setAddMember] = useState('');


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editMember = useSelector(selectEditMember);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();

const createMember = e => {
  const payload = {
    member: addMember,
  }
  dispatch(editMemberActions.createMember(payload));
};

const selectMember = e => {
  setAddMember(e.target.value);
};

const onClickMember = e => {
  console.log("clicked member");
};

return (
<>
  <Div>
  <Link value="test" onClick={onClickMember}>Add Member </Link>
    <Input
              id="create member"
              name="create member"
              onChange={selectMember}
              placeholder=""
            />
            <br />
            <Button onClick={createMember}>Create New Member</Button>
     <p>Edit Members</p>
  </Div>
</>
);

};

const Div = styled.div``;
