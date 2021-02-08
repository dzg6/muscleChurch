/**
*
* Asynchronously loads the component for EditExercise
*
*/

import { lazyLoad } from 'utils/loadable';

export const EditExercise = lazyLoad(() => import('./index'), module => module.EditExercise);