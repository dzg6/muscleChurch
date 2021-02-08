/**
*
* Asynchronously loads the component for Radio
*
*/

import { lazyLoad } from 'utils/loadable';

export const Radio = lazyLoad(() => import('./index'), module => module.Radio);