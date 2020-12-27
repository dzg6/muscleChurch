/**
 *
 * StopWatch
 *
 */

import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer } from 'utils/redux-injectors';

import { reducer, sliceKey, stopWatchActions } from './slice';
import { settingsActions } from 'app/containers/Settings/slice';
import { selectStopWatch } from './selectors';
import {  Button } from "app/components/Button";
import { TypePredicateKind } from 'typescript';
//Action Slice from Tracker
import { trackerActions } from 'app/containers/Tracker/slice';
import { settings } from 'cluster';

interface Props {}

export function StopWatch(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

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
    dispatch(stopWatchActions.selectTime(seconds));
    setStopWatchState(e.target.value)

  };
  const logTimer = (e) => {
    e.preventDefault();
    dispatch(trackerActions.logExercise());
    setStopWatchState(e.target.value)

  };
  const resetTimer = (e) => {
    e.preventDefault();
    setSeconds(0);
    setIsActive(false);
    dispatch(settingsActions.reset());
    dispatch(stopWatchActions.reset());
    setStopWatchState(e.target.value);

  };



  const renderSwitch = (key) => {
    switch (key) {
      case "start":
       return  <Button  stop value="stop" onClick={stopTimer} >Stop</Button>
        break;
      case "stop":
       return  <Button log value="log" onClick={logTimer}>Log</Button>
        break;
      case "log":
        return <p>{seconds} has been Logged on user </p>
        break;
        default:
         return <Button start value="start" onClick={startTimer}>Start</Button>
          break;
    }
  };


  return (
    <>
      <Div>{seconds}</Div>
      {renderSwitch(stopWatchState)}
      <br />
      <Button reset value="" onClick={resetTimer}>Reset</Button>
    </>
  );
}

const Div = styled.div`
font-size:3em;
font-family: 'Orbitron', sans-serif;
text-align:center;`;
