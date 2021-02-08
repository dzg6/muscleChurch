/**
*
* Asynchronously loads the component for Checkbox
*
*/

import { lazyLoad } from 'utils/loadable';

export const Checkbox = lazyLoad(() => import('./index'), module => module.Checkbox);