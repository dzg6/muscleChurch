/**
*
* Option
*
*/
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  value?: any;
}

export function Option(props: Props) {
  console.log(props.value);
  if (props.value[0].member) { 
    return (
        <>
       {
        props.value.map(function(element) {
         return  <option value={element.member}>{element.member}</option>
        })
      }
      </>
    );
  } else if (props.value[0].exercise){
    return (
      <>
     {
      props.value.map(function(element, index) {
       return  <option value={index}>{element.exercise}</option>
      })
    }
    </>
  );
  }else {
    return <option value="empty">Empty</option>
  }
}

const Div = styled.div``;
