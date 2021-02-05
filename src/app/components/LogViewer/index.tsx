/**
 *
 * LogViewer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  test?: Array<stats>;
}
interface stats {
  player?: string;
  time?: string;
  date?: string;
  exercise?: string;
}

export function LogViewer(props: Props) {
  if (props.test) {
    console.log(props.test);
    return (
      <Div>
        {props.test.map((user, i) => (
          <p>{user.player + ' ' + user.time +' ' + user.exercise + ' '+ user.date}</p>
        ))}
      </Div>
    );
  } else {
    return <Div></Div>;
  }
}

const Div = styled.div``;
