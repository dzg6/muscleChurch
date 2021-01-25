/**
 *
 * LogViewer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  test:{
    player:string,
    time:string,
    date:string,
    exercise:string,
  }
}

export function LogViewer(props: Props) {
  if(props.test){
  return <Div>{props.test.player}, {props.test.time}, {props.test.exercise}, {props.test.date}</Div>;
  }
else{
  return <Div></Div>
}
}

const Div = styled.div``;
