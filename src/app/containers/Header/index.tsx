/**
 *
 * Header
 *
 */

import * as React from 'react';
import styled from 'styled-components/macro';
import MCLogo from './assets/musclechurch-clear.png';
import { Link } from 'react-router-dom';

interface Props {}

export function Header(props: Props) {
  return (
    <>
      <Div>
        <Link to="/">
          <Img src={MCLogo} width="250px" />
        </Link>
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
  background-color: #363a4a;
  color: white;
`;
const Img = styled.img`
  margin: auto;
`;
