import { TrackerState } from 'app/containers/Tracker/types';
import { SettingsState } from 'app/containers/Settings/types';
import { StopWatchState } from 'app/containers/StopWatch/types';
import { LogsState } from 'app/containers/Logs/types';
import { OptionsState } from 'app/containers/Options/types';
import { EditMemberState } from 'app/containers/EditMember/types';
import { EditExerciseState } from 'app/containers/EditExercise/types';
import { EditResistanceState } from 'app/containers/EditResistance/types';
import { EditWorkoutState } from 'app/containers/EditWorkout/types';
import { DataState } from 'app/containers/Data/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  tracker?: TrackerState;
  settings?: SettingsState;
  stopWatch?: StopWatchState;
  options?:OptionsState;
  logs?:LogsState;
  editMember?:EditMemberState;
  editExercise?:EditExerciseState;
  editResistance?:EditResistanceState;
  editWorkout?:EditWorkoutState;
  data?:DataState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
