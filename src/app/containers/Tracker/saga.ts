 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectSettings} from '../Settings/selectors';
import { selectStopWatch} from '../StopWatch/selectors';
import { selectTracker } from './selectors';
 import { trackerActions } from './slice';

 export function* doSomething() {
  const temp = select(selectSettings);
  const settings: {player, exercise, weight, resistanceBand} = yield select(selectSettings);
  const time: {time} = yield select(selectStopWatch);
   const data = {
    date: 
    new Date().toLocaleString().split(',')[0],
    player: settings.player,
    exercise:settings.exercise,
    weight:settings.weight,
    resistanceBand:settings.resistanceBand,
    time:time.time


   }
   console.log(data);
 }

export function* trackerSaga() {
   yield takeLatest(trackerActions.logExercise.type, doSomething);
}
