/**
*
* Asynchronously loads the component for H1
*
*/

import { lazyLoad } from 'utils/loadable';

export const H1 = lazyLoad(() => import('./index'), module => module.H1);