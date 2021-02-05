import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';


export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page Muscle Church</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Div>
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