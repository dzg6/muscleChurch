/* --- STATE --- */
export interface EditExerciseState {
  exercise: String;
  hasReps: Boolean;
  hasResistance: Boolean;
}

export type ContainerState = EditExerciseState;
