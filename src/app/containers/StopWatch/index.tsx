/**
 *
 * StopWatch
 *
 */

import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectStopWatch } from './selectors';
import { stopWatchSaga } from './saga';
import {  Button } from "app/components/Button";
import { TypePredicateKind } from 'typescript';

interface Props {}

export function StopWatch(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: stopWatchSaga });

  const [stopWatchState, setStopWatchState] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval:any = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stopWatch = useSelector(selectStopWatch);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const startTimer = (e) => {
    e.preventDefault();
    setIsActive(true);
     setStopWatchState(e.target.value)


  };
  const stopTimer = (e) => {
    e.preventDefault();
    setIsActive(false);
    setStopWatchState(e.target.value)

  };
  const logTimer = (e) => {
    e.preventDefault();
    setStopWatchState(e.target.value)

  };
  const resetTimer = (e) => {
    e.preventDefault();
    setSeconds(0);
    setIsActive(false);
    setStopWatchState(e.target.value)

  };



  const renderSwitch = (key) => {
    switch (key) {
      case "start":
       return  <Button value="stop" onClick={stopTimer} >Stop</Button>
        break;
      case "stop":
       return  <Button value="log" onClick={logTimer}>Log</Button>
        break;
      case "log":
        return <p>{seconds} has been Logged on user </p>
        break;
        default:
         return <Button value="start" onClick={startTimer}>Start</Button>
          break;
    }
  };


  return (
    <>
      <Div>{seconds}</Div>
      {renderSwitch(stopWatchState)}
      <br />
      <Button value="" onClick={resetTimer}>Reset</Button>
    </>
  );
}

const Div = styled.div`
text-align:center;`;
