/**
*
* HomePage
*
*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';


import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, homePageActions } from './slice';
import { selectHomePage } from './selectors';
import { homePageSaga } from './saga';


export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  const [exercises, setExercises] = useState('');
  const [exercisesLight, setExercisesLight] = useState('Red Light');

  const [members, setMembers] = useState([]);
  const [membersLight, setMembersLight] = useState('Red Light');
  
  
  const homepageState = useSelector(selectHomePage);
  const dispatch = useDispatch();

  useEffect(() => {   
    if(!members[0]){
      dispatch(homePageActions.getMembers());
      if(homepageState.members){
      setMembers(homepageState.members)
      }
    }
  })

  useEffect(() => {   
    if(!exercises[0]){
      dispatch(homePageActions.getExercises());
      if(homepageState.exercises){
      setExercises(homepageState.exercises)
      }
    }
  })

  useEffect(() => {  
    {typeof members[0] === 'object' && members[0] !== null ? setMembersLight('Green Light') : console.log('red light') }
    });
    useEffect(() => {   
      {typeof exercises[0] === 'object' && exercises[0] !== null ? setExercisesLight('Green Light') : console.log('red light') }
      });
  
  // const createMember = e => {
  //   dispatch(homePageActions.createMember(addMember));
  // };
  
  // const selectMember = e => {
  //   dispatch(editMemberActions.selectMember(e.target.value));
  //   setAddMember(editMember.member);
  // };



  return (
    <>
      <Helmet>
        <title>Home Page Muscle Church</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Div>
        Members: 
      { membersLight}
      <br />
      Exercises: 
      { exercisesLight}
      
      <Link to="/Tracker">Tracker </Link>
      <Link to="/Settings">Settings </Link>
      </Div>
    </>
  );
}

const Div = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    padding-top: 30px;
    background-color:#363a4a;
    color:white;

`;
const Img = styled.img`
margin:auto;

`;