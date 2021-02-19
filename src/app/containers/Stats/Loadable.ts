/**
*
* Asynchronously loads the component for Stats
*
*/

import { lazyLoad } from 'utils/loadable';

export const Stats = lazyLoad(() => import('./index'), module => module.Stats);