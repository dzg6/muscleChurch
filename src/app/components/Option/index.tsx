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

export function Option(props: Props) {


  if (props.value) {
    return (
      <>
        {props.value.map(function (element, index) {
          return <option value={index}>{element.name}</option>;
        })}
      </>
    );
  } else {
    return <option value="empty">Empty</option>;
  }
}

const Div = styled.div``;
