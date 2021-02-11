/**
*
* Asynchronously loads the component for EditInput
*
*/

import { lazyLoad } from 'utils/loadable';

export const EditInput = lazyLoad(() => import('./index'), module => module.EditInput);