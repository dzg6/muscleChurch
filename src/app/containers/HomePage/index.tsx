import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import  MCLogo  from './assets/musclechurch-clear.png';
import { Tracker } from '../Tracker/Loadable';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page Muscle Church</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Div>
      <Img src={MCLogo}  width="250px" />
      <Tracker />
      </Div>
    </>
  );
}

const Div = styled.div`
    display: flex;
    height: 100%;
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