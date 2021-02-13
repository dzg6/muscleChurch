/**
*
* Asynchronously loads the component for Column
*
*/

import { lazyLoad } from 'utils/loadable';

export const Column = lazyLoad(() => import('./index'), module => module.Column);