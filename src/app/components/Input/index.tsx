/**
 *
 * Input
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface InputProps {
    inputColor?: string;
    isExercise?:boolean;
  };

export const Input = styled.input<InputProps>`
height: 24px;
left: 1px;
line-height: 24px;
box-shadow: 0 4px 0 0 rgba(0,0,0,0.2);
text-align:center;
border:none;
background: ${props => props.isExercise ? "grey" : "none"};
color:white;
margin-bottom:15px;

`;
