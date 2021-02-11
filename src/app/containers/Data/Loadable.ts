/**
*
* Asynchronously loads the component for Data
*
*/

import { lazyLoad } from 'utils/loadable';

export const Data = lazyLoad(() => import('./index'), module => module.Data);