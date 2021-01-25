import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Workout {
  readonly id: string;
  readonly player: string;
  readonly date: string;
  readonly exercise?: string;
  readonly weight?: string;
  readonly resistance?: string;
  readonly time?: string;
  constructor(init: ModelInit<Workout>);
  static copyOf(source: Workout, mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void): Workout;
}