/**
*
* Asynchronously loads the component for EditResistance
*
*/

import { lazyLoad } from 'utils/loadable';

export const EditResistance = lazyLoad(() => import('./index'), module => module.EditResistance);