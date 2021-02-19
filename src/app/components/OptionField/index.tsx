/**
 *
 * Option
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';


//TODO setup interface to accept member or exercise interface
interface Props {
  value?: any;
}

export function OptionField(props: Props) {


  if (props.value) {
    return (
      <>
        {props.value.map(function (element, index) {
          return <Option value={index}>{element.name}</Option>;
        })}
      </>
    );
  } else {
    return <Option value="empty">Empty</Option>;
  }
}

export const Option = styled.option`
color:black;
`;
