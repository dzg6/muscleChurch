/**
 *
 * Members Settings
 *
 */
//App Imports
import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';

//Container Imports
import { reducer, sliceKey } from '../slice';
// import { loginSaga } from './saga';
// import { selectStatus } from '../selectors';

//Create User container

export function Members () {

  // useInjectReducer({ key: sliceKey, reducer: reducer });
  // useInjectSaga({ key: sliceKey, saga: loginSaga });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    e.target.reset();

    // dispatch(actions.submitLogin({username:username, password:password}));
  };



  return (
    <>
    </>
  );
};


const Title = styled.h1``;
const Div = styled.div`
  max-width: 300px;
  margin:auto auto;
`;

