/* --- STATE --- */
export interface SettingsState {
    player:String,
    exercise:String,
    weight:string,
    resistanceBand:Number
}

export type ContainerState = SettingsState;
