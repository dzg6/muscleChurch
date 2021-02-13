/* --- STATE --- */
export interface DataState {
  members: any;
  exercises: any;
  membersLoading:string;
  exercisesLoading:string;
  workoutLoading:string;
}

export type ContainerState = DataState;
