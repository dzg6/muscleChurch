/**
*
* Column
*
*/
import * as React from 'react';
import styled from 'styled-components/macro';
interface ColumnProps {
  inputColor?: string;
  isActive?:boolean;
  isExercise?:boolean;
  flex?: string;
  align?:string;
};
export const Column:any = styled.div<ColumnProps>`
  flex: ${props => props.flex || "25%" };
  text-align ${props => props.align || "left"};
  font-size:10pt;
`;

