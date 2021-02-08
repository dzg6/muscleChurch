/**
*
* Asynchronously loads the component for Options
*
*/

import { lazyLoad } from 'utils/loadable';

export const Option = lazyLoad(() => import('./index'), module => module.Option);