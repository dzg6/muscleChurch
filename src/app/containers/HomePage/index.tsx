import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import  MCLogo  from './assets/musclechurch-white.png';
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
    width: 500px;
    margin: auto;
    margin-top: 30px;

`;
const Img = styled.img`
margin:auto;

`;