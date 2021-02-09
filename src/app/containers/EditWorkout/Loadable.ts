/**
*
* Asynchronously loads the component for EditWorkout
*
*/

import { lazyLoad } from 'utils/loadable';

export const EditWorkout = lazyLoad(() => import('./index'), module => module.EditWorkout);