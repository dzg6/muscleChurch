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
  member?: string;
  time?: string;
  date?: string;
  exercise?: string;
  weight?: string;
  reps?: string;
  resistance?: string;
}

export function LogViewer(props: Props) {
  if (props.test) {
    console.log(props.test);
    return (
      <Div>
        {props.test.map((user, i) => (
          <p>
            {user.member +
              ' ' +
              user.time +
              ' ' +
              user.exercise +
              ' ' +
              user.weight +
              ' ' +
              user.reps +
              ' ' +
              user.resistance}
          </p>
        ))}
      </Div>
    );
  } else {
    return <Div></Div>;
  }
}

const Div = styled.div``;
