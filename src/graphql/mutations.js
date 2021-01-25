/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
      id
      player
      date
      exercise
      weight
      resistance
      time
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
      id
      player
      date
      exercise
      weight
      resistance
      time
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
      id
      player
      date
      exercise
      weight
      resistance
      time
      createdAt
      updatedAt
    }
  }
`;
