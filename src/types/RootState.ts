import { TrackerState } from 'app/containers/Tracker/types';
import { SettingsState } from 'app/containers/Settings/types';
import { StopWatchState } from 'app/containers/StopWatch/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  tracker?: TrackerState;
  settings?: SettingsState;
  stopWatch?: StopWatchState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
